// Erzeugt data/*.js aus data/*.json, damit die App auch per Doppelklick (file://) ohne Server läuft.
// Aufruf: npm run build:data
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');
export const FILES = {
  ausbildungsstaetten: 'AUSBILDUNG_DATA',
  kitas: 'KITA_DATA',
  finanzen: 'FINANZEN_DATA',
  planb: 'PLANB_DATA'
};

export function render(name, global) {
  const json = JSON.parse(readFileSync(join(dir, name + '.json'), 'utf8'));
  return `/* Automatisch erzeugt aus data/${name}.json (npm run build:data). Bitte die JSON-Datei bearbeiten. */\n` +
    `window.${global} = ${JSON.stringify(json, null, 1)};\n`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  for (const [name, global] of Object.entries(FILES)) {
    writeFileSync(join(dir, name + '.js'), render(name, global));
    console.log('geschrieben: data/' + name + '.js');
  }
}
