import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

function changedFiles() {
  try {
    const out = execFileSync('git', ['diff', '--name-only', '--', 'data', 'docs', 'README.md', 'CHANGELOG.md', 'DAILY_SUMMARY.md'], { encoding: 'utf8' });
    return out.split(/\r?\n/).filter(Boolean);
  } catch {
    return [];
  }
}

function classify(name) {
  if (/pricing/i.test(name)) return 'pricing';
  if (/rate-limits?/i.test(name)) return 'limits';
  if (/error/i.test(name)) return 'errors';
  if (/model/i.test(name)) return 'models';
  if (/chat|responses?|introduction|messages|completions|api/i.test(name)) return 'api';
  return 'other';
}

const files = changedFiles();
const vendors = new Map();
for (const file of files) {
  const m = file.match(/^data\/([^/]+)\//);
  if (!m) continue;
  const vendor = m[1];
  if (!vendors.has(vendor)) vendors.set(vendor, []);
  vendors.get(vendor).push(file.replace(`data/${vendor}/`, ''));
}

let md = '# Today Diff\n\n';
if (files.length === 0) {
  md += '- No changes detected today.\n';
} else {
  md += `- Changed files: ${files.length}\n\n`;
  for (const [vendor, items] of vendors.entries()) {
    md += `## ${vendor}\n`;
    const groups = new Map();
    for (const item of items) {
      const bucket = classify(item);
      if (!groups.has(bucket)) groups.set(bucket, []);
      groups.get(bucket).push(item);
    }
    for (const [bucket, list] of groups.entries()) {
      md += `### ${bucket}\n`;
      for (const item of list) md += `- ${item}\n`;
    }
    md += '\n';
  }
  const misc = files.filter(f => !f.startsWith('data/'));
  if (misc.length) {
    md += '## Docs / meta\n';
    for (const f of misc) md += `- ${f}\n`;
  }
}
writeFileSync('TODAY_DIFF.md', md);
console.log('updated TODAY_DIFF.md');
