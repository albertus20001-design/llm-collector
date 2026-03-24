import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const sources = [
  // Claude / Anthropic
  { vendor: 'anthropic', name: 'pricing', url: 'https://platform.claude.com/docs/en/about-claude/pricing.md', rejectPatterns: ['App unavailable in region'] },
  { vendor: 'anthropic', name: 'api-messages', url: 'https://docs.claude.com/en/api/messages', rejectPatterns: [] },
  { vendor: 'anthropic', name: 'api-completions', url: 'https://docs.claude.com/en/api/completions', rejectPatterns: [] },
  { vendor: 'anthropic', name: 'api-models', url: 'https://docs.claude.com/en/docs/about-claude/models', rejectPatterns: [] },
  { vendor: 'anthropic', name: 'api-error-codes', url: 'https://docs.claude.com/en/api/errors', rejectPatterns: [] },
  { vendor: 'anthropic', name: 'api-rate-limits', url: 'https://docs.claude.com/en/api/rate-limits', rejectPatterns: [] },

  // OpenAI
  { vendor: 'openai', name: 'pricing', url: 'https://developers.openai.com/api/docs/pricing.md', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-introduction', url: 'https://platform.openai.com/docs/api-reference/introduction', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-chat', url: 'https://platform.openai.com/docs/api-reference/chat', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-responses', url: 'https://platform.openai.com/docs/api-reference/responses', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-models', url: 'https://platform.openai.com/docs/models', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-errors', url: 'https://platform.openai.com/docs/guides/error-codes', rejectPatterns: [] },
  { vendor: 'openai', name: 'api-rate-limits', url: 'https://platform.openai.com/docs/guides/rate-limits', rejectPatterns: [] },

  // Google
  { vendor: 'google', name: 'pricing', url: 'https://ai.google.dev/gemini-api/docs/pricing', rejectPatterns: [] },
  { vendor: 'google', name: 'api-overview', url: 'https://ai.google.dev/gemini-api/docs', rejectPatterns: [] },
  { vendor: 'google', name: 'api-models', url: 'https://ai.google.dev/gemini-api/docs/models', rejectPatterns: [] },
  { vendor: 'google', name: 'api-structured-output', url: 'https://ai.google.dev/gemini-api/docs/structured-output', rejectPatterns: [] },
  { vendor: 'google', name: 'api-errors', url: 'https://ai.google.dev/gemini-api/docs/troubleshooting', rejectPatterns: [] },

  // DeepSeek
  { vendor: 'deepseek', name: 'pricing', url: 'https://api-docs.deepseek.com/quick_start/pricing', rejectPatterns: [] },
  { vendor: 'deepseek', name: 'api-introduction', url: 'https://api-docs.deepseek.com/', rejectPatterns: [] },
  { vendor: 'deepseek', name: 'api-chat', url: 'https://api-docs.deepseek.com/api/create-chat-completion', rejectPatterns: [] },
  { vendor: 'deepseek', name: 'api-models', url: 'https://api-docs.deepseek.com/models', rejectPatterns: [] },
  { vendor: 'deepseek', name: 'api-errors', url: 'https://api-docs.deepseek.com/guide/error_code', rejectPatterns: [] },

  // OpenRouter
  { vendor: 'openrouter', name: 'pricing', url: 'https://openrouter.ai/docs/pricing', rejectPatterns: [] },
  { vendor: 'openrouter', name: 'api-introduction', url: 'https://openrouter.ai/docs/quickstart', rejectPatterns: [] },
  { vendor: 'openrouter', name: 'api-models', url: 'https://openrouter.ai/models', rejectPatterns: [] },
  { vendor: 'openrouter', name: 'api-rate-limits', url: 'https://openrouter.ai/docs/requests-and-rate-limits', rejectPatterns: [] },
  { vendor: 'openrouter', name: 'api-errors', url: 'https://openrouter.ai/docs/errors', rejectPatterns: [] },
];

function fetchUrl(url) {
  try {
    return { ok: true, body: execFileSync('curl', ['-L', '--fail', '--silent', '--show-error', url], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }) };
  } catch (e) {
    return { ok: false, body: `ERROR_FETCHING_URL\n${String(e.stderr || e.message || e)}` };
  }
}

function isBadContent(body, patterns) {
  return patterns.some((p) => body.includes(p));
}

const stamp = new Date().toISOString();
for (const src of sources) {
  const result = fetchUrl(src.url);
  const file = `data/${src.vendor}/${src.name}.md`;
  mkdirSync(dirname(file), { recursive: true });

  if ((!result.ok || isBadContent(result.body, src.rejectPatterns)) && existsSync(file)) {
    console.log(`skipped ${file} (fetch failed or rejected, keeping existing snapshot)`);
    continue;
  }

  const out = `# ${src.vendor} ${src.name}\n\nGenerated at: ${stamp}\n\nSource: ${src.url}\n\n${result.body.trimEnd()}\n`;
  writeFileSync(file, out);
  console.log(`updated ${file}`);
}
