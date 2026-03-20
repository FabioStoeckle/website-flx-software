export type ProductCategory = "Apps" | "Websites" | "PWAs" | "Digitale Tools";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  href: string;
};

export const products: Product[] = [
  {
    slug: "angebot-fix",
    name: "Angebot-Fix.de",
    category: "Websites",
    description: "Schnelle Angebots-Erstellung für Teams, die Projekte zuverlässig planen und sauber präsentieren.",
    benefits: ["Preis-/Leistungs-Templates", "PDF-Export für Kunden", "Klarer Status für Aufträge"],
    href: "https://angebot-fix.de",
  },
  {
    slug: "rivals11",
    name: "Rivals11.de",
    category: "Apps",
    description: "Digitale Plattform-Lösung für Community, Spielbetrieb und wiederkehrende Workflows – ohne Medienbrüche.",
    benefits: ["Web-App mit schneller Bedienung", "Automatisierte Abläufe", "Strukturierte Daten & Auswertungen"],
    href: "https://rivals11.de",
  },
];

