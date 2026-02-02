---
tags:
  - Quartz
  - level-2🌿
publish: true
created: 2025-04-24T22:56
modified: 2025-10-11T21:55
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
  header: "Poppins",        
  body: "Inter",           
  code: "IBM Plex Mono", 
```

- Custom `Theme`
```
colors: {                
  lightMode: {
    light: "#f3efe7",      
    lightgray: "#e8e4da",  
    gray: "#ccc7b8",       
    darkgray: "#7b7b6e",   
    dark: "#2f2f29",       
    secondary: "hsl(80, 22%, 58%)",  
    tertiary: "hsl(60, 18%, 45%)",  
    highlight: "rgba(155, 175, 165, 0.15)", 
    textHighlight: "#fff28f88",  
  },
  darkMode: {
    light: "#181712",      
    lightgray: "#2d291f",  
    gray: "#3f3a2f",       
    darkgray: "#918a77",   
    dark: "#e3e0d4",       
    secondary: "hsl(80, 20%, 40%)",  
    tertiary: "hsl(60, 15%, 35%)",   
    highlight: "rgba(100, 120, 100, 0.15)",
    textHighlight: "#bfb36a88",  
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