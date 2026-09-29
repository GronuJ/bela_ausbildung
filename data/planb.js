/* Automatisch erzeugt aus data/planb.json (npm run build:data). Bitte die JSON-Datei bearbeiten. */
window.PLANB_DATA = {
 "stand": "2026-09-29",
 "region": "Schleswig-Holstein (Schwerpunkt Kiel)",
 "abschluesse": [
  {
   "key": "ohne",
   "label": "Ohne Schulabschluss"
  },
  {
   "key": "esa",
   "label": "Erster allgemeinbildender Schulabschluss (ESA)"
  },
  {
   "key": "msa",
   "label": "Mittlerer Schulabschluss (MSA)"
  },
  {
   "key": "fhr",
   "label": "Fachhochschulreife (FHR)"
  },
  {
   "key": "abitur",
   "label": "Allgemeine Hochschulreife (Abitur)"
  }
 ],
 "allgemein": "Für alle pädagogischen Ausbildungen zusätzlich: erweitertes Führungszeugnis (max. 3 Monate alt) und Nachweis Masernschutz; bei ausländischem Abschluss Deutsch B2. Praxiszeiten nur in anerkannten Einrichtungen der Kinder- und Jugendhilfe, max. 36 Monate vor der Bewerbung, höchstens 2 Abschnitte.",
 "pfade": [
  {
   "id": "spa",
   "titel": "Sozialpädagogische/r Assistent/in (SPA) – Vollzeitschule",
   "kurz": "Zweitkraft in Krippe, Kita und Hort: Kinder im Alltag begleiten, Angebote mitgestalten, Fachkräfte unterstützen. In SH der klassische erste Schritt zum Erzieher.",
   "dauer": "2 Jahre mit MSA, 3 Jahre mit ESA (Berufsfachschule)",
   "verguetet": false,
   "zugang": {
    "ohne": "nein",
    "esa": "ja – dreijähriger Bildungsgang (am RBZ Königsweg Kiel angeboten); mit Gesamtnote Ø 3,0 + 5 Jahre Englisch (oder A2-Zertifikat) gibt es zusätzlich den MSA",
    "msa": "ja – zweijähriger Bildungsgang",
    "fhr": "ja (2 Jahre) – meist lohnt aber der Direkteinstieg in die Erzieher-Fachschule mit 150 Std. Praxis",
    "abitur": "ja (2 Jahre) – meist lohnt aber der Direkteinstieg in die Erzieher-Fachschule mit 150 Std. Praxis"
   },
   "fuehrt_zu": [
    "erzieher_vollzeit",
    "erzieher_pia",
    "erzieher_teilzeit",
    "hep"
   ],
   "hinweis": "Keine Vergütung, aber Schüler-BAföG auch bei Wohnen bei den Eltern möglich (berufsqualifizierend, mind. 2 Jahre). Mit SPA dauert die Erzieherausbildung nur noch 2 Jahre. Seit 2024/25 soll jeder Standort ESA- und MSA-Zugang anbieten. Zusätzlich: erweitertes Führungszeugnis, Masernschutz. Auch als doppeltqualifizierender Bildungsgang am Beruflichen Gymnasium (Gesundheit und Soziales) möglich. SPA dürfen nach 10 Jahren Berufserfahrung + zertifizierter Weiterbildung auch Erstkraft werden (§ 28 KiTaG).",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.sh-kursportal.de/k1002338961",
    "https://www.gesetze-im-internet.de/baf_g/__2.html"
   ]
  },
  {
   "id": "spa_pia",
   "titel": "Sozialpädagogische/r Assistent/in – praxisintegriert (SPA-PiA)",
   "kurz": "Wie SPA, aber mit festem Vertrag bei einem Kita-Träger: wöchentlich Schultage + Praxistage, mit Vergütung.",
   "dauer": "2 Jahre",
   "verguetet": true,
   "zugang": {
    "ohne": "nein",
    "esa": "unklar – belegt ist nur die zweijährige Form, die in der Regel den MSA voraussetzt; bei der Schule erfragen",
    "msa": "ja + Ausbildungsvertrag mit einem Kita-Träger",
    "fhr": "ja + Ausbildungsvertrag mit einem Kita-Träger",
    "abitur": "ja + Ausbildungsvertrag mit einem Kita-Träger"
   },
   "fuehrt_zu": [
    "erzieher_vollzeit",
    "erzieher_pia",
    "erzieher_teilzeit",
    "hep"
   ],
   "hinweis": "Modellprojekt seit Schuljahr 2023/24. Vergütung laut Beratungsstelle 96,46 % der PiA-Erzieher-Vergütung (Landesförderung bis 31.12.2026 befristet – Weiterführung 2027 prüfen). Fällt nicht unter den TVAöD. Für 2026/27 gibt es eine Kitaträgerliste mit PiA-SPA-Standorten in SH.",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.haufe.de/id/beitrag/ausbildung-12212-zu-1-abs1-buchstb-tvaoed-HI16171056.html"
   ]
  },
  {
   "id": "erzieher_vollzeit",
   "titel": "Erzieher/in – Fachschule Sozialpädagogik, Vollzeit",
   "kurz": "Pädagogische Fachkraft für 0–27-Jährige: Kita, Hort/Ganztag, Jugendarbeit, Heimerziehung. Darf Gruppen und Kitas leiten. Abschluss 'staatlich anerkannte/r Erzieher/in' + 'Bachelor Professional in Sozialwesen'.",
   "dauer": "2 Jahre mit SPA bzw. vergleichbarer Ausbildung, sonst 3 Jahre; kein Anerkennungsjahr in SH",
   "verguetet": false,
   "zugang": {
    "ohne": "nein",
    "esa": "mit Bedingung: nur in begründeten Fällen – ESA mit Ø mind. 3,0 UND abgeschlossene Berufsausbildung mit Berufsschulabschluss Ø mind. 3,0; sonst erst SPA (3-jährig, bringt ggf. den MSA)",
    "msa": "mit Bedingung: zusätzlich (a) SPA oder andere einschlägige Ausbildung, (b) fachfremde Berufsausbildung + 150 Std. sozialpädagogische Praxis oder (c) 3 Jahre einschlägige Berufstätigkeit in der Kinder- und Jugendhilfe",
    "fhr": "mit Bedingung: schulischer Teil der FHR + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet)",
    "abitur": "mit Bedingung: + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet)"
   },
   "fuehrt_zu": [
    "studium_kindheitspaedagogik",
    "studium_soziale_arbeit",
    "dual_soziale_arbeit",
    "erzieher_ba_fernstudium"
   ],
   "hinweis": "Finanzierung über Schüler-BAföG oder (oft besser, elternunabhängig) Aufstiegs-BAföG; kein Schulgeld an staatlichen Schulen. Wer ohne SPA ins 3. Jahr versetzt wird, erhält bei erfüllten Praxiszeiten zusätzlich den SPA-Abschluss (§ 16 FSVO). Optional Fachhochschulreife über Zusatzunterricht. Der Fachschulabschluss gibt in SH eine Hochschulzugangsberechtigung. Praxis in mind. zwei Arbeitsfeldern (unter und über 6 Jahre).",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.sh-kursportal.de/k48063",
    "https://www.schleswig-holstein.de/DE/fachinhalte/S/studieren/Hochschulzugang_beruflich_qualifizierte_Personen"
   ]
  },
  {
   "id": "erzieher_pia",
   "titel": "Erzieher/in – praxisintegriert (PiA)",
   "kurz": "Erzieherausbildung mit Arbeitsvertrag bei einem Träger (Kita, Jugendhilfe): ca. 2 Tage Praxis + 3 Tage Fachschule pro Woche, von Anfang an bezahlt.",
   "dauer": "3 Jahre",
   "verguetet": true,
   "zugang": {
    "ohne": "nein",
    "esa": "mit Bedingung: nur in begründeten Fällen – ESA mit Ø mind. 3,0 UND abgeschlossene Berufsausbildung mit Berufsschulabschluss Ø mind. 3,0; sonst erst SPA (3-jährig, bringt ggf. den MSA) – plus Ausbildungsvertrag mit einem Träger",
    "msa": "mit Bedingung: zusätzlich (a) SPA oder andere einschlägige Ausbildung, (b) fachfremde Berufsausbildung + 150 Std. sozialpädagogische Praxis oder (c) 3 Jahre einschlägige Berufstätigkeit in der Kinder- und Jugendhilfe – plus Ausbildungsvertrag mit einem Träger",
    "fhr": "mit Bedingung: schulischer Teil der FHR + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet) – plus Ausbildungsvertrag mit einem Träger",
    "abitur": "mit Bedingung: + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet) – plus Ausbildungsvertrag mit einem Träger"
   },
   "fuehrt_zu": [
    "studium_kindheitspaedagogik",
    "studium_soziale_arbeit",
    "dual_soziale_arbeit",
    "erzieher_ba_fernstudium"
   ],
   "hinweis": "Vergütung soll sich am TVAöD – BT Pflege orientieren (ab 01.05.2026: 1.490,69 / 1.552,07 / 1.653,38 €). Stadt Kiel: Praxis in städtischer Kita, Theorie an der Fachschule Sozialpädagogik im RBZ am Königsweg; Bewerbungsfrist für den Start 2027: 24.01.2027, mit Online-Einstellungstest. Der Schwerpunkt Jugendarbeit bei der Stadt Kiel ist derzeit ausgesetzt. Auch freie Träger (AWO, Kirche, DRK …) bieten PiA-Plätze.",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.kiel.de/de/wirtschaft_arbeit/jobs_und_ausbildung/ausbildung/pia.php",
    "https://www.kiel.de/de/wirtschaft_arbeit/jobs_und_ausbildung/ausbildung/pia_erzieher_in_jugendarbeit.php"
   ]
  },
  {
   "id": "erzieher_teilzeit",
   "titel": "Erzieher/in – berufsbegleitend in Teilzeit",
   "kurz": "Fachschule neben einer Stelle im sozialpädagogischen Bereich (Abend- oder Tagesunterricht an einzelnen Tagen).",
   "dauer": "in der Regel 3,5 Jahre",
   "verguetet": null,
   "zugang": {
    "ohne": "nein",
    "esa": "mit Bedingung: nur in begründeten Fällen – ESA mit Ø mind. 3,0 UND abgeschlossene Berufsausbildung mit Berufsschulabschluss Ø mind. 3,0; sonst erst SPA (3-jährig, bringt ggf. den MSA)",
    "msa": "mit Bedingung: zusätzlich (a) SPA oder andere einschlägige Ausbildung, (b) fachfremde Berufsausbildung + 150 Std. sozialpädagogische Praxis oder (c) 3 Jahre einschlägige Berufstätigkeit in der Kinder- und Jugendhilfe",
    "fhr": "mit Bedingung: schulischer Teil der FHR + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet)",
    "abitur": "mit Bedingung: + 150 Std. sozialpädagogische Praxis (nicht älter als 36 Monate; FSJ/BFD wird angerechnet)"
   },
   "fuehrt_zu": [
    "studium_kindheitspaedagogik",
    "studium_soziale_arbeit",
    "dual_soziale_arbeit"
   ],
   "hinweis": "Keine Ausbildungsvergütung, aber Gehalt aus der eigenen Anstellung (verguetet = null). Bei zu vielen Bewerbungen kann die Schule eine Anstellung in einer Praxisstelle verlangen. Standorte (Stand März 2026): BBZ Mölln, BBS Oldenburg, Dorothea-Schlözer-Schule Lübeck, BBS Bad Oldesloe, BBZ Schleswig in Kappeln, RBZ Hannah-Ahrendt-Schule Flensburg (Schreibweise laut Quelle) – kein Standort in Kiel. Aufstiegs-BAföG für Schulgeld möglich.",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  },
  {
   "id": "erzieher_externenpruefung",
   "titel": "Erzieher/in über Externenprüfung (Nichtschülerprüfung)",
   "kurz": "Abschlussprüfung ohne Schulbesuch – nur für Leute, die schon lange pädagogisch arbeiten.",
   "dauer": "mind. 4,5 Jahre Vollzeit-Berufspraxis vorher (Teilzeit entsprechend länger), dann Prüfung",
   "verguetet": null,
   "zugang": {
    "ohne": "nein",
    "esa": "wie Fachschule: nur in begründeten Fällen (ESA Ø 3,0 + Berufsausbildung Ø 3,0)",
    "msa": "mit Bedingung: 4,5 Jahre anerkannte pädagogische Berufspraxis in mind. zwei Arbeitsfeldern (davon mind. ½ Jahr Kita-Gruppe 3–6 J.) + Sprachbildungs-Lehrgang 120 UStd.",
    "fhr": "mit Bedingung: wie MSA",
    "abitur": "mit Bedingung: wie MSA"
   },
   "fuehrt_zu": [
    "studium_kindheitspaedagogik",
    "studium_soziale_arbeit"
   ],
   "hinweis": "Es gelten grundsätzlich die gleichen Aufnahmevoraussetzungen wie für die Fachschule (§§ 60–65 BS-PrüVO). SPA-Praxiszeiten werden angerechnet. Nicht bestandene Wiederholungsprüfung = bundesweit keine weitere Chance. Vorbereitungskurse nur bei freien Trägern; Stand Sept. 2025 keiner mit AZAV-Zulassung (kein Bildungsgutschein). Für einen Schulabgänger 2027 kein realistischer Weg. Auch SPA ist per Externenprüfung möglich (3 Jahre Berufstätigkeit).",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  },
  {
   "id": "hep",
   "titel": "Heilerziehungspfleger/in",
   "kurz": "Pädagogisch-pflegerische Fachkraft für Menschen mit Behinderung jeden Alters (Wohnen, Werkstatt, inklusive Kita, Schulbegleitung, Assistenz).",
   "dauer": "2 oder 3 Jahre je nach Vorbildung/Form (Fachschule Heilerziehungspflege)",
   "verguetet": null,
   "zugang": {
    "ohne": "nein",
    "esa": "nein (schulisch MSA verlangt) – Umweg: SPA 3-jährig mit MSA-Erwerb",
    "msa": "mit Bedingung: abgeschlossene zweijährige Ausbildung (z. B. SPA); bei nicht pädagogischer/pflegerischer Ausbildung + 150 Std. Praxis in der Eingliederungshilfe",
    "fhr": "mit Bedingung: + 150 Std. Praxis in Einrichtungen der Eingliederungshilfe (FSJ/BFD anrechenbar, wenn direkt vor der Bewerbung)",
    "abitur": "mit Bedingung: + 150 Std. Praxis in Einrichtungen der Eingliederungshilfe (FSJ/BFD anrechenbar)"
   },
   "fuehrt_zu": [
    "studium_soziale_arbeit",
    "dual_soziale_arbeit"
   ],
   "hinweis": "Vollzeitschulisch (unvergütet) oder als PiA-HEP (3 Jahre, Ausbildungsvertrag mit Vergütung bei einer Einrichtung der Eingliederungshilfe; Land fördert das 1. Jahr) – daher verguetet = null. Schule nahe Kiel z. B. Elly-Heuss-Knapp-Schule Neumünster; PiA-Partner in Kiel u. a. Stiftung Drachensee. Tarif TVöD-SuE S 8a. Einen eigenen Bildungsgang 'Heilerziehungspflegehelfer/in' haben wir für SH nicht gefunden. HEP-Abschluss berechtigt u. a. zum dualen Studium Soziale Arbeit bei der Stadt Kiel.",
   "quellen": [
    "https://ehks-nms.de/bildungsangebot/berufsausbildung/paedagogik/heilerziehungspfleger_in/",
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.oeffentlichen-dienst.de/entgeltgruppen/glossar/1815-entgeltgruppe-s-8a.html"
   ]
  },
  {
   "id": "pflegefachassistenz",
   "titel": "Pflegefachassistent/in (bundeseinheitlich, neu ab 2027)",
   "kurz": "Assistenz in der Pflege (Krankenhaus, Pflegeheim, ambulant). Kein pädagogischer Beruf, aber vergütet und mit niedriger Einstiegshürde.",
   "dauer": "18 Monate Vollzeit (Teilzeit/Verkürzung möglich)",
   "verguetet": true,
   "zugang": {
    "ohne": "mit Bedingung: möglich bei positiver, begründeter Prognose der Pflegeschule",
    "esa": "ja (Regelvoraussetzung Hauptschulabschluss/ESA)",
    "msa": "ja",
    "fhr": "ja",
    "abitur": "ja"
   },
   "fuehrt_zu": [],
   "hinweis": "Start ab 01.01.2027 nach dem Pflegefachassistenzgesetz; Anschluss verkürzte Ausbildung zur Pflegefachkraft möglich. Nur als Plan B relevant, wenn Pflege in Frage kommt. Ob die 18-monatige Ausbildung als 'abgeschlossene zweijährige Ausbildung' für die HEP-Zulassung bzw. als 'fachfremde Berufsausbildung' für die Erzieher-Fachschule zählt, ist ungeklärt – vorher bei der Schule nachfragen.",
   "quellen": [
    "https://www.bundesregierung.de/breg-de/aktuelles/pflegefachassistenzgesetz-2374930",
    "https://www.bmbfsfj.bund.de/bmbfsfj/aktuelles/pressemitteilungen/bundestag-verabschiedet-gesetz-zur-einfuehrung-eines-neuen-berufsbildes-pflegefachassistenz-271754"
   ]
  },
  {
   "id": "fsj_bfd_kita",
   "titel": "FSJ / Bundesfreiwilligendienst in einer Kita",
   "kurz": "Freiwilliges Jahr in Kita, Hort, Jugendhilfe oder Eingliederungshilfe: ausprobieren, ob der Beruf passt, und Praxisstunden sammeln.",
   "dauer": "in der Regel 12 Monate (mind. 6, max. 18)",
   "verguetet": null,
   "zugang": {
    "ohne": "ja – Vollzeitschulpflicht muss erfüllt sein; FSJ nur bis zum 27. Geburtstag",
    "esa": "ja",
    "msa": "ja",
    "fhr": "ja",
    "abitur": "ja"
   },
   "fuehrt_zu": [
    "erzieher_vollzeit",
    "erzieher_pia",
    "hep",
    "spa"
   ],
   "hinweis": "Nur Taschengeld (gesetzliche Obergrenze 2026: 676 €/Monat, tatsächlich meist weniger) – keine Ausbildung. Zählt als Praxis: Mit FHR/Abitur ersetzt ein FSJ/BFD die geforderten 150 Std. sozialpädagogische Praxis für die Erzieher-Fachschule (förderliche Freiwilligendienste nach Bundesgesetzen werden angerechnet, max. 36 Monate zurück); ebenso für HEP. Mit MSA ersetzt ein FSJ NICHT die geforderte Berufsausbildung (dann SPA nötig). Kindergeld läuft weiter. Gut als Überbrückung, wenn Bewerbungsfristen 2027 verpasst werden.",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf",
    "https://www.kiel.de/de/wirtschaft_arbeit/jobs_und_ausbildung/ausbildung/pia.php",
    "https://www.gesetze-im-internet.de/jfdg/__5.html",
    "https://www.gesetze-im-internet.de/jfdg/__2.html",
    "https://www.gesetze-im-internet.de/estg/__32.html"
   ]
  },
  {
   "id": "studium_kindheitspaedagogik",
   "titel": "Studium Kindheitspädagogik (B.A.) – HAW Kiel",
   "kurz": "Hochschulstudium für Bildung, Erziehung und Betreuung in der Kindheit; Kita-Leitung, Fachberatung, Familienzentren. Staatliche Anerkennung als Kindheitspädagog/in.",
   "dauer": "6 Semester (Beginn nur Wintersemester, zulassungsbeschränkt; Bewerbung Mai–15.07.)",
   "verguetet": false,
   "zugang": {
    "ohne": "nein",
    "esa": "nein – erst über Ausbildung/Fortbildung",
    "msa": "nein direkt – aber mit Erzieher- oder HEP-Abschluss (Fachschulabschluss) besteht in SH eine Hochschulzugangsberechtigung",
    "fhr": "ja (schulischer + praktischer Teil der FHR)",
    "abitur": "ja"
   },
   "fuehrt_zu": [
    "dual_soziale_arbeit"
   ],
   "hinweis": "Seit WS 2024/25 auch als 'Praxisbegleitetes Studium' (dual, mit Entlohnung durch einen Praxispartner, z. B. Jugendamt Kiel). Staatliche Anerkennung über Weiterbildungsangebot der HAW nach dem Bachelor. BAföG: 50 % Zuschuss / 50 % Darlehen.",
   "quellen": [
    "https://www.haw-kiel.de/studium/studienangebot/kindheitspaedagogik/",
    "https://www.haw-kiel.de/news/fh-kiel-erweitert-duales-studienkonzept/",
    "https://www.schleswig-holstein.de/DE/fachinhalte/S/studieren/Hochschulzugang_beruflich_qualifizierte_Personen",
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  },
  {
   "id": "studium_soziale_arbeit",
   "titel": "Studium Soziale Arbeit (B.A.) – HAW Kiel",
   "kurz": "Sozialarbeiter/in bzw. Sozialpädagog/in: Jugendhilfe, Schulsozialarbeit, Beratung, Eingliederungshilfe u. v. m.",
   "dauer": "6 Semester (Beginn Sommer- und Wintersemester, zulassungsbeschränkt)",
   "verguetet": false,
   "zugang": {
    "ohne": "nein",
    "esa": "nein – erst über Ausbildung/Fortbildung",
    "msa": "nein direkt – aber mit Erzieher- oder HEP-Abschluss besteht in SH eine Hochschulzugangsberechtigung",
    "fhr": "ja (schulischer + praktischer Teil der FHR)",
    "abitur": "ja"
   },
   "fuehrt_zu": [],
   "hinweis": "Auch als Praxisbegleitetes Studium (dual) seit WS 2024/25 sowie berufsbegleitend online (BASA Online). Staatliche Anerkennung nach dem Bachelor über die HAW (SobAG SH).",
   "quellen": [
    "https://www.haw-kiel.de/studium/studienangebot/soziale-arbeit/",
    "https://www.haw-kiel.de/fachbereiche/soziale-arbeit-und-kindheitspaedagogik/studium-lehre/bachelor-studiengaenge/studienangebot-staatliche-anerkennung/",
    "https://www.schleswig-holstein.de/DE/fachinhalte/S/studieren/Hochschulzugang_beruflich_qualifizierte_Personen"
   ]
  },
  {
   "id": "dual_soziale_arbeit",
   "titel": "Duales Studium Soziale Arbeit – Stadt Kiel + DHSH",
   "kurz": "Bachelor Soziale Arbeit an der Dualen Hochschule SH in Kiel; Praxisphasen bei der Stadt Kiel in Kitas/Familienzentren.",
   "dauer": "3,5 Jahre (7 Semester)",
   "verguetet": true,
   "zugang": {
    "ohne": "nein",
    "esa": "nein",
    "msa": "nein direkt – aber mit staatl. anerkanntem Erzieher- oder HEP-Abschluss zugelassen",
    "fhr": "ja",
    "abitur": "ja"
   },
   "fuehrt_zu": [],
   "hinweis": "Vergütung bei der Stadt Kiel 1.550 € brutto/Monat (ab 01.05.2026). Bewerbungsfrist 10.01.2027, Beginn 01.10.2027. Andere Träger/Hochschulen (z. B. private IU) bieten ebenfalls duale Soziale Arbeit in Kiel an – dort ggf. Studiengebühren.",
   "quellen": [
    "https://kiel.de/de/wirtschaft_arbeit/jobs_und_ausbildung/ausbildung/sozialearbeit.php",
    "https://www.dhsh.de/neuer-dualer-studiengang-soziale-arbeit-in-kiel/"
   ]
  },
  {
   "id": "erzieher_ba_fernstudium",
   "titel": "Erzieher/in + B.A. Sozialpädagogik & Management (Fernstudium, Kooperationsmodell)",
   "kurz": "Erzieherausbildung an der Fachschule und parallel ein Fernstudium – am Ende Erzieher/in, B.A. und staatlich anerkannte/r Sozialpädagog/in.",
   "dauer": "4 Jahre",
   "verguetet": false,
   "zugang": {
    "ohne": "nein",
    "esa": "nein",
    "msa": "nein (Hochschulzugangsberechtigung nötig)",
    "fhr": "mit Bedingung: Zulassung zur Erzieher-Fachschule (150 Std. Praxis)",
    "abitur": "mit Bedingung: Zulassung zur Erzieher-Fachschule (150 Std. Praxis)"
   },
   "fuehrt_zu": [],
   "hinweis": "In SH nur an der Dorothea-Schlözer-Schule Lübeck – nicht in Kiel. Kosten des Fernstudiums beim Anbieter erfragen.",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  },
  {
   "id": "kinderpfleger_sozialassistent",
   "titel": "Kinderpfleger/in bzw. Sozialassistent/in",
   "kurz": "Assistenzberufe anderer Bundesländer – in SH heißt der entsprechende Beruf 'Sozialpädagogische/r Assistent/in' (SPA).",
   "dauer": "in SH nicht angeboten",
   "verguetet": null,
   "zugang": {
    "ohne": "nein – in SH nicht angeboten",
    "esa": "nein – in SH nicht angeboten (stattdessen SPA)",
    "msa": "nein – in SH nicht angeboten (stattdessen SPA)",
    "fhr": "nein – in SH nicht angeboten",
    "abitur": "nein – in SH nicht angeboten"
   },
   "fuehrt_zu": [
    "spa"
   ],
   "hinweis": "Abschlüsse aus anderen Bundesländern (z. B. Kinderpflege Hamburg/Niedersachsen) können in SH als vergleichbare Ausbildung für die Erzieher-Fachschule anerkannt werden; Entscheidung trifft die Schule bzw. das Ministerium. Tariflich werden Kinderpfleger/innen wie SPA in S 3/S 4 eingruppiert.",
   "quellen": [
    "https://www.weiterbildungsinitiative.de/themen/ausbildung-zur-kinderpflege-und-sozialassistenzkraft",
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  },
  {
   "id": "kita_quereinstieg_pqvo",
   "titel": "Quereinstieg in die Kita mit anderer Ausbildung (PQVO)",
   "kurz": "Wer schon eine andere Berufsausbildung oder ein Studium hat, kann über eine Zusatzqualifizierung als Kraft in der Kita anerkannt werden.",
   "dauer": "Qualifizierung mind. 480 Std. + Praxiszeit mind. 500 Std.",
   "verguetet": null,
   "zugang": {
    "ohne": "nein",
    "esa": "mit Bedingung: abgeschlossene Berufsausbildung auf DQR-Niveau 4 + 480 Std. Qualifizierung + 500 Std. Praxis",
    "msa": "mit Bedingung: wie ESA",
    "fhr": "mit Bedingung: wie ESA",
    "abitur": "mit Bedingung: wie ESA (oder Hochschulabschluss)"
   },
   "fuehrt_zu": [
    "erzieher_teilzeit",
    "erzieher_externenpruefung"
   ],
   "hinweis": "Führt je nach Vorberuf zur Anerkennung als 'zweite' oder 'erste' Fachkraft (§ 5 PQVO). Für einen Schulabgänger ohne Berufsabschluss nicht direkt relevant – Plan C, falls erst eine andere Ausbildung gemacht wird. Qualifizierung kann vom Land gefördert werden (Richtlinie bis 31.12.2026).",
   "quellen": [
    "https://www.fruehe-chancen.de/fileadmin/user_upload/PDF-Dateien/FKO/Schleswig-Holstein_Wege_in_den_Beruf_der_Erzieherinnen_und_Erzieher.pdf"
   ]
  }
 ]
};
