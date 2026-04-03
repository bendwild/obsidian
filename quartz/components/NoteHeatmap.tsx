import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function NoteHeatmap(_props: QuartzComponentProps) {
    return (
      <section className="note-heatmap card">
        <div className="note-heatmap__header">
          <h3>Writing heatmap</h3>
          <p>Each square is a day. Darker means more notes.</p>
        </div>

        <div id="note-heatmap-root" className="note-heatmap__root" />
        <div className="note-heatmap__legend">
          <span>Low</span>
          <span>High</span>
        </div>
      </section>
    )
  }

  NoteHeatmap.afterDOMLoaded = `
    const root = document.getElementById("note-heatmap-root")
    if (!root) return

    const heatmapUrl = new URL("note-heatmap.json", document.baseURI).toString()
    fetch(heatmapUrl)
      .then((res) => res.json())
      .then((payload) => {
        const counts = payload.counts || payload
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const days = []
        for (let i = 364; i >= 0; i--) {
          const d = new Date(today)
          d.setDate(today.getDate() - i)
          days.push(d)
        }

        const max = Math.max(...Object.values(counts), 1)
        const cell = 11
        const gap = 3
        const width = 53 * (cell + gap) - gap
        const height = 7 * (cell + gap) - gap

        const levelForCount = (count) => {
          if (count <= 0) return 0
          const ratio = count / max
          if (ratio > 0.75) return 4
          if (ratio > 0.5) return 3
          if (ratio > 0.25) return 2
          return 1
        }

        const colorForLevel = (level) => {
          if (document.body.classList.contains("dark")) {
            return ["#2a2f2b", "#36503a", "#4e7a52", "#6db06f", "#9ae09a"][level]
          }
          return ["#edf5ea", "#d4ead0", "#afd7a8", "#7fbe7d", "#4a9348"][level]
        }

        let svg = \`<svg class="note-heatmap-svg" viewBox="0 0 \${width} \${height}" role="img" aria-label="Notes heatmap">\`

        days.forEach((d) => {
          const dayKey = d.toISOString().slice(0, 10)
          const count = counts[dayKey] || 0
          const level = levelForCount(count)
          const dayIndex = d.getDay()
          const weekIndex = Math.floor((days.indexOf(d)) / 7)
          const x = weekIndex * (cell + gap)
          const y = dayIndex * (cell + gap)

          svg += \`
            <rect
              x="\${x}"
              y="\${y}"
              width="\${cell}"
              height="\${cell}"
              rx="2"
              ry="2"
              fill="\${colorForLevel(level)}"
              class="note-heatmap-cell"
              data-date="\${dayKey}"
              data-count="\${count}"
            />
          \`
        })

        svg += \`</svg>\`
        root.innerHTML = svg
      })
      .catch(() => {
        root.innerHTML = "<p>Heatmap data not available yet.</p>"
      })
  `

  return NoteHeatmap
}) as QuartzComponentConstructor
