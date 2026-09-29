# Ausbildungsplaner Kiel

Ein kleines Web-Tool für Bela: Ausbildungen zum Erzieher (und verwandte Wege wie Sozialpädagogische Assistenz oder Heilerziehungspflege) in und um Kiel finden, vergleichen und die eigenen Bewerbungen im Blick behalten.

## Was drin ist

| Bereich | Wozu |
| --- | --- |
| **Übersicht** | Was steht an? Fristen-Radar, Top 3 aus dem Ranking, nächste Aufgaben, Stand der Unterlagen. Termine lassen sich als `.ics` in den Handy-Kalender übernehmen. |
| **Karte** | Schulen und Kita-Träger auf OpenStreetMap, filterbar nach Beruf und Ausbildungsform. Wohnort per Adresse oder Klick setzen, dann stimmen die Entfernungen. Optional eine Ebene mit Kitas, Horten usw. als mögliche Praxisstellen, filterbar nach Träger, Art und Konzept. |
| **Ranking** | Jedes Angebot bekommt 0–100 Punkte. Mit Schiebereglern einstellen, was wichtig ist (Vergütung, Kosten, Nähe, Dauer, Einstieg, Abschluss, Bauchgefühl); die Reihenfolge ändert sich sofort. |
| **Bewerbungen** | Kanban-Board (per Drag & Drop) oder Liste: Status, Frist, Gesprächstermin, Ansprechpartner, Unterlagen je Bewerbung, Sterne, Notizen und automatischer Verlauf. |
| **Aufgaben** | To-dos mit Fälligkeit und eine Checkliste der Bewerbungsunterlagen. |
| **Geld** | Gehalts- und Kostenrechner: PiA vs. schulische Wege (BAföG, Schulgeld, Kindergeld) als Netto-Summe über mehrere Jahre, alle Werte anpassbar. |
| **Plan B** | Schulabschluss angeben und sehen, welche Wege direkt offen sind, welche mit Bedingung, und wohin sie führen. |
| **Infos** | Begriffe erklärt, Zugangswege, Fristen, Vergütung, Förderung, jeweils mit Quelle. |

Alle eigenen Daten bleiben im Browser (`localStorage`). Über „Sicherung herunterladen“ im Fußbereich lässt sich alles als JSON sichern und auf einem anderen Gerät wieder laden.

## Starten

Einfach `index.html` im Browser öffnen, das reicht. Für die installierbare App (Offline-Modus) braucht es einen Webserver:

```bash
npm start          # http://localhost:8080
```

Am einfachsten für Bela: GitHub Pages für dieses Repository einschalten (Settings → Pages → Branch `main`, Ordner `/`). Dann kann er die Seite auf dem Handy öffnen und über „Zum Home-Bildschirm“ wie eine App installieren.

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
