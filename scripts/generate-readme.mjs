import { readFileSync, writeFileSync } from 'node:fs';

const yml = readFileSync('sources/index.yml', 'utf8');
const lines = yml.split(/\r?\n/);
const vendors = [];
let vendor = null;
let inSources = false;
let count = 0;
for (const raw of lines) {
  const line = raw.trimEnd();
  let m = line.match(/^\s{2}([a-z0-9_-]+):\s*$/i);
  if (m) { vendor = { name: m[1], count: 0 }; vendors.push(vendor); continue; }
  m = line.match(/^\s{4}sources:\s*$/); if (m) { inSources = true; continue; }
  m = line.match(/^\s{6}-\s+name:\s*(\S+)\s*$/); if (m && inSources && vendor) { vendor.count++; count++; }
}
writeFileSync(
  'README.md',
  `# llm-collector

LLM intelligence collection repo.

- Vendors: ${vendors.length}
- Sources: ${count}

## Layout

- \`raw/\`: official-source raw snapshots
- \`wiki/\`: organized topic notes and indexes built from \`raw/\`
- \`docs.json\`: Mintlify site configuration
- \`.mintignore\`: excludes non-site content from Mintlify processing

## Mintlify Reads

- \`docs.json\`: site config, navigation, branding, and page structure
- root \`*.mdx\`: top-level pages such as \`index.mdx\`, \`change-log.mdx\`, \`daily-summary.mdx\`, \`today-diff.mdx\`
- \`guide/\`: operational and workflow pages included in navigation
- \`wiki/\`: published topic notes, indexes, and vendor overview pages included in navigation
- \`public/\`: static assets such as logos and favicon

## Mintlify Ignores

- \`raw/\`: raw source snapshots, excluded via \`.mintignore\`
- \`scripts/\`: project automation scripts, excluded via \`.mintignore\`
- \`skills/\`: Codex workflow assets, excluded via \`.mintignore\`
- \`sources/\`: source definitions and config data, excluded via \`.mintignore\`

## Commands

- \`make help\`: show available commands
- \`make dev\`: start the Mintlify preview server
- \`make check\`: validate the Mintlify docs build
- \`make update-pricing\`: refresh raw source snapshots
- \`make generate-wiki\`: regenerate wiki indexes and vendor pages
- \`make refresh\`: run the common refresh flow end to end

See \`wiki/index.md\` for the generated collection index.
`
);
console.log('updated README.md');
