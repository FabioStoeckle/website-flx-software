export type ProductCategory = "Apps" | "Websites" | "Programme" | "Digitale Tools";

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
    description: "Angebote, Rechnungen und Mahnungen einfach online erstellen.",
    benefits: [
      "Vorlagen für Angebote, Rechnungen und Mahnungen",
      "PDF Export für Kunden und Ablage",
      "Klarer Überblick über alle Belege",
    ],
    href: "https://flx-suite.de",
    features: [
      "Angebote, Rechnungen und Mahnungen in einem einfachen Ablauf",
      "Klar strukturierte Vorlagen mit einheitlichem Ergebnis",
      "PDF Export vom Entwurf bis zum Versand",
    ],
    vorteile: ["Schneller im Alltag", "Weniger Fehler durch einheitliche Vorlagen", "Mehr Überblick im Büro"],
    zielgruppen: ["Selbstständige", "Kleinunternehmen", "Dienstleister"],
    views: [
      {
        key: "workflow",
        title: "Dokumente in Minuten",
        description: "Vorlage wählen, Daten eintragen und PDF erstellen.",
      },
      { key: "export", title: "Bereit zum Versand", description: "PDFs, die sauber ankommen und direkt genutzt werden können." },
      { key: "dashboard", title: "Alles im Überblick", description: "Klarer Status über Angebote, Rechnungen und Mahnungen." },
    ],
  },
  {
    slug: "taktikfeld",
    name: "Taktikfeld.de",
    category: "Apps",
    description: "Digitale Taktiktafel für Trainer.",
    benefits: [
      "Spieler mit Name und Nummer platzieren",
      "Pfeile und Laufwege einzeichnen",
      "Formationen speichern und als PDF exportieren",
    ],
    href: "https://taktikfeld.de",
    features: [
      "Spieler per Drag and Drop auf die Tafel setzen",
      "Pfeile und Laufwege frei einzeichnen",
      "Formationen sichern und als PDF exportieren",
    ],
    vorteile: ["Schnell erklärt", "Immer griffbereit", "Gut für Training und Spieltag"],
    zielgruppen: ["Trainer", "Co-Trainer", "Vereine"],
    views: [
      {
        key: "workflow",
        title: "Aufstellung in Sekunden",
        description: "Spieler platzieren, Wege markieren und direkt erklären.",
      },
      {
        key: "export",
        title: "PDF fürs Training",
        description: "Formation und Zeichnungen exportieren und weitergeben.",
      },
      {
        key: "dashboard",
        title: "Formationen im Blick",
        description: "Gespeicherte Formationen schnell wiederfinden.",
      },
    ],
  },
  {
    slug: "qr-designer",
    name: "QR-Code Designer",
    category: "Digitale Tools",
    description: "QR-Codes einfach gestalten und exportieren.",
    benefits: ["Logo einfügen", "Farben und Stil anpassen", "Als PNG oder SVG exportieren"],
    href: "/qr",
    features: [
      "QR-Code gestalten",
      "Eigenes Logo einbetten",
      "Datei für Druck, Flyer, Schilder oder Website exportieren",
    ],
    vorteile: ["Schnell erstellt", "Einfach zu teilen", "Gut für Flyer, Schilder und Websites"],
    zielgruppen: ["Betriebe", "Vereine", "Selbstständige"],
    views: [
      { key: "design", title: "Stil nach Wunsch", description: "Farben, Logo und Aussehen schnell anpassen." },
      { key: "export", title: "Sofort exportieren", description: "PNG oder SVG herunterladen und direkt nutzen." },
    ],
  },
  {
    slug: "gehaltsrechner",
    name: "Brutto Netto Rechner",
    category: "Digitale Tools",
    description: "Brutto und Netto Beträge schnell ausrechnen.",
    benefits: ["Gehalt berechnen", "Abzüge nachvollziehen", "Monat und Jahr ansehen"],
    href: "/gehalt",
    features: ["Brutto und Netto berechnen", "Steuern und Abzüge anzeigen", "Werte für 2026 nutzen"],
    vorteile: ["Einfach verständlich", "Schnell nutzbar", "Ohne Anmeldung"],
    zielgruppen: ["Arbeitnehmer", "Selbstständige", "Büro und Verwaltung"],
    views: [
      {
        key: "dashboard",
        title: "Beträge im Blick",
        description: "Brutto, Netto und Abzüge schnell sehen.",
      },
    ],
  },
  {
    slug: "kfz-rechner",
    name: "Kfz-Steuer Rechner",
    category: "Digitale Tools",
    description: "Kfz Steuer einfach berechnen.",
    benefits: ["Fahrzeugdaten eingeben", "Steuer anzeigen", "Schnell vergleichen"],
    href: "/kfz",
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
