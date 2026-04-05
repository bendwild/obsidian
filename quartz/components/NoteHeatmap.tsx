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

  const heatmapUrl = "/obsidian/static/note-heatmap.json"

  fetch(heatmapUrl)
    .then((res) => {
      if (!res.ok) throw new Error("Heatmap JSON not found")
      return res.json()
    })
    .then((payload) => {
      const counts = payload.counts || payload

      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const days = []
      for (let i = 182; i >= 0; i--) {
        const d = new Date(today)
        d.setDate(today.getDate() - i)
        days.push(d)
      }

      const max = Math.max(...Object.values(counts), 1)
      const cell = 11
      const gap = 3
      const leftPad = 44
      const topPad = 18
      const weekCount = Math.ceil(days.length / 7)
      const width = leftPad + weekCount * (cell + gap) - gap
      const height = topPad + 7 * (cell + gap) - gap + 18

      const levelForCount = (count) => {
        if (count <= 0 || max === 0) return 0

        const ratio = Math.log1p(count) / Math.log1p(max)

        if (ratio > 0.8) return 4
        if (ratio > 0.6) return 3
        if (ratio > 0.35) return 2
        return 1
      }

      const colorForLevel = (level) => {
        if (document.body.classList.contains("dark")) {
          return ["#2a2f2b", "#36503a", "#4e7a52", "#6db06f", "#9ae09a"][level]
        }
        return ["#edf5ea", "#d4ead0", "#afd7a8", "#7fbe7d", "#4a9348"][level]
      }

      const monthLabels = []
      let lastMonth = null

      days.forEach((d, index) => {
        const month = d.getMonth()
        const isMonthStart = d.getDate() <= 7
        if (month !== lastMonth && isMonthStart) {
          monthLabels.push({
            label: d.toLocaleString(undefined, { month: "short" }),
            weekIndex: Math.floor(index / 7),
          })
          lastMonth = month
        }
      })

      const weekdayLabels = [
        { label: "Mon", row: 1 },
        { label: "Wed", row: 3 },
        { label: "Fri", row: 5 },
      ]

      let svg = \`<svg class="note-heatmap-svg" viewBox="0 0 \${width} \${height}" role="img" aria-label="Notes heatmap">\`

      monthLabels.forEach((m) => {
        const x = leftPad + m.weekIndex * (cell + gap)
        svg += \`
          <text class="note-heatmap-month" x="\${x}" y="11">\${m.label}</text>
        \`
      })

      weekdayLabels.forEach((w) => {
        const y = topPad + w.row * (cell + gap) + 9
        svg += \`
          <text class="note-heatmap-weekday" x="4" y="\${y}">\${w.label}</text>
        \`
      })

      days.forEach((d, index) => {
        const dayKey = d.toISOString().slice(0, 10)
        const count = counts[dayKey] || 0
        const level = levelForCount(count)
        const dayIndex = d.getDay()
        const weekIndex = Math.floor(index / 7)
        const x = leftPad + weekIndex * (cell + gap)
        const y = topPad + dayIndex * (cell + gap)

        svg += \`
          <g>
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
            <title>\${count} note\${count === 1 ? "" : "s"}</title>
          </g>
        \`
      })

      svg += \`</svg>\`
      root.innerHTML = svg
    })
    .catch((err) => {
      console.error("Heatmap failed:", err)
      root.innerHTML = "<p>Heatmap data not available yet.</p>"
    })
`

  return NoteHeatmap
}) as QuartzComponentConstructor
