export type ProductCategory = "Apps" | "Websites" | "PWAs" | "Digitale Tools";

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
];

