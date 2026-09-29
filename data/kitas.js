/* Automatisch erzeugt aus data/kitas.json (npm run build:data). Bitte die JSON-Datei bearbeiten. */
window.KITA_DATA = {
 "stand": "2026-09-29",
 "quelle": "https://opendata.schleswig-holstein.de/dataset/kindertagesstaetten-aktuell",
 "quellen": {
  "kitaportal-sh": "https://opendata.schleswig-holstein.de/dataset/kindertagesstaetten-2026-09-17 (KitaPortal SH, Datenstand 2026-09-17, CC BY 4.0, Ministerium für Soziales, Jugend, Familie, Senioren, Integration und Gleichstellung SH)",
  "kiel-wfs-kitas": "https://ims.kiel.de/geodatenextern/services/Stadtplan/LHKielWmsWfs/MapServer/WFSServer?request=GetFeature&service=WFS&typeName=Kindertageseinrichtungen&outputFormat=geoJSON (Landeshauptstadt Kiel, CC BY 4.0; nur für Websites/Koordinaten-Ergänzung genutzt)",
  "kiel-wfs-schulkindbetreuung": "https://opendata.schleswig-holstein.de/dataset/schulkindbetreuung-in-kiel (Landeshauptstadt Kiel, CC BY 4.0)",
  "kiel-wfs-jugendtreffs": "https://opendata.schleswig-holstein.de/dataset/jugend-und-madchentreffs-in-kiel (Landeshauptstadt Kiel, CC BY 4.0)",
  "osm": "https://www.openstreetmap.org (Overpass API, Abruf 2026-09-29, ODbL 1.0)"
 },
 "lizenz": "Kitas: CC BY 4.0 – Datenquelle: KitaPortal Schleswig-Holstein / opendata.schleswig-holstein.de; Horte/Schulkindbetreuung und Jugendtreffs: CC BY 4.0 – Landeshauptstadt Kiel; einzelne Jugendhilfe-Einträge und Träger-Ergänzungen: © OpenStreetMap-Mitwirkende, ODbL 1.0",
 "hinweise": [
  "typ aus Betreuungsalter (careFrom/careTo in Monaten) des KitaPortals abgeleitet: bis 44 Monate = Krippe, ab 72 Monate = Hort, sonst Kita (viele 'Kitas' haben Krippen- und Elementargruppen).",
  "Typ 'Hort' umfasst auch Betreute Grundschulen und Offene Ganztagsschulen aus dem Kieler Datensatz Schulkindbetreuung; dort ist der Träger nur gesetzt, wenn er im Namen oder in der Website-Domain erkennbar ist.",
  "Typ 'Jugendhilfe' = städtische Liste der Jugend- und Mädchentreffs (offene Kinder- und Jugendarbeit) plus wenige OSM-Einträge; stationäre Wohngruppen sind kaum erfasst.",
  "konzept nur aus Feldern educationalConcept, integrational (=integrative Plätze), religioeseAusrichtung, Minderheitensprache oder aus dem Namen.",
  "traeger_gruppe 'Unbekannt' = kein Träger in den Daten."
 ],
 "kitas": [
  {
   "id": "kitaportal-7345",
   "name": "4Käse-Hoch",
   "adresse": "Tilsiter Platz 3, 24148 Kiel",
   "lat": 54.32353,
   "lng": 10.17072,
   "traeger": "Marie-Christian-Heime e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://www.marie-christian-heime.de/kindergaerten/kindertagesstaette-4-kaese-hoch",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-471",
   "name": "ASB Familienzentrum SpAsSBande",
   "adresse": "Johannisburger Straße 8, 24149 Kiel",
   "lat": 54.335376,
   "lng": 10.191977,
   "traeger": "Arbeiter-Samariter-Bund Landesverband Schleswig-Holstein e.V.",
   "traeger_gruppe": "ASB",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.asb-sh.de/kita-spassbande",
   "alter_monate": [
    9,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-6711",
   "name": "ASB Kita Möwennest",
   "adresse": "Projensdorfer Straße 97, 24106 Kiel",
   "lat": 54.351776,
   "lng": 10.123322,
   "traeger": "Arbeiter-Samariter-Bund Landesverband Schleswig-Holstein e.V.",
   "traeger_gruppe": "ASB",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.asb-sh.de/was-wir-tunkitas/kita-moewennest-kiel",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-846",
   "name": "ASB Kita Pfützenhopser",
   "adresse": "Stockholmstraße 14, 24109 Kiel",
   "lat": 54.329274,
   "lng": 10.059202,
   "traeger": "Arbeiter-Samariter-Bund Landesverband Schleswig-Holstein e.V.",
   "traeger_gruppe": "ASB",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.asb-sh.de/kita-pfuetzenhopser",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-472",
   "name": "AWO City-Kids",
   "adresse": "Königsweg 23, 24103 Kiel",
   "lat": 54.316487,
   "lng": 10.127459,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-city-kids.html",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-473",
   "name": "AWO Familienzentrum Gustav-Schatz-Hof",
   "adresse": "Gustav-Schatz-Hof 10, 24143 Kiel",
   "lat": 54.312388,
   "lng": 10.150346,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-und-familienzentrum-gustav-schatz-hof.html",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-474",
   "name": "AWO Familienzentrum Sibeliusweg",
   "adresse": "Sibeliusweg 2, 24109 Kiel",
   "lat": 54.323945,
   "lng": 10.051196,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-sibeliusweg.html",
   "alter_monate": [
    11,
    71
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-475",
   "name": "AWO Familienzentrum Spreeallee",
   "adresse": "Spreeallee 76, 24111 Kiel",
   "lat": 54.305303,
   "lng": 10.077049,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-spreeallee.html",
   "alter_monate": [
    11,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-476",
   "name": "AWO Kinderhaus An der Schanze - Familienzentrum Friedrichsort",
   "adresse": "An der Schanze 25, 24159 Kiel",
   "lat": 54.392405,
   "lng": 10.175596,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-an-der-schanze.html",
   "alter_monate": [
    10,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-477",
   "name": "AWO Kinderhaus Hasseer Straße",
   "adresse": "Hasseer Straße 15, 24113 Kiel",
   "lat": 54.307214,
   "lng": 10.099905,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-hasseer-strasse.html",
   "alter_monate": [
    11,
    168
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-7355",
   "name": "AWO Kinderhaus Insterburger Str.",
   "adresse": "Insterburger Str. 2, 24149 Kiel",
   "lat": 54.337165,
   "lng": 10.192283,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-insterburger.html",
   "alter_monate": [
    9,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-478",
   "name": "AWO Kinderhaus Jütlandring",
   "adresse": "Jütlandring 217, 24109 Kiel",
   "lat": 54.315396,
   "lng": 10.045144,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-juetlandring.html",
   "alter_monate": [
    12,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-479",
   "name": "AWO Kinderhaus Klausbrooker Weg",
   "adresse": "Klausbrooker Weg 58, 24107 Kiel",
   "lat": 54.35113,
   "lng": 10.097874,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-klausbrook.html",
   "alter_monate": [
    12,
    96
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-480",
   "name": "AWO Kinderhaus Krummbogen",
   "adresse": "Krummbogen 87, 24113 Kiel",
   "lat": 54.294758,
   "lng": 10.115376,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-krummbogen.html",
   "alter_monate": [
    11,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-481",
   "name": "AWO Kinderhaus Mühlenteich",
   "adresse": "Mühlenteich 2, 24143 Kiel",
   "lat": 54.305468,
   "lng": 10.140825,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-muehlenteich.html",
   "alter_monate": [
    12,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-482",
   "name": "AWO Kinderhaus Narvikstraße",
   "adresse": "Narvikstraße 3, 24109 Kiel",
   "lat": 54.32938,
   "lng": 10.055616,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-narvikstrasse.html",
   "alter_monate": [
    11,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-483",
   "name": "AWO Kinderhaus Nienbrügger Weg",
   "adresse": "Nienbrügger Weg 48, 24107 Kiel",
   "lat": 54.354294,
   "lng": 10.078831,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-nienbruegger-weg.html",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-484",
   "name": "AWO Kinderhaus Steinmarderweg",
   "adresse": "Steinmarderweg 6, 24143 Kiel",
   "lat": 54.307796,
   "lng": 10.145584,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-steinmarderweg.html",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-485",
   "name": "AWO Kinderhaus Tiroler Ring",
   "adresse": "Tiroler Ring 290, 24147 Kiel",
   "lat": 54.30123,
   "lng": 10.181773,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/kinderhaus-tiroler-ring.html",
   "alter_monate": [
    10,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-486",
   "name": "AWO Strandkindergarten mit Bustransfer",
   "adresse": "Falkenhorst 6, 24159 Kiel",
   "lat": 54.402313,
   "lng": 10.187397,
   "traeger": "AWO Kreisverband Kiel e. V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Kita",
   "konzept": [
    "Natur"
   ],
   "website": "https://www.awo-kiel.de/angebote/kindertagesbetreuung/kinderhaeuser/strandkindergarten.html",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-488",
   "name": "Campus-Krippe",
   "adresse": "Westring 383, 24118 Kiel",
   "lat": 54.336999,
   "lng": 10.12368,
   "traeger": "Studentenwerk Schleswig-Holstein",
   "traeger_gruppe": "Sonstige",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://studentenwerk.sh/de/kindertagesstaetten-in-kiel",
   "alter_monate": [
    7,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-489",
   "name": "CompanyKids Kiel",
   "adresse": "Rendsburger Landstraße 33, 24113 Kiel",
   "lat": 54.305905,
   "lng": 10.113597,
   "traeger": "pme Familienservice GmbH",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.familienservice.de/web/companykids-kiel",
   "alter_monate": [
    6,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-490",
   "name": "DRK Familienzentrum Wellsee",
   "adresse": "Goerdelerring 9, 24145 Kiel",
   "lat": 54.288323,
   "lng": 10.156436,
   "traeger": "DRK Kinder- und Jugendhilfe Nord gGmbH",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [],
   "website": "https://kijuhi.drk-stormarn.de/start/unsere-kitas/standard-titel.html",
   "alter_monate": [
    10,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-491",
   "name": "DRK Kita Blocksberg",
   "adresse": "Blocksberg 7, 24103 Kiel",
   "lat": 54.327699,
   "lng": 10.139657,
   "traeger": "DRK Kinder- und Jugendhilfe Nord gGmbH",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [],
   "website": "https://kijuhi.drk-stormarn.de/start/unsere-kitas/standard-titel-4.html",
   "alter_monate": [
    10,
    78
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-492",
   "name": "DRK Kita Stadtfeldkamp",
   "adresse": "Stadtfeldkamp 47, 24114 Kiel",
   "lat": 54.313625,
   "lng": 10.112419,
   "traeger": "DRK Kinder- und Jugendhilfe Nord gGmbH",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [],
   "website": "https://kijuhi.drk-stormarn.de/start/unsere-kitas/standard-titel-3.html",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-493",
   "name": "DRK Kita Stadtzwerge",
   "adresse": "Weißenburgstraße 21-29, 24116 Kiel",
   "lat": 54.32548,
   "lng": 10.117811,
   "traeger": "DRK Kinder- und Jugendhilfe Nord gGmbH",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [],
   "website": "https://kijuhi.drk-stormarn.de/start/unsere-kitas/standard-titel-2.html",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-494",
   "name": "DRK Kita Suchsdorf",
   "adresse": "Kleine Koppel 1, 24107 Kiel",
   "lat": 54.355776,
   "lng": 10.070564,
   "traeger": "DRK Kinder- und Jugendhilfe Nord gGmbH",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [],
   "website": "https://kijuhi.drk-stormarn.de/start/unsere-kitas/standard-titel-1.html",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-495",
   "name": "DRK-Kita im Heinrichs Familienhaus",
   "adresse": "Kronshagener Weg 130c, 24116 Kiel",
   "lat": 54.328664,
   "lng": 10.101607,
   "traeger": "DRK-Heinrich-Schwesternschaft e. V.",
   "traeger_gruppe": "DRK",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.drk-schwesternschaften-kiel.de/kita",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-522",
   "name": "Die Klimperkiste e.V.",
   "adresse": "Sophienblatt 71a, 24114 Kiel",
   "lat": 54.309687,
   "lng": 10.127084,
   "traeger": "Die Klimperkiste e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.klimperkiste-kiel.de",
   "alter_monate": [
    2,
    85
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-497",
   "name": "Die Strandläufer",
   "adresse": "Jägersberg 7-9, 24103 Kiel",
   "lat": 54.328711,
   "lng": 10.132101,
   "traeger": "Die Strandläufer e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.diestrandlaeufer.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-498",
   "name": "Die kleinen Delfine",
   "adresse": "Metzstraße 16, 24116 Kiel",
   "lat": 54.326376,
   "lng": 10.118013,
   "traeger": "Die kleinen Delfine gUG",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": null,
   "alter_monate": [
    7,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-501",
   "name": "Eider-Kinderladen",
   "adresse": "Speckenbeker Weg 71, 24113 Kiel",
   "lat": 54.291902,
   "lng": 10.084342,
   "traeger": "Eider-Kinderladen e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.eider-kinderladen.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-502",
   "name": "Ev. Emmaus Kita",
   "adresse": "Eduard-Adler-Straße 23, 24106 Kiel",
   "lat": 54.346573,
   "lng": 10.128784,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/emmaus-kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-503",
   "name": "Ev. Familienzentrum Elmschenhagen",
   "adresse": "Lechweg 59, 24146 Kiel",
   "lat": 54.287092,
   "lng": 10.190686,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-elmschenhagen",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-504",
   "name": "Ev. Kindergarten Ankerplatz",
   "adresse": "Ankerplatz 1, 24159 Kiel",
   "lat": 54.420965,
   "lng": 10.17373,
   "traeger": "Zentrum für Kirchliche Dienste des Ev.Luth. Kirchenkreises Rendsburg-Eckernförde",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://www.ev-kita-rd-eck.de/ankerplatz",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-505",
   "name": "Ev. Kindergarten Stephanus",
   "adresse": "Allgäuer Straße 1, 24146 Kiel",
   "lat": 54.286851,
   "lng": 10.199731,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-stephanus",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-506",
   "name": "Ev. Kindergarten Weinberg",
   "adresse": "Weinberg 1, 24147 Kiel",
   "lat": 54.301393,
   "lng": 10.179095,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-weinberg",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-507",
   "name": "Ev. Kita 3 Könige",
   "adresse": "Königsweg 78a, 24114 Kiel",
   "lat": 54.312245,
   "lng": 10.122952,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-3-koenige",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-515",
   "name": "Ev. Kita Arche Kunterbunt",
   "adresse": "Jütlandring 143, 24109 Kiel",
   "lat": 54.31263,
   "lng": 10.045084,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-arche-kunterbunt",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-499",
   "name": "Ev. Kita Die kleinen Hammeraner Kirchenmäuse",
   "adresse": "Vorderkronsberg 22, 24113 Kiel",
   "lat": 54.293105,
   "lng": 10.078749,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/die-kleinen-kirchenmaeuse-hammer",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-500",
   "name": "Ev. Kita Die kleinen Kirchenmäuse",
   "adresse": "Rendsburger Landstraße 389, 24111 Kiel",
   "lat": 54.300967,
   "lng": 10.0661,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Krippe",
   "konzept": [
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/die-kleinen-kirchenmaeuse-russee",
   "alter_monate": [
    11,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-508",
   "name": "Ev. Kita Gaarden",
   "adresse": "Stoschstraße 50, 24143 Kiel",
   "lat": 54.309332,
   "lng": 10.154958,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-gaarden",
   "alter_monate": [
    18,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-509",
   "name": "Ev. Kita Hasseldieksdamm",
   "adresse": "Am Wohld 2-4, 24109 Kiel",
   "lat": 54.319025,
   "lng": 10.071463,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-hasseldieksdamm",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-510",
   "name": "Ev. Kita Heiligengeist",
   "adresse": "Holtenauer Straße 91, 24105 Kiel",
   "lat": 54.335538,
   "lng": 10.133059,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-heiligengeist",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-511",
   "name": "Ev. Kita Hoppetosse",
   "adresse": "Kastanienallee 18, 24159 Kiel",
   "lat": 54.371542,
   "lng": 10.144319,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-hoppetosse",
   "alter_monate": [
    30,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-513",
   "name": "Ev. Kita Kirchenzwerge",
   "adresse": "Barkauer Straße 11b, 24145 Kiel",
   "lat": 54.286779,
   "lng": 10.135441,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-kirchenzwerge",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-514",
   "name": "Ev. Kita Lummerland - Familienzentrum Friedrichsort",
   "adresse": "Koloniestraße 3, 24159 Kiel",
   "lat": 54.391625,
   "lng": 10.172969,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-lummerland",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-516",
   "name": "Ev. Kita Michaelis",
   "adresse": "Schleswiger Straße 57, 24113 Kiel",
   "lat": 54.302926,
   "lng": 10.109972,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/evangelische-kita-michaelis",
   "alter_monate": [
    20,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-6615",
   "name": "Ev. Kita Ninive",
   "adresse": "Hohenrade 1, 24106 Kiel",
   "lat": 54.3548,
   "lng": 10.1378,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-ninive",
   "alter_monate": [
    11,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-517",
   "name": "Ev. Kita Noahs Arche",
   "adresse": "Ivensring 7, 24149 Kiel",
   "lat": 54.333223,
   "lng": 10.188075,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-noahs-arche",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-518",
   "name": "Ev. Kita Suchsdorf",
   "adresse": "Alte Dorfstraße 51-53, 24107 Kiel",
   "lat": 54.360575,
   "lng": 10.08396,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/kita-suchsdorf",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-521",
   "name": "Ev. Kita Thomas",
   "adresse": "Skandinaviendamm 350b, 24109 Kiel",
   "lat": 54.321926,
   "lng": 10.051165,
   "traeger": "Ev.-Luth. Kirchenkreis Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://kita-altholstein.de/unsere-kitas/thomaskita",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-5123",
   "name": "Flyggerei Kita Halle 400",
   "adresse": "An der Halle 400 1, 24143 Kiel",
   "lat": 54.312,
   "lng": 10.136222,
   "traeger": "KJSH Stiftung",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://flyggerei.de/haus/halle-400",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-847",
   "name": "Flyggerei Kita Haus elf",
   "adresse": "Im Anscharpark 11, 24106 Kiel",
   "lat": 54.356717,
   "lng": 10.136257,
   "traeger": "Kinder- u. Jugendhilfe Verbund Kiel - KJSH-Stiftung",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://flyggerei.de/haus/hauself",
   "alter_monate": [
    9,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-561",
   "name": "Flyggrei Kita Villa Nolde",
   "adresse": "Kiellinie 275, 24106 Kiel",
   "lat": 54.355312,
   "lng": 10.135505,
   "traeger": "Kinder- u. Jugendhilfe Verbund Kiel - KJSH-Stiftung",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://flyggerei.de/haus/villa-nolde",
   "alter_monate": [
    6,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-523",
   "name": "Freies Kinderhaus",
   "adresse": "Gurlittstraße 2, 24106 Kiel",
   "lat": 54.356781,
   "lng": 10.117762,
   "traeger": "Freies Kinderhaus e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.freies-kinderhaus-kiel.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-527",
   "name": "HDU-Kinderhaus",
   "adresse": "Beselerallee 40, 24105 Kiel",
   "lat": 54.336597,
   "lng": 10.137926,
   "traeger": "HdU Ambulanter Pflegedienst e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.hdu-kiel.de/kindergarten.html",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-525",
   "name": "HdF Familienzentrum Bunte Welt",
   "adresse": "Bergenring 4, 24109 Kiel",
   "lat": 54.325344,
   "lng": 10.057101,
   "traeger": "Haus der Familie, Familienbildungsstätte Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://www.haus-der-familie-kiel.de/kindertagesbetreuung/krippe-bunte-welt",
   "alter_monate": [
    12,
    44
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-524",
   "name": "HdF Krippe \"Heimathafen\"",
   "adresse": "Lornsenstraße 14, 24105 Kiel",
   "lat": 54.334486,
   "lng": 10.140842,
   "traeger": "Haus der Familie, Familienbildungsstätte Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://www.haus-der-familie-kiel.de/kindertagesbetreuung/krippe-heimathafen",
   "alter_monate": [
    12,
    44
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-6572",
   "name": "HdF Naturkita Ellerbeker Waldkinder",
   "adresse": "Julius-Brecht-Straße 20, 24148 Kiel",
   "lat": 54.313931,
   "lng": 10.173491,
   "traeger": "Haus der Familie, Familienbildungsstätte Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Natur"
   ],
   "website": "https://www.haus-der-familie-kiel.de",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-526",
   "name": "HdF Waldkita Projensdorfer Gehölz",
   "adresse": "Lornsenstraße 14, 24105 Kiel",
   "lat": 54.360507,
   "lng": 10.111939,
   "traeger": "Haus der Familie, Familienbildungsstätte Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Natur"
   ],
   "website": "https://www.haus-der-familie-kiel.de/kindertagesbetreuung/wald-kita-waldhoernchen",
   "alter_monate": [
    30,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-528",
   "name": "Janusz-Korczak-Haus 1",
   "adresse": "Skandinaviendamm 352, 24109 Kiel",
   "lat": 54.321732,
   "lng": 10.050053,
   "traeger": "Kath. Pfarrei Franz von Assisi",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://www.jkh-kindertageseinrichtung.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-4279",
   "name": "Janusz-Korczak-Haus 2",
   "adresse": "Skandinaviendamm 352, 24109 Kiel",
   "lat": 54.321731,
   "lng": 10.050054,
   "traeger": "Kath. Pfarrei Franz von Assisi",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.jkh-kindertageseinrichtung.de",
   "alter_monate": [
    0,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-7480",
   "name": "KMTV Bewegungskita Fuchsbau",
   "adresse": "Jahnstraße 3, 24116 Kiel",
   "lat": 54.330647,
   "lng": 10.12756,
   "traeger": "Kieler MTV von 1844 e.V. (KMTV)",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Bewegung"
   ],
   "website": "https://kmtv.de/kita-fuchsbau",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-529",
   "name": "Kath. Kinderhaus St. Nikolaus",
   "adresse": "Rathausstraße 5, 24103 Kiel",
   "lat": 54.322203,
   "lng": 10.131335,
   "traeger": "Kath. Pfarrei Franz von Assisi",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "http://kiga.st-nikolaus-kiel.de",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-530",
   "name": "Kath. Kita St. Answerushaus",
   "adresse": "Muhliusstraße 67, 24103 Kiel",
   "lat": 54.325463,
   "lng": 10.131245,
   "traeger": "Sozialdienst kath. Frauen e. V.",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Krippe",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.skf-kiel.de/angebote/kindertagesstaetten/st-answerushaus",
   "alter_monate": [
    9,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-531",
   "name": "Kath. Kita St. Antoniushaus",
   "adresse": "Rüsterstraße 30, 24146 Kiel",
   "lat": 54.294488,
   "lng": 10.17934,
   "traeger": "Sozialdienst kath. Frauen e. V.",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.skf-kiel.de/kindertagesstaetten/kindertagesstaette-st-antoniushaus.html",
   "alter_monate": [
    9,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-532",
   "name": "Kath. Kita St. Heinrich",
   "adresse": "Feldstraße 172, 24105 Kiel",
   "lat": 54.346987,
   "lng": 10.139545,
   "traeger": "Kath. Pfarrei Franz von Assisi",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.katholisch-in-kiel.de/kitaheinrich",
   "alter_monate": [
    36,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-533",
   "name": "KiLa Sprotten",
   "adresse": "Damperhofstraße 5, 24103 Kiel",
   "lat": 54.324586,
   "lng": 10.126318,
   "traeger": "KiLa Sprotten e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Bewegung"
   ],
   "website": "http://www.kila-sprotten.de",
   "alter_monate": [
    10,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-496",
   "name": "Kiel Pries Daginstitution",
   "adresse": "Fritz-Reuter-Straße 28, 24159 Kiel",
   "lat": 54.391728,
   "lng": 10.161357,
   "traeger": "Dansk Skoleforening for Sydslesvig e. V. Kiel",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Bilingual"
   ],
   "website": "https://www.skoleforeningen.org/praktiske-oplysninger/kiel-pries-daginstitution",
   "alter_monate": [
    6,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-534",
   "name": "Kinder für Kinder Prüner Gang 14",
   "adresse": "Prüner Gang 14, 24103 Kiel",
   "lat": 54.320285,
   "lng": 10.126348,
   "traeger": "Saskia & Michael Neumann",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kinder-fuer-kinder.de",
   "alter_monate": [
    3,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-6445",
   "name": "Kinder für Kinder Prüner Gang 7",
   "adresse": "Prüner Gang 7, 24103 Kiel",
   "lat": 54.32018,
   "lng": 10.12722,
   "traeger": "Saskia & Michael Neumann",
   "traeger_gruppe": "Sonstige",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://www.kinder-fuer-kinder.de",
   "alter_monate": [
    6,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-535",
   "name": "Kinder für Kinder Wik",
   "adresse": "Holtenauer Straße 295, 24106 Kiel",
   "lat": 54.35468,
   "lng": 10.130691,
   "traeger": "Saskia & Michael Neumann",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kinder-fuer-kinder.de",
   "alter_monate": [
    10,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-536",
   "name": "Kindergarten Am Moorwiesengraben",
   "adresse": "Am Moorwiesengraben 22, 24113 Kiel",
   "lat": 54.304175,
   "lng": 10.09777,
   "traeger": "Kindergarten Am Moorwiesengraben e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.dachverband-kiel.de/Kindergruppen/Moorwiesengraben",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-537",
   "name": "Kindergarten Bullerby",
   "adresse": "Feldstraße 104, 24105 Kiel",
   "lat": 54.34078,
   "lng": 10.140151,
   "traeger": "Förderkreis Kindergarten Bullerby e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.kindergarten-bullerby.de",
   "alter_monate": [
    36,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-538",
   "name": "Kindergarten Wrangelstraße",
   "adresse": "Wrangelstraße 49, 24105 Kiel",
   "lat": 54.339078,
   "lng": 10.136509,
   "traeger": "Kindergarten Wrangelstraße e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.kiga-wrangelstrasse.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-539",
   "name": "Kindergruppe Die Pusteblume",
   "adresse": "Feldstraße 92, 24105 Kiel",
   "lat": 54.339978,
   "lng": 10.140182,
   "traeger": "Die Pusteblume e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.pusteblume-kiel.de",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-542",
   "name": "Kinderladen Brook",
   "adresse": "Kirchhofallee 29, 24103 Kiel",
   "lat": 54.317566,
   "lng": 10.124553,
   "traeger": "Kinderladen Brook e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.kinderladenbrook.de",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-544",
   "name": "Kinderladen Elmschlinge",
   "adresse": "Dorfstraße 17, 24146 Kiel",
   "lat": 54.294921,
   "lng": 10.174151,
   "traeger": "Kindergarteninitiative Elmschlinge e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.dachverband-kiel.de/Kindergruppen/Elmschlinge",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-545",
   "name": "Kinderladen Fantadu",
   "adresse": "Eckernförder Straße 431, 24107 Kiel",
   "lat": 54.357967,
   "lng": 10.081896,
   "traeger": "Kinderladen Fantadu e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.kinderladen-fantadu.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-547",
   "name": "Kinderladen Schmuddelkinder in Bewegung",
   "adresse": "Hermann-Boßdorf-Weg 4, 24159 Kiel",
   "lat": 54.3982,
   "lng": 10.1621,
   "traeger": "Schmuddelkinder in Bewegung e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Bewegung"
   ],
   "website": "https://www.schmuddelkinder-kiel.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-548",
   "name": "Kinderladen Spiel und Aktion",
   "adresse": "Lornsenstraße 28, 24105 Kiel",
   "lat": 54.334503,
   "lng": 10.138784,
   "traeger": "Spiel und Aktion e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": null,
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-543",
   "name": "Kinderladen | Die kleinen Strolche",
   "adresse": "Hansastraße 48, 24118 Kiel",
   "lat": 54.335233,
   "lng": 10.127127,
   "traeger": "Die kleinen Strolche e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.dachverband-kiel.de/Kindergruppen/Die-kleinen-Strolche",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-549",
   "name": "Kinderstube Kiel e.V.",
   "adresse": "Wrangelstraße Wrangelstr, 24105 Kiel",
   "lat": 54.339805,
   "lng": 10.140869,
   "traeger": "Kinderstube Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldorf"
   ],
   "website": "https://www.kinderstube-kiel.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-487",
   "name": "Kindertageseinrichtung am Städtischen Krankenhaus Kiel",
   "adresse": "Metzstraße 53, 24116 Kiel",
   "lat": 54.323892,
   "lng": 10.115312,
   "traeger": "Städtisches Krankenhaus Kiel GmbH",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.krankenhaus-kiel.de/kita",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-550",
   "name": "Kita Die Lütten",
   "adresse": "Knooper Weg 105, 24116 Kiel",
   "lat": 54.330302,
   "lng": 10.12808,
   "traeger": "Die Lütten e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://dieluetten-ev.de",
   "alter_monate": [
    6,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-3717",
   "name": "Kita Ernestine",
   "adresse": "Ernestinenstraße 42, 24143 Kiel",
   "lat": 54.311699,
   "lng": 10.159113,
   "traeger": "Gründungsinitiative für Waldorfpädagogik in Gaarden e.V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldorf",
    "Integrativ/inklusiv"
   ],
   "website": "https://kita-ernestine.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-551",
   "name": "Kita Grashüpfer Holtenau",
   "adresse": "Nixenweg 4, 24159 Kiel",
   "lat": 54.371522,
   "lng": 10.129199,
   "traeger": "Kita Grashüpfer Holtenau e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Bewegung"
   ],
   "website": "http://www.kiel-kindergarten.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-552",
   "name": "Kita Grenzstraße",
   "adresse": "Grenzstraße 17, 24149 Kiel",
   "lat": 54.330588,
   "lng": 10.181198,
   "traeger": "Studentenwerk Schleswig-Holstein",
   "traeger_gruppe": "Sonstige",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://studentenwerk.sh/de/kindertagesstaetten-in-kiel",
   "alter_monate": [
    8,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-7596",
   "name": "Kita Heimathafen am Seefischmarkt",
   "adresse": "Wischofstraße 51-53, 24148 Kiel",
   "lat": 54.326472,
   "lng": 10.179347,
   "traeger": "Marie-Christian-Heime e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": null,
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-512",
   "name": "Kita Jakobi Kiel",
   "adresse": "Knooper Weg 53, 24103 Kiel",
   "lat": 54.325061,
   "lng": 10.127238,
   "traeger": "Diakonisches Werk Altholstein GmbH",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Religiös"
   ],
   "website": "https://www.lutherjakobi.de/jakobi-kindergarten",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-553",
   "name": "Kita Kleine Hände",
   "adresse": "Hamburger Chaussee 154, 24113 Kiel",
   "lat": 54.30179,
   "lng": 10.10792,
   "traeger": "Kleine Hände Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.kleine-haende-kiel.de",
   "alter_monate": [
    2,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-554",
   "name": "Kita Lernwerft",
   "adresse": "Schusterkrug 5, 24159 Kiel",
   "lat": 54.384224,
   "lng": 10.154865,
   "traeger": "Lernwerft GmbH",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.lernwerft.de/kindertagesstaette",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-555",
   "name": "Kita Lug ins Land",
   "adresse": "Rönner Weg 62-64, 24146 Kiel",
   "lat": 54.281523,
   "lng": 10.195763,
   "traeger": "Marie-Christian-Heime e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.marie-christian-heime.de/lug-ins-land",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-556",
   "name": "Kita Luv & Lee",
   "adresse": "Feldstraße 5-7, 24105 Kiel",
   "lat": 54.329377,
   "lng": 10.138676,
   "traeger": "Kita Luv & Lee gemeinnützige UG",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Reggio"
   ],
   "website": "http://www.kita-luvundlee.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-3422",
   "name": "Kita Musica",
   "adresse": "Stephan-Heinzel-Straße 9, 24103 Kiel",
   "lat": 54.322399,
   "lng": 10.122466,
   "traeger": "Adelby 1 Kinder- und Jugenddienste gGmbH",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.adelby1.de/musica",
   "alter_monate": [
    8,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-558",
   "name": "Kita Olshausenstraße",
   "adresse": "Olshausenstraße 64b, 24118 Kiel",
   "lat": 54.340772,
   "lng": 10.116805,
   "traeger": "Studentenwerk Schleswig-Holstein",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://studentenwerk.sh/de/kindertagesstaetten-in-kiel",
   "alter_monate": [
    10,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-559",
   "name": "Kita Rasselbande",
   "adresse": "Im Dorfe 1, 24146 Kiel",
   "lat": 54.291148,
   "lng": 10.17544,
   "traeger": "Rasselbande Elmschenhagen e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.rasselbande-kiel.de",
   "alter_monate": [
    18,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-562",
   "name": "Kita Waldhof",
   "adresse": "Rönner Weg 75, 24146 Kiel",
   "lat": 54.279249,
   "lng": 10.20074,
   "traeger": "Marie-Christian-Heime e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.marie-christian-heime.de/waldhofkindergarten",
   "alter_monate": [
    0,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-563",
   "name": "Kita des UKSH Campus Kiel",
   "adresse": "Feldstraße 18a, 24105 Kiel",
   "lat": 54.33292,
   "lng": 10.141407,
   "traeger": "Universitätsklinikum Schleswig-Holstein",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.uksh.de/kitas/Campus+Kiel.html",
   "alter_monate": [
    9,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-564",
   "name": "Kita im Wissenschaftspark",
   "adresse": "Einsteinstraße 3, 24118 Kiel",
   "lat": 54.343401,
   "lng": 10.121467,
   "traeger": "Studentenwerk Schleswig-Holstein",
   "traeger_gruppe": "Sonstige",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://studentenwerk.sh/de/kindertagesstaetten-in-kiel",
   "alter_monate": [
    10,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-519",
   "name": "Lutherkindergarten Kindergarten",
   "adresse": "Schillerstraße 26/27, 24116 Kiel",
   "lat": 54.330718,
   "lng": 10.124119,
   "traeger": "Diakonisches Werk Altholstein GmbH",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Kita",
   "konzept": [
    "Religiös"
   ],
   "website": "https://www.lutherjakobi.de/fur-kinder/kindergarten/luther-kindergarten",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-1144",
   "name": "NaturKita Kiel Wald- und Wiesenhüpfer",
   "adresse": "Julienluster Weg 37a, 24109 Kiel",
   "lat": 54.316617,
   "lng": 10.081529,
   "traeger": "SalutoGenese Institut Bildung u. Gesundheit für Alle e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Natur"
   ],
   "website": "https://naturkita-kiel.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-565",
   "name": "Petterssons Laden",
   "adresse": "Eichkamp 11, 24116 Kiel",
   "lat": 54.331657,
   "lng": 10.111502,
   "traeger": "Freier Kindergarten e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": null,
   "alter_monate": [
    30,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-568",
   "name": "PÄDIKO Kinderkrippe Gaarden",
   "adresse": "Kaiserstraße 31c/33, 24143 Kiel",
   "lat": 54.312219,
   "lng": 10.149443,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Krippe",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kinderkrippe-gaarden",
   "alter_monate": [
    8,
    44
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-570",
   "name": "PÄDIKO Kita Colorito",
   "adresse": "Herzog-Friedrich-Straße 81, 24103 Kiel",
   "lat": 54.318691,
   "lng": 10.125687,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-colorito",
   "alter_monate": [
    10,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-571",
   "name": "PÄDIKO Kita EinStein und Waldgruppen Kronsburg",
   "adresse": "Grönhorst 10, 24145 Kiel",
   "lat": 54.283175,
   "lng": 10.124915,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-einstein",
   "alter_monate": [
    36,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-572",
   "name": "PÄDIKO Kita Farbklecks",
   "adresse": "Gerhardstraße 36, 24105 Kiel",
   "lat": 54.334571,
   "lng": 10.135719,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-farbklecks",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-567",
   "name": "PÄDIKO Kita Fördewichtel",
   "adresse": "Feldstraße 236-238, 24106 Kiel",
   "lat": 54.35346,
   "lng": 10.136404,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Krippe",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/krippe-foerdewichtel",
   "alter_monate": [
    10,
    44
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-574",
   "name": "PÄDIKO Kita Kinderdorf",
   "adresse": "Bustorfer Weg 59, 24145 Kiel",
   "lat": 54.280099,
   "lng": 10.121592,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-kinderdorf",
   "alter_monate": [
    10,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-575",
   "name": "PÄDIKO Kita Kronsburg",
   "adresse": "Braunstraße 32, 24145 Kiel",
   "lat": 54.281042,
   "lng": 10.146905,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-kronsburg",
   "alter_monate": [
    10,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-566",
   "name": "PÄDIKO Kita Moorsee",
   "adresse": "Steindamm 115, 24145 Kiel",
   "lat": 54.266024,
   "lng": 10.146294,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kita-moorsee",
   "alter_monate": [
    10,
    95
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-576",
   "name": "PÄDIKO Krippenhaus Neumeimersdorf",
   "adresse": "Grönhorst 11, 24145 Kiel",
   "lat": 54.282874,
   "lng": 10.1246,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Krippe",
   "konzept": [
    "Integrativ/inklusiv",
    "Reggio"
   ],
   "website": "https://www.paediko.de/kinderkrippe-krippenhaus",
   "alter_monate": [
    8,
    44
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-579",
   "name": "PÄDIKO Waldkita Düsternbrooker Gehölz",
   "adresse": "Feldstr. 171, 24106 Kiel",
   "lat": 54.343725,
   "lng": 10.153298,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Reggio"
   ],
   "website": "https://www.paediko.de/waldkinder-duesternbrooker-gehoelz",
   "alter_monate": [
    20,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-580",
   "name": "PÄDIKO Waldkita Projensdorfer Gehölz",
   "adresse": "Projensdorfer Str 251, 24106 Kiel",
   "lat": 54.361808,
   "lng": 10.117346,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Reggio"
   ],
   "website": "https://www.paediko.de/waldkinder-projensdorfer-gehoelz",
   "alter_monate": [
    20,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-581",
   "name": "PÄDIKO Waldkita Vieburger Gehölz",
   "adresse": "Krusenrotter Weg 56a, 24113 Kiel",
   "lat": 54.294488,
   "lng": 10.122035,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Kita",
   "konzept": [
    "Waldkita",
    "Reggio"
   ],
   "website": "https://www.paediko.de/waldkinder-vieburger-gehoelz",
   "alter_monate": [
    20,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-582",
   "name": "Regenbogen-Kindergarten",
   "adresse": "Russeer Weg 11, 24111 Kiel",
   "lat": 54.303284,
   "lng": 10.067431,
   "traeger": "Regenbogen-Kindergarten e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "http://www.regenbogen-kindergarten-kiel.de",
   "alter_monate": [
    12,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-583",
   "name": "Rudolf-Steiner-Kindergarten Hasseldieksdamm",
   "adresse": "Melsdorfer Straße 15, 24109 Kiel",
   "lat": 54.319826,
   "lng": 10.075478,
   "traeger": "Verein z. Förderung seelenpflege-bed. Kinder e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://rs-kiga.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-584",
   "name": "Rudolf-Steiner-Kindergarten Oppendorf",
   "adresse": "Trenntrader Weg 23, 24149 Kiel",
   "lat": 54.326948,
   "lng": 10.212154,
   "traeger": "Verein z. Förderung seelenpflege-bed. Kinder e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://rs-kiga.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-585",
   "name": "Rudolf-Steiner-Kindergarten Wellsee",
   "adresse": "Schoolkamp 15, 24145 Kiel",
   "lat": 54.287645,
   "lng": 10.166837,
   "traeger": "Verein z. Förderung seelenpflege-bed. Kinder e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://rs-kiga.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-586",
   "name": "Schülerhaus Schilksee",
   "adresse": "Schilkseer Straße 94, 24159 Kiel",
   "lat": 54.41406,
   "lng": 10.167503,
   "traeger": "Schülerhaus Schilksee e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.schuelerhaus-schilksee.de",
   "alter_monate": [
    72,
    132
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-3585",
   "name": "Städt. FZ Gaarden - Bahnhofstraße",
   "adresse": "Bahnhofstraße 38a, 24143 Kiel",
   "lat": 54.30583,
   "lng": 10.134397,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    168
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-3584",
   "name": "Städt. FZ Gaarden - Georg-Pfingsten-Straße",
   "adresse": "Georg-Pfingsten-Straße 26, 24143 Kiel",
   "lat": 54.307591,
   "lng": 10.143557,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-587",
   "name": "Städt. FZ Gaarden - Kaiserstraße",
   "adresse": "Kaiserstraße 92-100, 24143 Kiel",
   "lat": 54.307844,
   "lng": 10.144072,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-588",
   "name": "Städt. FZ Mettenhof - Osloring",
   "adresse": "Osloring 2a, 24109 Kiel",
   "lat": 54.318835,
   "lng": 10.051122,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-7532",
   "name": "Städt. FZ Schützenpark - Gellertstraße",
   "adresse": "Gellertstraße 10, 24114 Kiel",
   "lat": 54.320772,
   "lng": 10.113462,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://www.kitaportal-sh.de",
   "alter_monate": [
    11,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-589",
   "name": "Städt. FZ Schützenpark - Zastrowstraße",
   "adresse": "Zastrowstraße 19, 24114 Kiel",
   "lat": 54.320101,
   "lng": 10.119108,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kitaportal-sh.de",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-590",
   "name": "Städt. Kita Albert-Schweitzer-Weg",
   "adresse": "Albert-Schweitzer-Weg 9, 24149 Kiel",
   "lat": 54.335505,
   "lng": 10.18359,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-591",
   "name": "Städt. Kita Alfons-Huysmans-Ring",
   "adresse": "Alfons-Huysmans-Ring 2, 24149 Kiel",
   "lat": 54.333844,
   "lng": 10.198571,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-592",
   "name": "Städt. Kita Am Dorfplatz",
   "adresse": "Am Dorfplatz 25, 24145 Kiel",
   "lat": 54.27499,
   "lng": 10.112726,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-593",
   "name": "Städt. Kita Amrumring",
   "adresse": "Amrumring 15, 24107 Kiel",
   "lat": 54.357756,
   "lng": 10.081337,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-594",
   "name": "Städt. Kita Beselerallee",
   "adresse": "Beselerallee 55, 24105 Kiel",
   "lat": 54.336259,
   "lng": 10.135939,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-595",
   "name": "Städt. Kita Buschblick",
   "adresse": "Buschblick 103, 24159 Kiel",
   "lat": 54.394678,
   "lng": 10.156707,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-7530",
   "name": "Städt. Kita Elendsredder",
   "adresse": "Elendsredder 26, 24106 Kiel",
   "lat": 54.355185,
   "lng": 10.125001,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Bewegung"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-596",
   "name": "Städt. Kita Franzensbader Straße",
   "adresse": "Franzensbader Straße 34, 24146 Kiel",
   "lat": 54.28801,
   "lng": 10.187842,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-597",
   "name": "Städt. Kita Goethestraße",
   "adresse": "Goethestraße 31, 24116 Kiel",
   "lat": 54.33158,
   "lng": 10.124425,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-598",
   "name": "Städt. Kita Gotlandwinkel",
   "adresse": "Gotlandwinkel 18, 24109 Kiel",
   "lat": 54.32189,
   "lng": 10.06229,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-599",
   "name": "Städt. Kita Hangstraße",
   "adresse": "Hangstraße 59, 24148 Kiel",
   "lat": 54.319629,
   "lng": 10.172468,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-600",
   "name": "Städt. Kita Hansastraße",
   "adresse": "Hansastraße 29, 24118 Kiel",
   "lat": 54.335061,
   "lng": 10.125656,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    120
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-601",
   "name": "Städt. Kita Helmholtzstraße",
   "adresse": "Helmholtzstraße 19, 24143 Kiel",
   "lat": 54.309354,
   "lng": 10.150005,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-602",
   "name": "Städt. Kita Holtenauer Straße",
   "adresse": "Holtenauer Straße 257, 24106 Kiel",
   "lat": 54.351442,
   "lng": 10.13188,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv",
    "Bewegung"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-603",
   "name": "Städt. Kita Hügelstraße",
   "adresse": "Hügelstraße 11, 24143 Kiel",
   "lat": 54.316701,
   "lng": 10.148515,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-604",
   "name": "Städt. Kita Jettkorn",
   "adresse": "Jettkorn 3-5, 24146 Kiel",
   "lat": 54.293001,
   "lng": 10.177169,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-605",
   "name": "Städt. Kita Johannesstraße",
   "adresse": "Johannesstraße 12, 24143 Kiel",
   "lat": 54.313896,
   "lng": 10.142397,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-606",
   "name": "Städt. Kita Johannisburger Straße",
   "adresse": "Johannisburger Straße 10, 24149 Kiel",
   "lat": 54.335137,
   "lng": 10.192256,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-607",
   "name": "Städt. Kita Knooper Weg",
   "adresse": "Knooper Weg 145, 24118 Kiel",
   "lat": 54.335023,
   "lng": 10.129567,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    34,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-608",
   "name": "Städt. Kita Kreisauer Ring",
   "adresse": "Kreisauer Ring 111, 24145 Kiel",
   "lat": 54.286185,
   "lng": 10.16095,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-609",
   "name": "Städt. Kita Königsweg",
   "adresse": "Königsweg 80, 24114 Kiel",
   "lat": 54.311164,
   "lng": 10.125027,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    83
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-610",
   "name": "Städt. Kita Langenfelde",
   "adresse": "Langenfelde 19, 24159 Kiel",
   "lat": 54.422875,
   "lng": 10.171924,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-611",
   "name": "Städt. Kita Lessingplatz",
   "adresse": "Lessingplatz 1, 24116 Kiel",
   "lat": 54.328613,
   "lng": 10.12692,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Krippe",
   "konzept": [],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    36
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-612",
   "name": "Städt. Kita Marienwerderstraße",
   "adresse": "Marienwerderstraße 1a, 24148 Kiel",
   "lat": 54.321107,
   "lng": 10.174483,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-613",
   "name": "Städt. Kita Poppenrade",
   "adresse": "Poppenrade 5, 24148 Kiel",
   "lat": 54.309661,
   "lng": 10.169833,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-616",
   "name": "Städt. Kita Quinckestraße",
   "adresse": "Quinckestraße 30, 24106 Kiel",
   "lat": 54.348976,
   "lng": 10.134729,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-614",
   "name": "Städt. Kita Rendsburger Landstraße 141",
   "adresse": "Rendsburger Landstraße 141, 24113 Kiel",
   "lat": 54.301175,
   "lng": 10.09974,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-615",
   "name": "Städt. Kita Rendsburger Landstraße 387c",
   "adresse": "Rendsburger Landstraße 387c, 24111 Kiel",
   "lat": 54.300149,
   "lng": 10.06794,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-617",
   "name": "Städt. Kita Stolzeweg",
   "adresse": "Stolzeweg 11, 24148 Kiel",
   "lat": 54.323502,
   "lng": 10.184234,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    11,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-619",
   "name": "Städt. Kita Timmerberg",
   "adresse": "Timmerberg 37, 24106 Kiel",
   "lat": 54.365348,
   "lng": 10.126005,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    36,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-620",
   "name": "Städt. Kita Tiroler Ring",
   "adresse": "Tiroler Ring 283, 24147 Kiel",
   "lat": 54.301571,
   "lng": 10.180594,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    18,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-621",
   "name": "Städt. Kita Woltersweg",
   "adresse": "Woltersweg 1, 24106 Kiel",
   "lat": 54.356573,
   "lng": 10.111649,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Kita",
   "konzept": [
    "Integrativ/inklusiv"
   ],
   "website": "https://www.kiel.de/kita",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-622",
   "name": "Villa Kunterbunt",
   "adresse": "Rendsburger Landstraße 214, 24113 Kiel",
   "lat": 54.300324,
   "lng": 10.091037,
   "traeger": "Villa Kunterbunt e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.dachverband-kiel.de/Kindergruppen/Villa-Kunterbunt",
   "alter_monate": [
    36,
    144
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-623",
   "name": "Waldorfkindergarten Kiel",
   "adresse": "Hofholzallee 20, 24109 Kiel",
   "lat": 54.320382,
   "lng": 10.089514,
   "traeger": "Schulverein der Freien Waldorfschule Kiel e. V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldorf"
   ],
   "website": "https://waldorfschule-kiel.de/unsere-schule/kitas/krippe-und-kindergarten-kiel",
   "alter_monate": [
    6,
    79
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-624",
   "name": "Waldorfkindergarten Pries",
   "adresse": "Dorf 16, 24159 Kiel",
   "lat": 54.403349,
   "lng": 10.158315,
   "traeger": "Förderkreis Waldorfpädagogik Kiel-Nord e. V",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [
    "Waldorf"
   ],
   "website": "https://waldorfkindergarten-pries.de",
   "alter_monate": [
    12,
    84
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kitaportal-625",
   "name": "Waldwiesenzwerge",
   "adresse": "Wulfsbrook 32-34, 24113 Kiel",
   "lat": 54.303159,
   "lng": 10.109057,
   "traeger": "Verein Waldwiesenzwerge e.V.",
   "traeger_gruppe": "Elterninitiative/Verein",
   "typ": "Kita",
   "konzept": [],
   "website": "http://www.waldwiesenzwerge.de",
   "alter_monate": [
    12,
    72
   ],
   "quelle": "kitaportal-sh"
  },
  {
   "id": "kiel-kita-174",
   "name": "Kinderladen LiLa Löwen",
   "adresse": "Rendsburger Landstraße 332, 24111 Kiel",
   "lat": 54.300449,
   "lng": 10.077788,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Kita",
   "konzept": [],
   "website": "https://www.dachverband-kiel.de/Kindergruppen/LiLaLoewen",
   "alter_monate": null,
   "quelle": "kiel-wfs-kitas"
  },
  {
   "id": "kiel-skb-5",
   "name": "Betreute Grundschule Lernwerft - Club Of Rome Schule",
   "adresse": "Skagerrakufer 5, 24159 Kiel",
   "lat": 54.390507,
   "lng": 10.174232,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.lernwerft.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-9",
   "name": "Gebundene Ganztagsschule Hans-Christian-Andersen-Schule",
   "adresse": "Stoschstraße 24, 24143 Kiel",
   "lat": 54.310457,
   "lng": 10.151361,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://schulportraets.schleswig-holstein.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-19",
   "name": "Betreute Grundschule Christliche Schule Kiel",
   "adresse": "Diesterwegstraße 20, 24113 Kiel",
   "lat": 54.301818,
   "lng": 10.112857,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [
    "Religiös"
   ],
   "website": "http://www.cskiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-20",
   "name": "Betreute Grundschule Theodor-Heuss-Schule",
   "adresse": "Rendsburger Landstraße 155, 24113 Kiel",
   "lat": 54.30076,
   "lng": 10.097963,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.bgth-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-21",
   "name": "Betreute Grundschule Theodor-Heuss-Schule Waldwiesenzwerge",
   "adresse": "Wulfsbrook 6, 24113 Kiel",
   "lat": 54.304749,
   "lng": 10.107653,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.waldwiesenzwerge.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-22",
   "name": "Betreute Grundschule Uwe-Jens-Lornsen-Schule",
   "adresse": "Speckenbeker Weg 71, 24113 Kiel",
   "lat": 54.291902,
   "lng": 10.084343,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.bgs-hammer.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-29",
   "name": "Betreute Grundschule Freie Waldorfschule Kiel",
   "adresse": "Hofholzallee 20, 24109 Kiel",
   "lat": 54.320382,
   "lng": 10.089514,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [
    "Waldorf"
   ],
   "website": "http://www.waldorfschule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-30",
   "name": "Betreute Grundschule Gorch-Fock-Schule",
   "adresse": "Melsdorfer Straße 53, 24109 Kiel",
   "lat": 54.314672,
   "lng": 10.073593,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.gofo.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-32",
   "name": "Offene Ganztagsschule Gorch-Fock-Schule",
   "adresse": "Melsdorfer Straße 53, 24109 Kiel",
   "lat": 54.314672,
   "lng": 10.073593,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.gofo.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-35",
   "name": "Betreute Grundschule Grundschule Holtenau",
   "adresse": "Richthofenstraße 14, 24159 Kiel",
   "lat": 54.372395,
   "lng": 10.141688,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://betreute-holtenau.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-38",
   "name": "Betreute Grundschule Kronsbären",
   "adresse": "Kuhlacker 30, 24145 Kiel",
   "lat": 54.285145,
   "lng": 10.143229,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.grundschule-kronsburg.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-40",
   "name": "Betreute Grundschule Meimersdorfer Füchse",
   "adresse": "Lütt Steenbusch 41, 24145 Kiel",
   "lat": 54.282445,
   "lng": 10.121811,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.johanna-mestorf-schule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-51",
   "name": "Offene Ganztagsschule Max-Tau-Schule",
   "adresse": "Odensestraße 6, 24109 Kiel",
   "lat": 54.316633,
   "lng": 10.051782,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.max-tau-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-52",
   "name": "Betreute Grundschule Spielschule Reventlouschule",
   "adresse": "Beselerallee 45, 24105 Kiel",
   "lat": 54.336012,
   "lng": 10.136386,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://reventlouschule.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-53",
   "name": "Betreute Grundschule Hardenbergzwerge",
   "adresse": "Hardenbergstraße 9, 24105 Kiel",
   "lat": 54.342241,
   "lng": 10.135037,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.hardenbergzwerge.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-54",
   "name": "Betreute Grundschule Hardenbergschule DRK",
   "adresse": "Hardenbergstraße 9, 24105 Kiel",
   "lat": 54.342241,
   "lng": 10.135037,
   "traeger": "DRK Kiel",
   "traeger_gruppe": "DRK",
   "typ": "Hort",
   "konzept": [],
   "website": "http://drk-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-55",
   "name": "Betreute Grundschule Reventlouschule PÄDIKO",
   "adresse": "Beselerallee 45, 24105 Kiel",
   "lat": 54.336012,
   "lng": 10.136386,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.paediko.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-69",
   "name": "Betreute Grundschule Muhliusschule",
   "adresse": "Legienstraße 23, 24103 Kiel",
   "lat": 54.326811,
   "lng": 10.131808,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://bgs-muhliusschule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-73",
   "name": "Offene Ganztagsschule Muhliusschule",
   "adresse": "Legienstraße 23, 24103 Kiel",
   "lat": 54.326811,
   "lng": 10.131808,
   "traeger": "CVJM Kiel e.V.",
   "traeger_gruppe": "CVJM",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.cvjm-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-75",
   "name": "Gebundene Ganztagsschule Schule am Göteborgring",
   "adresse": "Gotlandwinkel 16, 24109 Kiel",
   "lat": 54.322241,
   "lng": 10.0634,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.schule-am-goeteborgring.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-76",
   "name": "Gebundene Ganztagsschule Schule am Heidenberger Teich",
   "adresse": "Skagenweg 25, 24109 Kiel",
   "lat": 54.321193,
   "lng": 10.046816,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.schuleamheidenbergerteich.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-86",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Toni-Jensen-Grundschule",
   "adresse": "Poggendörper Weg 51, 24149 Kiel",
   "lat": 54.336217,
   "lng": 10.194716,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": null,
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-87",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Fritz-Reuter-Schule",
   "adresse": "Fritz-Reuter-Straße 79, 24159 Kiel",
   "lat": 54.394926,
   "lng": 10.169081,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.fritz-reuter-schule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-89",
   "name": "Offene Ganztagsschule Fritz-Reuter-Schule",
   "adresse": "Fritz-Reuter-Straße 79, 24159 Kiel",
   "lat": 54.395217,
   "lng": 10.166828,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.fritz-reuter-schule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-93",
   "name": "Betreute Grundschule Goethe-Spielschule",
   "adresse": "Hansastraße 25, 24118 Kiel",
   "lat": 54.334403,
   "lng": 10.124982,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.goethe.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-97",
   "name": "Betreute Grundschule Goetheschule PÄDIKO",
   "adresse": "Hansastraße 25, 24118 Kiel",
   "lat": 54.334403,
   "lng": 10.124982,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.paediko.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-99",
   "name": "Betreute Grundschule Gerhart-Hauptmann-Schule",
   "adresse": "Große Ziegelstraße 62, 24148 Kiel",
   "lat": 54.311998,
   "lng": 10.164166,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.gerhart-hauptmann-schule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-100",
   "name": "Förderzentrum geistige Entwicklung Ellerbeker Schule",
   "adresse": "Klausdorfer Weg 62, 24148 Kiel",
   "lat": 54.319245,
   "lng": 10.169601,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.ellerbeker-schule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-101",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Gerhart-Hauptmann-Schule",
   "adresse": "Große Ziegelstraße 62, 24148 Kiel",
   "lat": 54.311998,
   "lng": 10.164166,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://gerhart-hauptmann-schule-kiel.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-106",
   "name": "Betreute Grundschule Schülerinsel Hermann-Löns-Schule",
   "adresse": "Tiroler Ring 289, 24147 Kiel",
   "lat": 54.302065,
   "lng": 10.182472,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.hls-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-107",
   "name": "Betreute Grundschule Lilli-Martius-Schule",
   "adresse": "Allgäuer Straße 30, 24146 Kiel",
   "lat": 54.291697,
   "lng": 10.193904,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.lms-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-108",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Matthias-Claudius-Schule",
   "adresse": "Dorfstraße 4, 24146 Kiel",
   "lat": 54.295134,
   "lng": 10.173852,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.matthias-claudius-schule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-119",
   "name": "Offene Ganztagsschule Lilli-Martius-Schule",
   "adresse": "Allgäuer Straße 30, 24146 Kiel",
   "lat": 54.291697,
   "lng": 10.193904,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.lms-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-120",
   "name": "Offene Ganztagsschule Matthias-Claudius-Schule",
   "adresse": "Dorfstraße 4, 24146 Kiel",
   "lat": 54.295134,
   "lng": 10.173852,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.matthias-claudius-schule-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-132",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Klaus-Groth-Schule",
   "adresse": "Winterbeker Weg 45, 24114 Kiel",
   "lat": 54.310027,
   "lng": 10.115245,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.klaus-groth-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-138",
   "name": "Offene Ganztagsschule Theodor-Storm-Schule",
   "adresse": "Danziger Straße 31, 24148 Kiel",
   "lat": 54.322817,
   "lng": 10.17517,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.tsg-wellingdorf.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-143",
   "name": "Betreute Grundschule Schule am Sonderburger Platz",
   "adresse": "Sonderburger Platz 1, 24106 Kiel",
   "lat": 54.358726,
   "lng": 10.12929,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://gs-sonderburgerplatz.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-144",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Friedrich-Junge-Schule Wik",
   "adresse": "Elendsredder 26, 24106 Kiel",
   "lat": 54.355185,
   "lng": 10.125001,
   "traeger": "DRK Kiel",
   "traeger_gruppe": "DRK",
   "typ": "Hort",
   "konzept": [],
   "website": "http://drk-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-156",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Grundschule Wellsee",
   "adresse": "Schoolkamp 14, 24145 Kiel",
   "lat": 54.288047,
   "lng": 10.16521,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://grundschule-wellsee.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-158",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Ellerbeker Schule",
   "adresse": "Klausdorfer Weg 62, 24148 Kiel",
   "lat": 54.319245,
   "lng": 10.169601,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.ellerbeker-schule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-159",
   "name": "Offene Ganztagsschule Ellerbeker Schule",
   "adresse": "Klausdorfer Weg 62, 24148 Kiel",
   "lat": 54.319245,
   "lng": 10.169601,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.ellerbeker-schule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-161",
   "name": "Förderzentrum körperliche & motorische Entwicklung Lilli-Nielsen-Schule",
   "adresse": "Vaasastraße 43, 24109 Kiel",
   "lat": 54.324461,
   "lng": 10.048037,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.lilli-nielsen-schule.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-162",
   "name": "Förderzentrum geistige Entwicklung Außenstelle Lilli-Nielsen-Schule",
   "adresse": "Melsdorfer Straße 53, 24109 Kiel",
   "lat": 54.314672,
   "lng": 10.073593,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.gofo.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-165",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Muhliusschule CVJM",
   "adresse": "Legienstraße 23, 24103 Kiel",
   "lat": 54.326811,
   "lng": 10.131808,
   "traeger": "CVJM Kiel e.V.",
   "traeger_gruppe": "CVJM",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.cvjm-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-166",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Adolf-Reichwein-Schule",
   "adresse": "Tiefe Allee 32, 24149 Kiel",
   "lat": 54.332091,
   "lng": 10.186852,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.adolf-reichwein-schule.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-173",
   "name": "Betreute Grundschule Russee",
   "adresse": "Russeer Weg 11, 24111 Kiel",
   "lat": 54.303284,
   "lng": 10.067432,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.grundschule-russee.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-183",
   "name": "Betreute Grundschule Schülerinsel Friedrich-Junge-Schule",
   "adresse": "Langenbeckstraße 65, 24116 Kiel",
   "lat": 54.323717,
   "lng": 10.106207,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.friedrich-junge.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-184",
   "name": "Offene Ganztagsschule m. bedarfsorient. Betreuung Friedrich-Junge-Schule",
   "adresse": "Nietzschestraße 56, 24116 Kiel",
   "lat": 54.323576,
   "lng": 10.108389,
   "traeger": "CVJM Kiel e.V.",
   "traeger_gruppe": "CVJM",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.cvjm-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-186",
   "name": "Offene Ganztagsschule Friedrich-Junge-Schule",
   "adresse": "Langenbeckstraße 65, 24116 Kiel",
   "lat": 54.323717,
   "lng": 10.106207,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.fjrs-kiel.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-194",
   "name": "Betreute Grundschule Suchsdorf",
   "adresse": "Eckernförder Straße 419, 24107 Kiel",
   "lat": 54.356995,
   "lng": 10.083802,
   "traeger": "DRK Kiel",
   "traeger_gruppe": "DRK",
   "typ": "Hort",
   "konzept": [],
   "website": "http://drk-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-195",
   "name": "Offene Ganztagsschule Hermann-Löns-Schule",
   "adresse": "Tiroler Ring 289, 24147 Kiel",
   "lat": 54.302065,
   "lng": 10.182472,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.hls-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-skb-196",
   "name": "Offene Ganztagsschule Adolf-Reichwein-Schule",
   "adresse": "Tiefe Allee 32, 24149 Kiel",
   "lat": 54.332091,
   "lng": 10.186852,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Hort",
   "konzept": [],
   "website": "http://www.adolf-reichwein-schule.lernnetz.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-schulkindbetreuung"
  },
  {
   "id": "kiel-jt-1162",
   "name": "Port 9 - gehört zum Jugendtreff De Twiel -",
   "adresse": "Poppenrade 9, 24148 Kiel",
   "lat": 54.309298,
   "lng": 10.169507,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": null,
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1163",
   "name": "Jugendtreff Wellsee (Juwel)",
   "adresse": "Julius-Leber-Straße 36a, 24145 Kiel",
   "lat": 54.289563,
   "lng": 10.152747,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kieler-juwel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1164",
   "name": "Jugendtreff Meimersdorf - JiM",
   "adresse": "Grönhorst 10, 24145 Kiel",
   "lat": 54.283463,
   "lng": 10.124626,
   "traeger": "Pädiko e.V.",
   "traeger_gruppe": "Pädiko e.V.",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.paediko.de/schulkindbetreuung",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1165",
   "name": "Jugendtreff Russee",
   "adresse": "Rendsburger Landstraße 369, 24111 Kiel",
   "lat": 54.300395,
   "lng": 10.070319,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_russee.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1166",
   "name": "Jugendtreff Hassee - Station 113",
   "adresse": "Altenrade 2, 24113 Kiel",
   "lat": 54.308532,
   "lng": 10.099558,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_hassee.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1167",
   "name": "GuddyTreff (Guttempler Jugendtreff)",
   "adresse": "Damperhofstraße 26, 24103 Kiel",
   "lat": 54.325447,
   "lng": 10.124681,
   "traeger": "Guttempler",
   "traeger_gruppe": "Sonstige",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.guddytreff.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1168",
   "name": "Jugendtreff De Twiel",
   "adresse": "De Twiel 2, 24148 Kiel",
   "lat": 54.310447,
   "lng": 10.164931,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_de_twiel.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1169",
   "name": "Jugendkulturwerkstatt Suchsdorf",
   "adresse": "Nienbrügger Weg 35, 24107 Kiel",
   "lat": 54.353752,
   "lng": 10.082168,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.jkw-suchsdorf.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1170",
   "name": "Jugendtreff KicK",
   "adresse": "Preetzer Straße 35, 24143 Kiel",
   "lat": 54.307229,
   "lng": 10.144897,
   "traeger": "AWO Kreisverband Kiel e.V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.jugendtreffkick.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1171",
   "name": "Jugendtreff Ellerbek",
   "adresse": "Hangstraße 59, 24148 Kiel",
   "lat": 54.319621,
   "lng": 10.172461,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_ellerbek.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1172",
   "name": "Jugendtreff Guti",
   "adresse": "Hebbelstraße 10, 24116 Kiel",
   "lat": 54.331351,
   "lng": 10.123138,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/de/gesundheit_soziales/jugendliche/jugendtreffs/jugendtreff_gutenbergstrasse.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1173",
   "name": "Jugendtreff Kiste",
   "adresse": "Hofholzallee 280, 24109 Kiel",
   "lat": 54.318033,
   "lng": 10.0565,
   "traeger": "Ev. Jugendwerk Altholstein",
   "traeger_gruppe": "Ev. Kita-Werk/Kirchengemeinde",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.jugendwerk-altholstein.de/programm/offene-jugendarbeit/jugendtreff-kiste/jugendtreff-kiste.html",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1174",
   "name": "Jugendtreff Nord",
   "adresse": "Holtenauer Straße 257, 24106 Kiel",
   "lat": 54.351639,
   "lng": 10.131226,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_nord.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1175",
   "name": "Kinderhaus Blauer Elefant",
   "adresse": "Sophienblatt 85, 24114 Kiel",
   "lat": 54.3089,
   "lng": 10.126136,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.blauer-elefant-kiel.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1176",
   "name": "Jugendtreff Holtenau",
   "adresse": "Richthofenstraße 14, 24159 Kiel",
   "lat": 54.37315,
   "lng": 10.141716,
   "traeger": "Caritas",
   "traeger_gruppe": "Kath. Kirche/Caritas",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.caritas-sh.de/beratung-hilfe/kinder-und-jugendhilfe/offene-jugendarbeit/offene-jugendarbeit",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1177",
   "name": "Jugendtreff Welcome",
   "adresse": "Jägersberg 11, 24103 Kiel",
   "lat": 54.328541,
   "lng": 10.131596,
   "traeger": "CVJM Kiel e.V.",
   "traeger_gruppe": "CVJM",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.cvjm-kiel.de/website/de/ov/kiel/angebote/kinder-und-jugendtreff",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1178",
   "name": "Jugendbüro Mettenhof",
   "adresse": "Jütlandring 143a, 24109 Kiel",
   "lat": 54.312734,
   "lng": 10.044867,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.jugendbuero-mettenhof.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1179",
   "name": "Jugendtreff Lug ins Land",
   "adresse": "Rönner Weg 62, 24146 Kiel",
   "lat": 54.281519,
   "lng": 10.19576,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.facebook.com/JTLIL/",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1180",
   "name": "Kinder- und Jugendbauernhof",
   "adresse": "Skandinaviendamm 250, 24109 Kiel",
   "lat": 54.327315,
   "lng": 10.059234,
   "traeger": "AWO Kreisverband Kiel e.V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Jugendhilfe",
   "konzept": [
    "Natur"
   ],
   "website": "https://www.awo-bauernhof.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1181",
   "name": "Jugendtreff Wellingdorf - JUGO",
   "adresse": "Stolzeweg 11, 24148 Kiel",
   "lat": 54.323507,
   "lng": 10.184224,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_wellingdorf.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1182",
   "name": "Jugendtreff Elmschenhagen",
   "adresse": "Tiroler Ring 283, 24147 Kiel",
   "lat": 54.301576,
   "lng": 10.180593,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_elmschenhagen.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1183",
   "name": "Stadtteilzentrum Altes Volksbad",
   "adresse": "Turnstraße 7, 24149 Kiel",
   "lat": 54.330394,
   "lng": 10.188249,
   "traeger": "AWO Kreisverband Kiel e.V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.awo-kiel.de/kinder-jugendliche-eltern/kinder-und-jugendliche/altes-volksbad/",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1184",
   "name": "Jugendcafé Mitte",
   "adresse": "Rathausstraße 4, 24103 Kiel",
   "lat": 54.322947,
   "lng": 10.131539,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendcafemitte.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1185",
   "name": "Chillbox im Jugendpark Gaarden",
   "adresse": "Preetzer Straße 115, 24143 Kiel",
   "lat": 54.308235,
   "lng": 10.155231,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendpark_gaarden.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1186",
   "name": "Jugendtreff Schusterkrug",
   "adresse": "Schusterkrug 25, 24159 Kiel",
   "lat": 54.37712,
   "lng": 10.161952,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_schusterkrug.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1187",
   "name": "Jugendtreff Schilksee",
   "adresse": "Langenfelde 19, 24159 Kiel",
   "lat": 54.423092,
   "lng": 10.172643,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendtreff_schilksee.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1188",
   "name": "Jugendcafé Urban",
   "adresse": "Friedrichsorter Straße 21, 24159 Kiel",
   "lat": 54.397581,
   "lng": 10.170822,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/jugendcafe_urban.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1189",
   "name": "Jugendbüro Mettenhof",
   "adresse": "Stockholmstraße 1, 24109 Kiel",
   "lat": 54.326384,
   "lng": 10.057292,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.jugendbuero-mettenhof.de",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1190",
   "name": "Mädchentreff Gaarden",
   "adresse": "Kirchenweg 45, 24143 Kiel",
   "lat": 54.308142,
   "lng": 10.147279,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/maedchentreff_gaarden.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1191",
   "name": "Mädchen- und Frauentreff Gaarden",
   "adresse": "Preetzer Straße 33, 24143 Kiel",
   "lat": 54.307146,
   "lng": 10.144362,
   "traeger": "AWO Kreisverband Kiel e.V.",
   "traeger_gruppe": "AWO Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.awo-kiel.de/kinder-jugendliche-eltern/kinder-und-jugendliche/maedchen-und-frauentreff/",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1192",
   "name": "Mädchentreff Rela",
   "adresse": "Rendsburger Landstraße 29, 24113 Kiel",
   "lat": 54.305644,
   "lng": 10.113886,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/maedchentreff_rela.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "kiel-jt-1193",
   "name": "Mädchentreff Mona Lisa",
   "adresse": "Fritz-Reuter-Straße 87, 24159 Kiel",
   "lat": 54.395801,
   "lng": 10.168847,
   "traeger": "Landeshauptstadt Kiel",
   "traeger_gruppe": "Landeshauptstadt Kiel",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": "https://www.kiel.de/jugendtreff/maedchentreff_mona_lisa.php",
   "alter_monate": null,
   "quelle": "kiel-wfs-jugendtreffs"
  },
  {
   "id": "osm-node-4902156805",
   "name": "Vinetazentrum",
   "adresse": "Elisabethstraße 64, 24143 Kiel",
   "lat": 54.311873,
   "lng": 10.146086,
   "traeger": "Stadtteilgenossenschaft Gaarden eG",
   "traeger_gruppe": "Sonstige",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": null,
   "alter_monate": null,
   "quelle": "osm"
  },
  {
   "id": "osm-way-122438685",
   "name": "Schultz-Hencke-Heim Kiel",
   "adresse": null,
   "lat": 54.320364,
   "lng": 10.08108,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": null,
   "alter_monate": null,
   "quelle": "osm"
  },
  {
   "id": "osm-way-1283060439",
   "name": "Jugendhof Hammer",
   "adresse": null,
   "lat": 54.289869,
   "lng": 10.082232,
   "traeger": null,
   "traeger_gruppe": "Unbekannt",
   "typ": "Jugendhilfe",
   "konzept": [],
   "website": null,
   "alter_monate": null,
   "quelle": "osm"
  }
 ]
};
