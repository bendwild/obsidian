import mediumZoom from "medium-zoom"

let zoom: ReturnType<typeof mediumZoom> | undefined

const setup = () => {
  zoom?.detach()
  zoom = mediumZoom("article img", {
    margin: 24,
    background: "rgba(0, 0, 0, 0.85)",
  })
}

document.addEventListener("nav", setup)
