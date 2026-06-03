import mediumZoom from "medium-zoom"

document.addEventListener("nav", () => {
  mediumZoom("article img", {
    margin: 24,
    background: "rgba(0,0,0,0.85)",
  })
})
