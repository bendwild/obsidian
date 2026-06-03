import mediumZoom from "medium-zoom"

const options = {
  margin: 24,
  background: "rgba(0, 0, 0, 0.85)",
}

const attachZoom = () => {
  mediumZoom("article img", options)
}

document.addEventListener("nav", attachZoom)
