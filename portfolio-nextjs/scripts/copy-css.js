/**
 * Copies the built layout CSS to public/site.css so layout.tsx can link it
 * when Next.js omits stylesheet tags from the SSR payload.
 */
const fs = require('fs')
const path = require('path')

const projectRoot = path.join(__dirname, '..')
const cssDir = path.join(projectRoot, '.next', 'static', 'css')
const outFile = path.join(projectRoot, 'public', 'site.css')

if (!fs.existsSync(cssDir)) {
  console.warn('[copy-css] .next/static/css not found — skipping')
  process.exit(0)
}

const cssFiles = fs
  .readdirSync(cssDir)
  .filter((f) => f.endsWith('.css'))
  .map((f) => ({ name: f, size: fs.statSync(path.join(cssDir, f)).size }))
  .sort((a, b) => b.size - a.size)

if (!cssFiles.length) {
  console.warn('[copy-css] no CSS files found — skipping')
  process.exit(0)
}

// Use the largest bundle (layout + tailwind + fonts)
const source = path.join(cssDir, cssFiles[0].name)
fs.copyFileSync(source, outFile)
console.log(`[copy-css] ${cssFiles[0].name} → public/site.css (${cssFiles[0].size} bytes)`)
