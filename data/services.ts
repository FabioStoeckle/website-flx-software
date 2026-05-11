export type ServiceKey =
  | "websites"
  | "webapps"
  | "browser-programs"
  | "tools"
  | "maintenance"
  | "customers";

export type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    key: "websites",
    title: "Websites, die Kunden verstehen",
    description:
      "Moderne Websites, die klar zeigen, wer du bist, was du anbietest und wie man dich erreicht.",
    bullets: ["Klare Struktur", "Gute Lesbarkeit", "Kontakt schnell auffindbar"],
  },
  {
    key: "webapps",
    title: "Eigene Verwaltungsprogramme",
    description:
      "Einfache Programme für Fahrzeuge, Werkzeuge, Aufträge, Prüfungen, Dokumente oder interne Listen.",
    bullets: ["Weniger Papier", "Weniger Suchen", "Mehr Überblick"],
  },
  {
    key: "browser-programs",
    title: "Programme für PC, Handy und Tablet",
    description:
      "Deine Lösung läuft direkt im Browser und ist im Büro genauso nutzbar wie unterwegs.",
    bullets: ["Keine komplizierte Installation", "Auch mobil nutzbar", "Schnell startklar"],
  },
  {
    key: "tools",
    title: "Kleine Helfer für Routineaufgaben",
    description:
      "Wir vereinfachen Dinge, die du immer wieder von Hand machst, zum Beispiel PDF Dokumente, Listen oder Erinnerungen.",
    bullets: ["PDF Dokumente erstellen", "Listen pflegen", "Erinnerungen anzeigen"],
  },
  {
    key: "maintenance",
    title: "Pflege und Unterstützung",
    description:
      "Nach dem Start kümmern wir uns auf Wunsch um Anpassungen, Korrekturen und sinnvolle Erweiterungen.",
    bullets: ["Ansprechpartner behalten", "Probleme sauber beheben", "Lösung passend erweitern"],
  },
  {
    key: "customers",
    title: "Ehrliche Beratung",
    description:
      "Du bekommst eine klare Einschätzung, was sinnvoll ist und was du dir sparen kannst.",
    bullets: ["Verständlich erklärt", "Ohne Fachchinesisch", "Passend zum Betrieb"],
  },
];
