import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadScripts } from './helpers.js';

const FINANZEN_DATA = { werte: [{ key: 'kindergeld', wert: 250 }] };
const w = loadScripts(['js/util.js', 'js/rechner.js'], { FINANZEN_DATA });
const { Rechner } = w;

test('Einkommensteuer 2026: Grundfreibetrag steuerfrei, danach Progression', () => {
  assert.equal(Rechner.einkommensteuer(12348), 0);
  assert.ok(Rechner.einkommensteuer(20000) > 1000 && Rechner.einkommensteuer(20000) < 2000);
  assert.ok(Rechner.einkommensteuer(40000) > Rechner.einkommensteuer(30000));
});

test('bis ca. 1.426 € brutto keine Lohnsteuer (Steuerklasse I, 2026)', () => {
  assert.equal(Math.round(Rechner.nettoAusBrutto(1420, 21.15) * 100) / 100, Math.round(1420 * (1 - 0.2115) * 100) / 100);
  assert.ok(Rechner.nettoAusBrutto(1653.38, 21.15) < 1653.38 * (1 - 0.2115));
});

test('Netto-Schätzung liegt nah an den recherchierten Vergleichswerten', () => {
  // Vergleichswerte aus data/finanzen.json (BMF-Lohnsteuerrechner 2026): PiA 1. Jahr ~1.166,75 €, Erzieher Einstieg ~2.353,44 €
  assert.ok(Math.abs(Rechner.nettoAusBrutto(1490.69, 21.15) - 1166.75) < 25);
  assert.ok(Math.abs(Rechner.nettoAusBrutto(3509.44, 21.15) - 2353.44) < 60);
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
