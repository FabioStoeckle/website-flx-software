export type ProductCategory = "Apps" | "Websites" | "Programme" | "Digitale Tools";

export type ProductViewKey = "workflow" | "dashboard" | "export" | "community" | "security" | "automation";

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
      "Angebote, Rechnungen und Mahnungen einfach online erstellen.",
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
    slug: "taktikfeld",
    name: "Taktikfeld.de",
    category: "Apps",
    description:
      "Digitale Taktiktafel für Trainer.",
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
  {
    slug: "qr-code-designer",
    name: "QR-Code Designer",
    category: "Digitale Tools",
    description: "QR-Codes einfach gestalten und exportieren.",
    benefits: ["QR-Codes erstellen", "Design anpassen", "Datei exportieren"],
    href: "/produkte/qr-code-designer",
    features: ["QR-Codes erstellen", "Farben anpassen", "Datei für Druck oder Website exportieren"],
    vorteile: ["Schnell erstellt", "Einfach zu teilen", "Gut für Flyer, Schilder und Websites"],
    zielgruppen: ["Betriebe", "Vereine", "Selbstständige"],
    views: [
      {
        key: "export",
        title: "Schnell als Datei",
        description: "QR-Code erstellen und als Datei nutzen.",
      },
    ],
  },
  {
    slug: "brutto-netto-rechner",
    name: "Brutto-Netto Rechner",
    category: "Digitale Tools",
    description: "Brutto und Netto Beträge schnell ausrechnen.",
    benefits: ["Beträge berechnen", "Mehrwertsteuer prüfen", "Schnell im Alltag"],
    href: "/produkte/brutto-netto-rechner",
    features: ["Brutto berechnen", "Netto berechnen", "Mehrwertsteuer anzeigen"],
    vorteile: ["Einfach verständlich", "Schnell nutzbar", "Ohne Anmeldung"],
    zielgruppen: ["Selbstständige", "Kleine Betriebe", "Büro und Verwaltung"],
    views: [
      {
        key: "dashboard",
        title: "Beträge im Blick",
        description: "Brutto, Netto und Steuer schnell sehen.",
      },
    ],
  },
  {
    slug: "kfz-steuer-rechner",
    name: "Kfz-Steuer Rechner",
    category: "Digitale Tools",
    description: "Kfz Steuer einfach berechnen.",
    benefits: ["Fahrzeugdaten eingeben", "Steuer anzeigen", "Schnell vergleichen"],
    href: "/produkte/kfz-steuer-rechner",
    features: ["Fahrzeugdaten eintragen", "Steuer berechnen", "Ergebnis verständlich anzeigen"],
    vorteile: ["Schnell geprüft", "Einfach erklärt", "Gut für Fahrzeugplanung"],
    zielgruppen: ["Betriebe mit Fahrzeugen", "Selbstständige", "Privatnutzer"],
    views: [
      {
        key: "dashboard",
        title: "Schnelle Berechnung",
        description: "Daten eingeben und Ergebnis sehen.",
      },
    ],
  },
  {
    slug: "rivals11",
    name: "Rivals11.de",
    category: "Apps",
    description: "Eigenes App und Game Projekt rund um Teams, Punkte und Wettbewerb.",
    benefits: ["Teams erstellen", "Punkte sammeln", "Gegeneinander antreten"],
    href: "https://rivals11.de",
    features: [
      "Spieler und Teams verwalten",
      "Punkte und Ergebnisse anzeigen",
      "Ansicht für Desktop und Handy",
    ],
    vorteile: ["Schnell verständlich", "Für Gruppen nutzbar", "Eigenes Projekt von FLX"],
    zielgruppen: ["Community Teams", "Vereine", "Spielgruppen"],
    views: [
      {
        key: "community",
        title: "Teams und Punkte",
        description: "Spielbetrieb übersichtlich darstellen.",
      },
      {
        key: "dashboard",
        title: "Alles im Blick",
        description: "Ergebnisse und Fortschritt schnell sehen.",
      },
    ],
  },
];
