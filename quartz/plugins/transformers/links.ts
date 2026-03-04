// Internal link processing
const isInternal = !(isAbsoluteUrl(dest) || dest.startsWith("#"))
if (isInternal) {
  dest = node.properties.href = transformLink(
    file.data.slug!,
    dest,
    transformOptions
  )

  const url = new URL(dest, "https://base.com/" + stripSlashes(curSlug, true))
  let [destCanonical, _destAnchor] = splitAnchor(url.pathname)
  if (destCanonical.endsWith("/")) destCanonical += "index"

  // Case-insensitive lookup
  const fullLower = stripSlashes(destCanonical, true).toLowerCase()
  const actualFull = slugLookup.get(fullLower) ?? fullLower

  const simple = simplifySlug(actualFull)
  outgoing.add(simple)

  node.properties["data-slug"] = actualFull
  node.properties.href = "/" + actualFull // ❌ this breaks relative links

  // Pretty link text
  if (
    opts.prettyLinks &&
    node.children.length === 1 &&
    node.children[0].type === "text" &&
    !node.children[0].value.startsWith("#")
  ) {
    node.children[0].value = path.basename(node.children[0].value)
  }
}
