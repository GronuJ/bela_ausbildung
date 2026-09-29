# Ausbildungsplaner Kiel

Ein kleines Web-Tool für Bela: Ausbildungen zum Erzieher (und verwandte Wege wie Sozialpädagogische Assistenz oder Heilerziehungspflege) in und um Kiel finden, vergleichen und die eigenen Bewerbungen im Blick behalten.

## Was drin ist

| Bereich | Wozu |
| --- | --- |
| **Start** | Was als Nächstes ansteht, die 3 besten Treffer aus dem Ranking und die Checkliste der Unterlagen. |
| **Ranking** | Vier Schieberegler (Geld, Nähe, Schnell fertig, Leichter Einstieg); die Reihenfolge ändert sich sofort. |
| **Karte** | Schulen und Kita-Träger rund um Kiel. Auf Wunsch auch Kitas als Praxisstellen, filterbar nach Träger und Konzept. |
| **Bewerbungen** | Board mit fünf Spalten (Interessant, Beworben, Gespräch, Zusage, Absage), Karten per Drag & Drop oder Antippen verschieben. |
| **Mehr** | Geld (PiA oder Schule im Vergleich), Plan B (welche Wege zum Schulabschluss passen) und die Datensicherung. |

Alle eigenen Daten bleiben im Browser (`localStorage`). Unter „Mehr“ lässt sich alles als Datei sichern und auf einem anderen Gerät wieder laden.

## Starten

Online unter https://gronuj.github.io/bela_ausbildung/ (GitHub Pages aus `main`). Lokal reicht es, `index.html` im Browser zu öffnen. Für die installierbare App (Offline-Modus) braucht es einen Webserver:

```bash
npm start          # http://localhost:8080
```

Auf dem Handy die Seite öffnen und „Zum Home-Bildschirm“ wählen, dann läuft sie wie eine App.

## Daten pflegen

Die recherchierten Daten liegen als JSON in `data/`:

- `ausbildungsstaetten.json` – Schulen und Träger mit Angeboten, Fristen, Voraussetzungen und Quellen
- `kitas.json` – Kitas/Horte für die Praxisstellen-Ebene
- `finanzen.json` – Vergütungen, BAföG, Kindergeld usw. für den Rechner
- `planb.json` – Wege und Zugangsvoraussetzungen für den Plan B Explorer

Nach einer Änderung `npm run build:data` ausführen; das erzeugt die `data/*.js`-Dateien, die die Seite lädt (so funktioniert sie auch ohne Server). `npm test` prüft die Rechenlogik und die Daten.

Alle Angaben sind ohne Gewähr und mit Stand der Recherche versehen. Vor einer Bewerbung bitte die verlinkte Quelle prüfen.

## Technik

Reines HTML/CSS/JavaScript ohne Build-Schritt und ohne Konto. Karte mit [Leaflet](https://leafletjs.com) (liegt in `vendor/`) und Kacheln von © [OpenStreetMap](https://www.openstreetmap.org/copyright)-Mitwirkenden.
