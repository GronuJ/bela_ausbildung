// Lädt die Browser-Skripte der App in eine Sandbox, damit reine Funktionen testbar sind.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export function loadScripts(files, extra = {}) {
  const sandbox = { console, Math, Date, JSON, ...extra };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  for (const f of files) vm.runInContext(readFileSync(join(ROOT, f), 'utf8'), sandbox, { filename: f });
  return sandbox;
}

export function readJson(rel) {
  return JSON.parse(readFileSync(join(ROOT, rel), 'utf8'));
}
