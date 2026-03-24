import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const sources = [
  {
    name: 'claude',
    url: 'https://platform.claude.com/docs/en/about-claude/pricing.md',
  },
  {
    name: 'openai',
    url: 'https://developers.openai.com/api/docs/pricing.md',
  },
];

function fetchUrl(url) {
  try {
    return execFileSync('curl', ['-L', '--fail', '--silent', '--show-error', url], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  } catch (e) {
    return `ERROR_FETCHING_URL\n${String(e.stderr || e.message || e)}`;
  }
}

const stamp = new Date().toISOString();
for (const src of sources) {
  const body = fetchUrl(src.url).trimEnd();
  const out = `# ${src.name} pricing snapshot\n\nGenerated at: ${stamp}\n\nSource: ${src.url}\n\n${body}\n`;
  const file = `data/${src.name}/pricing-snapshot.md`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
  console.log(`updated ${file}`);
}
