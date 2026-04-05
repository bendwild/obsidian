import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"

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

function parseModifiedDate(frontmatterValue) {
  if (!frontmatterValue) return null

  const raw = Array.isArray(frontmatterValue) ? frontmatterValue[0] : frontmatterValue
  const date = new Date(raw)

  return Number.isNaN(date.getTime()) ? null : date
}

async function main() {
  const files = await walk(CONTENT_DIR)
  const counts = {}

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8")
    const { data } = matter(raw)

    const modifiedDate = parseModifiedDate(data.modified)

    if (!modifiedDate) {
      continue
    }

    const day = toDayKey(modifiedDate)
    counts[day] = (counts[day] || 0) + 1
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "frontmatter-modified",
    counts,
  }

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true })
  await fs.writeFile(OUT_FILE, JSON.stringify(payload, null, 2), "utf8")

  console.log(`Wrote ${OUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
