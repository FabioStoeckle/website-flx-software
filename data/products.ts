export type ProductCategory = "Apps" | "Websites" | "PWAs" | "Digitale Tools";

export type ProductViewKey = "workflow" | "dashboard" | "export" | "community" | "security" | "automation" | "design";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  href: string;

  features: string[];
  vorteile: string[];
  zielgruppen: string[];
  views: Array<{
    key: ProductViewKey;
    title: string;
    description: string;
  }>;
};

export const products: Product[] = [
  {
    slug: "flx-suite",
    name: "FLX-Suite.de",
    category: "Digitale Tools",
    description:
      "Angebot, Rechnung und Mahnungen online erstellen und exportieren – zentral, strukturiert und sofort versandfertig.",
    benefits: [
      "Templates für Angebote, Rechnungen und Mahnungen",
      "PDF-Export für Kunden und Archiv",
      "Klarer Status über alle Belege",
    ],
    href: "https://flx-suite.de",
    features: [
      "Angebote, Rechnungen und Mahnungen in einem durchgängigen Ablauf",
      "Klar strukturierte Vorlagen mit konsistentem Ergebnis",
      "PDF-Export und nachvollziehbare Schritte vom Entwurf bis zum Versand",
    ],
    vorteile: ["Schneller im Alltag", "Weniger Fehler durch einheitliche Vorlagen", "Transparenter Prozess für Teams und Selbstständige"],
    zielgruppen: ["Selbstständige & Freiberufler", "Kleinunternehmen und Projektteams", "Service- & Beratungsunternehmen"],
    views: [
      {
        key: "workflow",
        title: "Dokumente in Minuten",
        description: "Vorlagen wählen, Daten eintragen – von Angebot über Rechnung bis Mahnung.",
      },
      { key: "export", title: "Export bereit zum Versand", description: "PDFs, die sauber ankommen – ohne Format-Stress." },
      { key: "dashboard", title: "Alles im Überblick", description: "Klarer Fortschritt und Status über alle Belege." },
    ],
  },
  {
    slug: "gehaltsrechner",
    name: "Brutto Netto Rechner",
    category: "Digitale Tools",
    description:
      "Präziser Gehaltsrechner für Deutschland 2025. Steuerklassen I bis VI, alle Bundesländer, PKV und GKV, Kirchensteuer, Kinder.",
    benefits: [
      "Steuerklassen I bis VI mit korrekter Lohnsteuerformel",
      "Alle 16 Bundesländer inkl. Kirchensteuer und Sachsen-Sonderregelung",
      "PKV und GKV mit Zusatzbeitrag, Monats- und Jahresansicht",
    ],
    href: "/gehalt",
    features: [
      "Lohnsteuerberechnung nach §32a EStG 2025",
      "Sozialversicherungsbeiträge mit Beitragsbemessungsgrenzen",
      "Solidaritätszuschlag mit Milderungszone",
    ],
    vorteile: ["Kein Account nötig", "Alle Parameter auf einen Blick", "Sofort verwendbar"],
    zielgruppen: ["Arbeitnehmer", "Berufseinsteiger", "HR und Recruiting"],
    views: [
      { key: "dashboard", title: "Klare Aufschlüsselung", description: "Jeder Abzug einzeln ausgewiesen. Monat oder Jahr." },
      { key: "workflow",  title: "Alle Parameter",        description: "Steuerklasse, Bundesland, KV, Kinder in Sekunden eingestellt." },
      { key: "export",    title: "2025 aktuell",          description: "Beitragssätze und Steuertarife auf dem Stand 2025." },
    ],
  },
  {
    slug: "kfz-rechner",
    name: "Kfz-Steuer Rechner",
    category: "Digitale Tools",
    description:
      "Kfz-Steuer sofort berechnen. Benzin, Diesel, Hybrid, LPG und Elektro. Hubraum- und CO₂-Anteil nach §9 KraftStG.",
    benefits: [
      "Benzin, Diesel, Hybrid, LPG und Elektro",
      "CO₂-Staffelberechnung nach §9 KraftStG",
      "CO₂-Freigrenzen je nach Erstzulassungsjahr",
    ],
    href: "/kfz",
    features: [
      "Hubraum- und CO₂-Anteil einzeln ausgewiesen",
      "Elektrofahrzeuge automatisch als steuerbefreit erkannt",
      "Alte Zulassungen vor 2009 mit vereinfachter Berechnung",
    ],
    vorteile: ["Kein Account nötig", "Sofort nutzbar", "Ohne Installation"],
    zielgruppen: ["Autofahrer", "Autokäufer", "Fuhrparkmanager"],
    views: [
      { key: "dashboard", title: "Klare Aufschlüsselung", description: "Hubraum- und CO₂-Anteil einzeln ausgewiesen." },
      { key: "workflow",  title: "Alle Fahrzeugtypen",    description: "Benzin, Diesel, Hybrid, LPG und Elektro in Sekunden eingestellt." },
      { key: "export",    title: "2025 aktuell",          description: "Berechnung nach §9 KraftStG mit aktuellen Sätzen und Freigrenzen." },
    ],
  },
  {
    slug: "qr-designer",
    name: "QR-Code Designer",
    category: "Digitale Tools",
    description:
      "QR-Codes visuell gestalten: eigenes Logo einbetten, Farben und Stil frei wählen, direkt als PNG oder SVG exportieren.",
    benefits: [
      "Logo in die Mitte einbetten",
      "Farben, Verlauf und Punkt-Stil frei wählen",
      "Export als PNG oder SVG in 1000 x 1000 px",
    ],
    href: "/qr",
    features: [
      "6 Punkt-Stile und individuelle Eckformen",
      "Farbverlauf oder Vollton frei konfigurierbar",
      "Logo-Upload mit einstellbarer Größe",
    ],
    vorteile: ["Kein Account nötig", "Läuft komplett im Browser", "Sofort verwendbar ohne Installation"],
    zielgruppen: ["Selbstständige & Freelancer", "Unternehmen mit Printmaterial", "Alle die einen individuellen QR-Code brauchen"],
    views: [
      { key: "design", title: "Stil nach Wunsch", description: "Farben, Verlauf und Punkt-Stil in Sekunden anpassen." },
      { key: "export", title: "Sofort exportieren", description: "PNG oder SVG in 1000px, kostenlos und ohne Anmeldung." },
      { key: "workflow", title: "Logo einbetten", description: "Eigenes Logo in die Mitte laden und Größe einstellen." },
    ],
  },
  {
    slug: "rivals11",
    name: "Rivals11.de",
    category: "Apps",
    description:
      "Wettbewerbs-Game für deine Community – Spiele gegeneinander, sammle Punkte und werde zur Legende.",
    benefits: [],
    href: "https://rivals11.de",
    features: [
      "Wiederkehrende Abläufe automatisiert – ohne manuelle Tabellenpflege",
      "Datenmodelle für Community, Spielbetrieb und Workflows",
      "Schnelle UI für den Alltag auf Desktop und Mobil",
    ],
    vorteile: [
      "Weniger Aufwand bei Routine",
      "Stabiler Prozess für alle Beteiligten",
      "Daten, die man nutzen kann",
    ],
    zielgruppen: [
      "Community-Teams",
      "Vereine & Veranstalter",
      "Teams, die Spielbetrieb digital organisieren wollen",
    ],
    views: [
      {
        key: "community",
        title: "Community & Rollen",
        description: "Struktur, Rechte und klare Bedienwege im laufenden Betrieb.",
      },
      {
        key: "automation",
        title: "Workflows ohne Reibung",
        description: "Automatisierung für wiederkehrende Schritte – verlässlich und nachvollziehbar.",
      },
      {
        key: "dashboard",
        title: "Übersicht & Auswertungen",
        description: "Weniger Gefühl, mehr Klarheit: Daten sind sichtbar und nutzbar.",
      },
    ],
  },
  {
    slug: "taktikfeld",
    name: "Taktikfeld.de",
    category: "Apps",
    description:
      "Taktiktafel für Trainer – Spieler positionieren, Laufwege einzeichnen und Formationen speichern. Offline & kostenlos.",
    benefits: [
      "Drag & Drop Spieler mit Name und Nummer",
      "Pfeile & Laufwege einzeichnen",
      "Formationen speichern & als PDF exportieren",
    ],
    href: "https://taktikfeld.de",
    features: [
      "Spieler per Drag & Drop auf die Tafel – inklusive Name und Rückennummer",
      "Pfeile und Laufwege frei einzeichnen für taktische Erklärungen",
      "Formationen sichern und als PDF exportieren – nutzbar ohne Internet",
    ],
    vorteile: [
      "Schnell erklärt statt nur besprochen",
      "Immer griffbereit, auch ohne Verbindung",
      "Keine Kostenbarriere für Vereine und Nachwuchs",
    ],
    zielgruppen: ["Trainer & Co-Trainer", "Jugend- und Amateurvereine", "Jede Mannschaft mit Taktik im Wettkampf"],
    views: [
      {
        key: "workflow",
        title: "Aufstellung in Sekunden",
        description: "Spieler platzieren, Wege markieren – der Fokus bleibt beim Spiel, nicht bei der Software.",
      },
      {
        key: "export",
        title: "PDF fürs Training",
        description: "Formation und Zeichnungen exportieren – mitnehmen, abheften, weitergeben.",
      },
      {
        key: "dashboard",
        title: "Bibliothek & Überblick",
        description: "Gespeicherte Formationen griffbereit – weniger Suchen, mehr Zeit auf dem Platz.",
      },
    ],
  },
];

