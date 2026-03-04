import { QuartzTransformerPlugin } from "../types"
import {
  FullSlug,
  RelativeURL,
  SimpleSlug,
  TransformOptions,
  stripSlashes,
  simplifySlug,
  splitAnchor,
  transformLink,
} from "../../util/path"
import path from "path"
import { visit } from "unist-util-visit"
import isAbsoluteUrl from "is-absolute-url"
import { Root } from "hast"

interface Options {
  markdownLinkResolution: TransformOptions["strategy"]
  prettyLinks: boolean
  openLinksInNewTab: boolean
  lazyLoad: boolean
  externalLinkIcon: boolean
}

const defaultOptions: Options = {
  markdownLinkResolution: "absolute",
  prettyLinks: true,
  openLinksInNewTab: false,
  lazyLoad: false,
  externalLinkIcon: true,
}

export const CrawlLinks: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "LinkProcessing",
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree: Root, file) => {

            // Keep current page slug in original case (graph view relies on this)
            const curSlug = simplifySlug(file.data.slug!)

            // Lowercase all known slugs for resolution only
            const transformOptions: TransformOptions = {
              strategy: opts.markdownLinkResolution,
              allSlugs: ctx.allSlugs.map((s) =>
                simplifySlug(s as FullSlug).toLowerCase() as SimpleSlug
              ),
            }

            const outgoing: Set<SimpleSlug> = new Set()

            visit(tree, "element", (node) => {

              /* ---------------- LINKS ---------------- */

              if (
                node.tagName === "a" &&
                node.properties &&
                typeof node.properties.href === "string"
              ) {
                let dest = node.properties.href as RelativeURL
                const classes = (node.properties.className ?? []) as string[]

                const isExternal = isAbsoluteUrl(dest)
                classes.push(isExternal ? "external" : "internal")

                if (isExternal && opts.externalLinkIcon) {
                  node.children.push({
                    type: "element",
                    tagName: "svg",
                    properties: {
                      "aria-hidden": "true",
                      class: "external-icon",
                      style: "max-width:0.8em;max-height:0.8em",
                      viewBox: "0 0 512 512",
                    },
                    children: [{
                      type: "element",
                      tagName: "path",
                      properties: {
                        d: "M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z",
                      },
                      children: [],
                    }],
                  })
                }

                if (
                  node.children.length === 1 &&
                  node.children[0].type === "text" &&
                  node.children[0].value !== dest
                ) {
                  classes.push("alias")
                }

                node.properties.className = classes

                if (isExternal && opts.openLinksInNewTab) {
                  node.properties.target = "_blank"
                }

                const isInternal =
                  !(isAbsoluteUrl(dest) || dest.startsWith("#"))

                if (isInternal) {
                  // Only lowercase the link text for resolution
                  const destLower = dest.toLowerCase() as RelativeURL

                  // Resolve link against lowercase slugs
                  dest = node.properties.href = transformLink(
                    file.data.slug!,
                    destLower,
                    transformOptions,
                  )

                  const url = new URL(
                    dest,
                    "https://base.com/" + stripSlashes(curSlug, true),
                  )

                  let [destCanonical] = splitAnchor(url.pathname)

                  if (destCanonical.endsWith("/")) {
                    destCanonical += "index"
                  }

                  // Keep original slug casing for graph view and data-slug
                  const full = decodeURIComponent(
                    stripSlashes(destCanonical, true),
                  ) as FullSlug

                  outgoing.add(simplifySlug(full))
                  node.properties["data-slug"] = full

                  // Update link text if prettyLinks is enabled
                  if (
                    opts.prettyLinks &&
                    node.children.length === 1 &&
                    node.children[0].type === "text" &&
                    !node.children[0].value.startsWith("#")
                  ) {
                    node.children[0].value = path.basename(node.children[0].value)
                  }
                }
              }

              /* ---------------- MEDIA ---------------- */

              if (
                ["img", "video", "audio", "iframe"].includes(node.tagName) &&
                node.properties &&
                typeof node.properties.src === "string"
              ) {
                if (opts.lazyLoad) {
                  node.properties.loading = "lazy"
                }

                if (!isAbsoluteUrl(node.properties.src)) {
                  let dest =
                    node.properties.src.toLowerCase() as RelativeURL

                  dest = node.properties.src = transformLink(
                    file.data.slug!,
                    dest,
                    transformOptions,
                  )
                }
              }
            })

            file.data.links = [...outgoing]
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    links: SimpleSlug[]
  }
}
