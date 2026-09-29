import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadScripts } from './helpers.js';

const { Ranking } = loadScripts(['js/util.js', 'js/ranking.js']);

const kiel = { lat: 54.3233, lng: 10.1228 };
const insts = [
  { id: 'nah-pia', kategorie: 'schule', schulgeld_monat: 0, ...kiel,
    angebote: [{ beruf: 'Erzieher/in', form: 'pia', dauer_jahre: 3, verguetung: true, zugang_stufe: 2 }] },
  { id: 'fern-vollzeit', kategorie: 'schule', schulgeld_monat: 150, lat: 54.08, lng: 9.98,
    angebote: [{ beruf: 'Erzieher/in', form: 'vollzeit', dauer_jahre: 2, verguetung: false, zugang_stufe: 3 }] },
  { id: 'spa', kategorie: 'schule', schulgeld_monat: null, ...kiel,
    angebote: [{ beruf: 'Sozialpädagogische/r Assistent/in', form: 'vollzeit', dauer_jahre: 2, verguetung: null, zugang_stufe: null }] }
];

test('Standardgewichte bevorzugen bezahlte, nahe Ausbildung ohne Schulgeld', () => {
  const rows = Ranking.rank(insts, {});
  assert.equal(rows[0].inst.id, 'nah-pia');
  assert.equal(rows.at(-1).inst.id, 'fern-vollzeit');
  rows.forEach((r) => assert.ok(r.score >= 0 && r.score <= 100));
});

test('Gewicht nur auf Kürze dreht die Reihenfolge', () => {
  const weights = Object.fromEntries(Ranking.CRITERIA.map((c) => [c.key, 0]));
  weights.dauer = 5;
  const rows = Ranking.rank(insts, { weights });
  assert.equal(rows.at(-1).inst.id, 'nah-pia'); // 3 Jahre ist am längsten
});

test('fehlende Angaben zählen neutral und werden markiert', () => {
  const parts = Ranking.criterionScores(insts[2], insts[2].angebote[0], {});
  assert.equal(parts.kosten.value, 50);
  assert.equal(parts.kosten.unknown, true);
  assert.equal(parts.zugang.unknown, true);
  assert.equal(parts.abschluss.value, 55); // Assistenz < Erzieher
});

test('Bauchgefühl-Sterne fließen ein', () => {
  const weights = Object.fromEntries(Ranking.CRITERIA.map((c) => [c.key, 0]));
  weights.bauchgefuehl = 5;
  const rows = Ranking.rank(insts, { weights, ratings: { 'fern-vollzeit': 5 } });
  assert.equal(rows[0].inst.id, 'fern-vollzeit');
  assert.equal(rows[0].score, 100);
});

test('Filter nach Form und Entfernung', () => {
  assert.deepEqual(Array.from(Ranking.rank(insts, { filters: { formen: ['pia'] } }), (r) => r.inst.id), ['nah-pia']);
  const nah = Ranking.rank(insts, { filters: { maxKm: 10 } }).map((r) => r.inst.id);
  assert.ok(!nah.includes('fern-vollzeit'));
});

test('Entfernung wird vom Wohnort aus gemessen', () => {
  const home = { lat: 54.08, lng: 9.98 };
  const parts = Ranking.criterionScores(insts[1], insts[1].angebote[0], { home });
  assert.ok(parts.entfernung.km < 0.1);
  assert.equal(Math.round(parts.entfernung.value), 100);
});
