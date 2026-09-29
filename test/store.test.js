import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadScripts } from './helpers.js';

const { Store } = loadScripts(['js/util.js', 'js/ranking.js', 'js/store.js'], { localStorage: { getItem: () => null, setItem() {} } });

test('Daten aus Version 1 werden übernommen und vereinfacht', () => {
  const s = Store.normalize({
    weights: { verguetung: 4, naehe: 1 },
    bewerbungen: [{ id: 'a', institutionId: 'x', angebotIndex: 0, status: 'vorbereitung', frist: '2027-01-24',
      kontaktName: 'Frau A', kontaktTel: '0431 1', bewertung: 4, verlauf: [{}] }],
    unterlagen: [{ id: 'd', name: 'Lebenslauf', status: 'fertig' }, { id: 'e', name: 'Foto', status: 'offen' }],
    aufgaben: [{ text: 'alt' }]
  });
  assert.equal(s.bewerbungen[0].status, 'idee');
  assert.equal(s.bewerbungen[0].kontakt, 'Frau A, 0431 1');
  assert.equal(s.bewerbungen[0].frist, '2027-01-24');
  assert.equal(s.bewerbungen[0].bewertung, undefined);
  assert.deepEqual(Array.from(s.unterlagen, (u) => u.fertig), [true, false]);
  assert.equal(s.weights.naehe, 1);
  assert.equal(s.weights.verguetung, undefined);
  assert.equal(s.aufgaben, undefined);
});

test('neuer Zustand hat 5 Status und 6 Unterlagen', () => {
  const s = Store.freshState();
  assert.equal(Store.STATUSES.length, 5);
  assert.equal(s.unterlagen.length, 6);
  assert.equal(s.bewerbungen.length, 0);
});
