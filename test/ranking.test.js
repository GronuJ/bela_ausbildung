import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadScripts } from './helpers.js';

const { Ranking } = loadScripts(['js/util.js', 'js/ranking.js']);

const kiel = { lat: 54.3233, lng: 10.1228 };
const insts = [
  { id: 'nah-pia', kategorie: 'schule', schulgeld_monat: 0, ...kiel,
    angebote: [{ beruf: 'Erzieher/in', form: 'pia', dauer_jahre: 3, verguetung: true, zugang_stufe: 3 }] },
  { id: 'fern-schulgeld', kategorie: 'schule', schulgeld_monat: 150, lat: 54.08, lng: 9.98,
    angebote: [{ beruf: 'Erzieher/in', form: 'vollzeit', dauer_jahre: 2, verguetung: false, zugang_stufe: 3 }] },
  { id: 'spa', kategorie: 'schule', schulgeld_monat: null, ...kiel,
    angebote: [{ beruf: 'Sozialpädagogische/r Assistent/in', form: 'vollzeit', dauer_jahre: 2, verguetung: null, zugang_stufe: null }] },
  { id: 'traeger', kategorie: 'traeger', schulgeld_monat: 0, ...kiel,
    angebote: [{ beruf: 'Erzieher/in', form: 'pia', dauer_jahre: 3, verguetung: true, zugang_stufe: 3 }] }
];

test('vier Kriterien mit Standardgewichten', () => {
  assert.deepEqual(Array.from(Ranking.CRITERIA, (c) => c.key), ['geld', 'naehe', 'dauer', 'einstieg']);
});

test('Standardgewichte: bezahlt und nah vor Schulgeld und weit weg', () => {
  const rows = Ranking.rank(insts, { filters: { kategorie: 'schule' } });
  assert.equal(rows[0].inst.id, 'nah-pia');
  assert.equal(rows.at(-1).inst.id, 'fern-schulgeld');
  rows.forEach((r) => assert.ok(r.score >= 0 && r.score <= 100));
});

test('Schieberegler ändern die Reihenfolge', () => {
  const weights = { geld: 0, naehe: 0, dauer: 5, einstieg: 0 };
  const rows = Ranking.rank(insts, { weights, filters: { kategorie: 'schule' } });
  assert.equal(rows.at(-1).inst.id, 'nah-pia'); // 3 Jahre ist am längsten
});

test('fehlende Angaben zählen neutral und werden markiert', () => {
  const parts = Ranking.criterionScores(insts[2], insts[2].angebote[0], {});
  assert.equal(parts.geld.value, 50);
  assert.equal(parts.geld.unknown, true);
  assert.equal(parts.einstieg.unknown, true);
});

test('Filter nach Beruf und Art', () => {
  assert.deepEqual(Array.from(Ranking.rank(insts, { filters: { beruf: 'Sozialpädagogische/r Assistent/in' } }), (r) => r.inst.id), ['spa']);
  assert.ok(!Array.from(Ranking.rank(insts, { filters: { kategorie: 'schule' } }), (r) => r.inst.id).includes('traeger'));
});

test('Entfernung wird vom Wohnort aus gemessen', () => {
  const home = { lat: 54.08, lng: 9.98 };
  const parts = Ranking.criterionScores(insts[1], insts[1].angebote[0], { home });
  assert.ok(parts.naehe.km < 0.1);
  assert.equal(Math.round(parts.naehe.value), 100);
});
