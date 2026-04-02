import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function FullWidth(_props: QuartzComponentProps) {
    return (
      <button
        id="full-width-toggle"
        type="button"
        aria-label="Toggle full width"
        title="Toggle full width"
      >
        ⤢
      </button>
    )
  }

  FullWidth.afterDOMLoaded = `
    const setState = () => {
      const enabled = localStorage.getItem("full-width") === "true"
      document.body.classList.toggle("full-width", enabled)
    }

    const bindButton = () => {
      const btn = document.getElementById("full-width-toggle")
      if (!btn) return

      btn.onclick = () => {
        const enabled = !document.body.classList.contains("full-width")
        document.body.classList.toggle("full-width", enabled)
        localStorage.setItem("full-width", String(enabled))
      }
    }

    setState()
    bindButton()
  `

  return FullWidth
}) as QuartzComponentConstructor
