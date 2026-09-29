import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadScripts } from './helpers.js';

const FINANZEN_DATA = { werte: [{ key: 'kindergeld', wert: 250 }] };
const w = loadScripts(['js/util.js', 'js/rechner.js'], { FINANZEN_DATA });
const { Rechner } = w;

test('Einkommensteuer 2025: Grundfreibetrag steuerfrei, danach Progression', () => {
  assert.equal(Rechner.einkommensteuer(12096), 0);
  assert.ok(Rechner.einkommensteuer(20000) > 1000 && Rechner.einkommensteuer(20000) < 2000);
  assert.ok(Rechner.einkommensteuer(40000) > Rechner.einkommensteuer(30000));
});

test('Azubi-Vergütung: fast keine Lohnsteuer, nur Sozialabgaben', () => {
  const net = Rechner.nettoAusBrutto(1400, 21);
  assert.ok(net > 1400 * 0.77 && net <= 1400 * 0.79 + 0.01, String(net));
});

test('Simulation summiert Phasen über den Zeitraum und erkennt den Berufsstart', () => {
  const sz = { phasen: [
    { label: 'Schule', monate: 24, typ: 'netto', betrag: 500, kosten: 100 },
    { label: 'Job', monate: 999, typ: 'netto', betrag: 2000, kosten: 0, job: true }
  ] };
  const r = Rechner.simulate(sz, { jahre: 3, svProzent: 21, kindergeld: false });
  assert.equal(r.qualifiziertAb, 24);
  assert.equal(r.perYear[0], 12 * 400);
  assert.equal(r.perYear[2], 12 * 2000);
  assert.equal(r.sum, 24 * 400 + 12 * 2000);
});

test('Kindergeld nur während der Ausbildung', () => {
  const sz = { phasen: [
    { label: 'Ausbildung', monate: 12, typ: 'ohne', betrag: 0, kosten: 0 },
    { label: 'Job', monate: 999, typ: 'netto', betrag: 1000, kosten: 0, job: true }
  ] };
  const r = Rechner.simulate(sz, { jahre: 2, svProzent: 21, kindergeld: true });
  assert.equal(r.perYear[0], 12 * 250);
  assert.equal(r.perYear[1], 12 * 1000);
});
