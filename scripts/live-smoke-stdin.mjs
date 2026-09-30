import { spawn } from 'node:child_process';

if (!process.stdin.isTTY) throw new Error('Use an interactive terminal for secure key input');
process.stdout.write('Paste the temporary sandbox key (input is hidden), then press Enter: ');
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', chunk => {
  if (chunk.includes('\u0003')) process.exit(130);
  input += chunk;
  if (!/[\r\n]/.test(input)) return;
  process.stdin.setRawMode(false);
  process.stdin.pause();
  process.stdout.write('\n');
  const apiKey = input.trim();
  input = '';
  if (!/^flint_test_[A-Za-z0-9_.-]+$/.test(apiKey)) throw new Error('A sandbox key is required');
  const child = spawn(process.execPath, ['scripts/live-smoke.mjs'], {
    stdio: ['ignore', 'inherit', 'inherit'],
    env: { ...process.env, FLINT_TEST_API_KEY: apiKey },
  });
  child.on('exit', code => process.exit(code ?? 1));
});
