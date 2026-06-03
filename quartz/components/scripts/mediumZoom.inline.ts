import mediumZoom from "medium-zoom"

document.addEventListener("nav", () => {
  const zoom = mediumZoom("article img", {
    margin: 24,
    background: "rgba(0,0,0,0.85)",
  })

  window.addCleanup?.(() => zoom.detach())
})
