import fs from "fs/promises"
import path from "path"

const CONTENT_DIR = path.resolve("content")
const OUT_FILE = path.resolve("quartz/static/note-heatmap.json")

const IGNORE_DIRS = new Set([".obsidian", "templates", "private", "drafts", "attachments"])
const IGNORE_FILES = new Set(["README.md"])

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        files.push(...(await walk(full)))
      }
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".md") && !IGNORE_FILES.has(entry.name)) {
      files.push(full)
    }
  }

  return files
}

function toDayKey(date) {
  return date.toISOString().slice(0, 10)
}

async function main() {
  const files = await walk(CONTENT_DIR)
  const counts = {}

  for (const file of files) {
    const stat = await fs.stat(file)
    const day = toDayKey(stat.mtime)
    counts[day] = (counts[day] || 0) + 1
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "filesystem-mtime",
    counts,
  }

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true })
  await fs.writeFile(OUT_FILE, JSON.stringify(payload, null, 2), "utf8")

  console.log(`Wrote ${OUT_FILE} with ${Object.keys(counts).length} active days`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
