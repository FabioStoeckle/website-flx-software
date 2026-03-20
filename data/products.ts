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
    slug: "angebot-fix",
    name: "Angebot-Fix.de",
    category: "Digitale Tools",
    description: "Schnelle Angebots-Erstellung für Teams, die Projekte zuverlässig planen und sauber präsentieren.",
    benefits: ["Preis-/Leistungs-Templates", "PDF-Export für Kunden", "Klarer Status für Aufträge"],
    href: "https://angebot-fix.de",
    features: [
      "Template-basierte Angebotserstellung für konsistente Ergebnisse",
      "Strukturierte Inhalte, die Kunden schnell verstehen",
      "PDF-Export und nachvollziehbare Status-Schritte",
    ],
    vorteile: ["Schneller im Alltag", "Sauberer Output ohne Nacharbeit", "Transparenter Prozess bis zum Auftrag"],
    zielgruppen: ["Projektteams", "Service- & Beratungsunternehmen", "Agenturen mit wiederkehrenden Angeboten"],
    views: [
      { key: "workflow", title: "Angebot in Minuten", description: "Vorlagen, klare Eingaben und ein sauberer Ablauf vom Entwurf bis zur Version." },
      { key: "export", title: "PDF bereit für Kunden", description: "Export, der bei Kunden ankommt – ohne Medienbrüche oder Format-Stress." },
      { key: "dashboard", title: "Status im Überblick", description: "Klarer Fortschritt statt “irgendwo ist die Datei”." },
    ],
  },
  {
    slug: "rechnung-fix",
    name: "Rechnung-Fix.de",
    category: "Digitale Tools",
    description:
      "Rechnungen in Sekunden erstellen – strukturiert, rechtssicher und sofort versandfertig.",
    benefits: ["Fertige Rechnungs-Templates", "PDF-Export für Kunden", "Klare Übersicht über Rechnungsstatus"],
    href: "https://www.Rechnung-Fix.de",
    features: [
      "Template-basierte Rechnungserstellung mit klarer Struktur",
      "PDF-Export für Kunden in einem zuverlässigen Format",
      "Übersichtlicher Status über alle Rechnungen und Schritte hinweg",
    ],
    vorteile: ["Schneller im Alltag", "Weniger Fehler durch feste Vorlage-Struktur", "Transparenter Status für alle Beteiligten"],
    zielgruppen: ["Selbstständige & Freiberufler", "Kleinunternehmen", "Teams mit wiederkehrender Rechnungsstellung"],
    views: [
      { key: "workflow", title: "Rechnung in Sekunden", description: "Vorlagen wählen, Daten eintragen, fertig – ohne Umwege." },
      { key: "export", title: "PDF-Export für Kunden", description: "Export, der bei Kunden sauber ankommt – ohne Format-Stress." },
      { key: "dashboard", title: "Status & Übersicht", description: "Klarer Überblick über den Stand und die nächsten Schritte." },
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

