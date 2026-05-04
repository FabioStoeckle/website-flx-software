export type ServiceKey =
  | "websites"
  | "webapps"
  | "pwaps"
  | "tools"
  | "maintenance"
  | "growth";

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
    description: "Eine Website die schnell lädt, gut aussieht und Besucher nicht verliert weil der nächste Schritt nicht klar ist.",
    bullets: ["Ordentliche SEO-Grundlage damit Google dich findet", "Klares Design das zu deiner Marke passt", "So aufgebaut dass du Inhalte leicht anpassen kannst"],
  },
  {
    key: "webapps",
    title: "Web-Apps & Portale",
    description: "Software die dein Team täglich nutzt. Egal ob Datenverwaltung, interne Abläufe oder ein eigenes Kundenportal.",
    bullets: ["Login und Rechteverwaltung wenn nötig", "Übersichten und Auswertungen die Sinn ergeben", "Anbindung an andere Tools die du schon nutzt"],
  },
  {
    key: "pwaps",
    title: "Progressive Web Apps (PWAs)",
    description: "Läuft wie eine App direkt im Browser. Installierbar auf dem Homescreen und funktioniert auch ohne stabiles Internet.",
    bullets: ["Auf dem Homescreen installierbar ohne App-Store", "Funktioniert auch wenn das Netz gerade schwach ist", "Push-Benachrichtigungen wenn du sie brauchst"],
  },
  {
    key: "tools",
    title: "Individuelle Tools & Automationen",
    description: "Wenn du regelmäßig etwas von Hand erledigst das ein Tool auch könnte bauen wir dir das Tool.",
    bullets: ["Automatische Abläufe statt manuelle Schritte", "Auswertungen und Exporte auf Knopfdruck", "Erstversion schnell live, dann ausgebaut wenn du mehr willst"],
  },
  {
    key: "maintenance",
    title: "Weiterentwicklung & Support",
    description: "Nach dem Launch sind wir nicht weg. Wir halten dein Projekt aktuell und bauen weiter wenn du neue Ideen hast.",
    bullets: ["Wir behalten im Blick ob alles läuft", "Damit es auch in einem Jahr noch schnell ist", "Abhängigkeiten und Sicherheitsupdates werden aktuell gehalten"],
  },
  {
    key: "growth",
    title: "Mehr aus deiner Website rausholen",
    description: "Wenn deine Website schon steht aber zu wenig passiert schauen wir wo es hakt und was man besser machen kann.",
    bullets: [
      "Wo verlierst du Besucher und warum",
      "Zahlen die zeigen was wirklich funktioniert",
      "Mehr Anfragen aus dem gleichen Traffic",
    ],
  },
];

