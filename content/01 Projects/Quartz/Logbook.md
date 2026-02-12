---
tags:
  - Quartz
  - level-2🌿
publish: true
created: 2025-04-24T22:56
modified: 2026-02-11T14:52
---
# 1. Installation 

[Jzhao.xyz](https://jzhao.xyz) is the creator of this wonderful little tool and has created a [full guide](https://quartz.jzhao.xyz) on how to get started with quartz installation. I have copied some of his guideline pages to this repo out of convenience but please check out his site. 

[Nicole van der Hoeven](https://nicolevanderhoeven.com) has also made a [quartz site](https://notes.nicolevanderhoeven.com/Quartz) and [youtube video](https://www.youtube.com/watch?v=6s6DT1yN4dw&t=34s) dedicated to the installation process. 

# 2.  [[Configuration]]

I have zero experience in coding or website design so have abused chatGPT extensively in order to make adjustments to the site. Here you can find a list of all the adjustments I made. 

## `Config.ts`

- Change `PageTitle`
```
  configuration: {
    pageTitle: "<digital swamp>",
    pageTitleSuffix: "sediments of the mind",
```

- Enable `Google analytics` 
```
    analytics: {
      provider: "google",          
      tagId: "G-RCY......."
```

- Custom `Font`
```
 fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
```

- Custom `Theme`
```
colors: {
    lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
    darkMode: {
        light: "#1e1c1f",        
        lightgray: "#2a272b",    // warm gray surface
        gray: "#6e6a70",         // muted neutral gray
        darkgray: "#d6d1d6",     // soft off-white text
        dark: "#f2eef2",         // main text (slightly warm white)
        secondary: "#5f7f94",    // softened version of #284b63
        tertiary: "#7fa8a0",     // slightly muted sage
        highlight: "rgba(132, 165, 157, 0.18)", // subtle sage glow
        textHighlight: "#fff23666", // softer yellow highlight
        },
      },
    },
  },
```

- Add [[plugin]] `HardLineBreaks`
```
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.HardLineBreaks(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: true,
        enableCheckbox: true
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
```

- Add [[plugin]] `ExplicitPublish`
```
    filters: [Plugin.ExplicitPublish()],
```

- Delete [[plugin]] `CustomOgImages`
```
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}
```

## `Layout.ts`

- Custom `Links`
```
footer: Component.Footer({
    links: {                                   
      Linkedin: "https://www.linkedin.com/in/benjamindewilde/",
      Github: "https://github.com/bendwild",
```

- Custom `Graph` settings
```
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        repelForce: 0.5,
        removeTags: ["level-0🫘", "level-1🌱", "level-2🌿", "level-3🌴", "level-4🍃", "level-5🪱", "level-6🐛"],
        showTags: true,
        enableRadial: true,
```

## `Base.css`

- Page fills full width screen
```
.page {
  max-width: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;
```

## `PageTitle.tsx`

- Custom logo
```
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <h1 class="page-title">
        <img src="https://github.com/bendwild/my-notes/blob/v4/content/06%20Toolkit/Files/Lovepik_com-401580942-frog.png?raw=true" alt="Logo"></img>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>
  )
```

## `en-US.ts`

- custom `404` page text
```
    error: {
      title: "Not Found",
      notFound: "Either this page is private or doesn't exist. I sometimes link from public notes to my private notes, sorry about that!",
      home: "Return to Homepage",
```