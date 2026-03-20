export type ServiceKey = "websites" | "webapps" | "pwaps" | "tools" | "maintenance";

export type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    key: "websites",
    title: "Websites & Landingpages",
    description: "Markenstarke Seiten mit sauberer Struktur, schneller Performance und klaren Conversion-Pfaden.",
    bullets: ["SEO-Basis & Semantik", "Design-System & UI-Komponenten", "Content-Ready für schnelle Iterationen"],
  },
  {
    key: "webapps",
    title: "Web-Apps & Portale",
    description: "Anwendungen, die Teams im Alltag nutzen: Datenverwaltung, Prozesse und Workflows in einem System.",
    bullets: ["Auth & Rollen (optional)", "Datenmodelle & Dashboards", "Integration über APIs & Webhooks"],
  },
  {
    key: "pwaps",
    title: "Progressive Web Apps (PWAs)",
    description: "Installierbar, performant, offline-fähig – für mobile Nutzung ohne App-Store-Abhängigkeit.",
    bullets: ["Homescreen-Installation", "Offline-Sync & robuste UI", "Push/Benachrichtigungen (optional)"],
  },
  {
    key: "tools",
    title: "Individuelle Tools & Automationen",
    description: "Digitale Werkzeuge, die Medienbrüche beseitigen – plus Automatisierung für wiederkehrende Aufgaben.",
    bullets: ["Workflows & Integrationen", "Report-/Export-Mechaniken", "Schnelle MVPs mit iterativem Ausbau"],
  },
  {
    key: "maintenance",
    title: "Weiterentwicklung & Support",
    description: "Nach dem Launch: Updates, Bugfixes und gezielte Feature-Sprints – nachvollziehbar und planbar.",
    bullets: ["Monitoring & Stabilität", "Performance-Optimierung", "Security- und Dependency-Updates"],
  },
];

