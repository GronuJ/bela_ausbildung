import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, readJson } from './helpers.js';
import { FILES, render } from '../tools/build-data.mjs';

const inKielRegion = (o) => o.lat > 53.8 && o.lat < 54.7 && o.lng > 9.4 && o.lng < 10.9;
const isUrl = (u) => typeof u === 'string' && /^https?:\/\//.test(u);

test('data/*.js ist aus data/*.json erzeugt (npm run build:data)', () => {
  for (const [name, global] of Object.entries(FILES)) {
    assert.equal(readFileSync(join(ROOT, 'data', name + '.js'), 'utf8'), render(name, global), name);
  }
});

test('Ausbildungsstätten: Pflichtfelder, Koordinaten und Quellen', () => {
  const d = readJson('data/ausbildungsstaetten.json');
  const ids = new Set();
  assert.ok(d.institutions.length > 5);
  for (const i of d.institutions) {
    assert.ok(i.id && !ids.has(i.id), 'eindeutige id ' + i.id);
    ids.add(i.id);
    assert.ok(i.name, i.id);
    assert.ok(['schule', 'traeger'].includes(i.kategorie), i.id);
    assert.ok(inKielRegion(i), 'Koordinaten in der Region Kiel: ' + i.id);
    assert.ok((i.quellen || []).length && i.quellen.every(isUrl), 'Quellen: ' + i.id);
    for (const o of i.angebote || []) {
      assert.ok(o.beruf, i.id);
      assert.ok(['vollzeit', 'pia', 'teilzeit'].includes(o.form), i.id + ' form ' + o.form);
      assert.ok(o.dauer_jahre === null || (o.dauer_jahre > 0 && o.dauer_jahre <= 5), i.id);
      assert.ok(o.zugang_stufe === null || o.zugang_stufe === undefined || [1, 2, 3].includes(o.zugang_stufe), i.id);
      if (o.quelle) assert.ok(isUrl(o.quelle), i.id);
    }
  }
});

test('Kitas: Koordinaten und Gruppen', () => {
  const d = readJson('data/kitas.json');
  for (const k of d.kitas) {
    assert.ok(k.id && k.name, JSON.stringify(k));
    assert.ok(inKielRegion(k), 'Kita-Koordinaten: ' + k.name);
    assert.ok(Array.isArray(k.konzept), k.name);
  }
});

test('Finanzen und Plan B: Werte mit Quellen', () => {
  const f = readJson('data/finanzen.json');
  for (const w of f.werte) {
    assert.ok(w.key && w.label, JSON.stringify(w));
    if (typeof w.wert === 'number') assert.ok(isUrl(w.quelle), 'Quelle für ' + w.key);
  }
  const p = readJson('data/planb.json');
  const ids = new Set(p.pfade.map((x) => x.id));
  const keys = p.abschluesse.map((a) => a.key);
  for (const x of p.pfade) {
    for (const k of keys) assert.ok(k in x.zugang, `${x.id}: Zugang für ${k}`);
    for (const n of x.fuehrt_zu || []) assert.ok(ids.has(n), `${x.id} führt zu unbekanntem ${n}`);
  }
});
