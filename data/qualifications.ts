export type Qualification =
  | {
      kind: "document";
      id: string;
      status: string;
      title: string;
      issuer: string;
      description: string;
      thumbnailSrc: string;
      documentHref: string;
    }
  | {
      kind: "text";
      id: string;
      status: string;
      title: string;
      hint?: string;
      description: string;
      relevance?: string;
    };

export const qualifications: Qualification[] = [
  {
    kind: "document",
    id: "google-onlinemarketing",
    status: "Abgeschlossenes Google-Zertifikat",
    title: "Grundlagen des Onlinemarketings",
    issuer: "Bestätigte Kenntnisse durch Google",
    description:
      "Fundierte Grundlagen im digitalen Marketing: verstanden werden, messbar gemacht werden und im Projektkontext sinnvoll eingesetzt.",
    thumbnailSrc: "/certificates/google-grundlagen-onlinemarketing-thumb.png",
    documentHref: "/certificates/google-grundlagen-onlinemarketing.pdf",
  },
  {
    kind: "text",
    id: "fiadevelop-ihk",
    status: "Abgeschlossene Berufsausbildung",
    title: "Fachinformatiker für Anwendungsentwicklung (IHK)",
    hint: "IHK-Abschluss",
    description:
      "Diese Qualifikation steht für eine fundierte technische Basis in Softwareentwicklung, Anwendungslogik und praxisnaher Umsetzung digitaler Lösungen.",
    relevance:
      "Grundlagen in Entwicklung und Umsetzung bilden die Basis für saubere Architektur, klare Logik und zuverlässige Ergebnisse in Projekten.",
  },
  {
    kind: "text",
    id: "bachelorpro-infosec",
    status: "Weiterbildung / laufend",
    title: "Bachelor Professional in IT – Informationssicherheit (in Arbeit)",
    hint: "Derzeit in Weiterbildung",
    description:
      "Die laufende Weiterbildung stärkt insbesondere Kompetenzen in Informationssicherheit, strukturiertem IT-Verständnis und professioneller Bewertung technischer Risiken.",
    relevance:
      "Informationssicherheit ist Teil unseres Qualitätsverständnisses: Wir denken Risiken mit, bevor sie zu Problemen werden.",
  },
  {
    kind: "text",
    id: "experience-since-2019",
    status: "Berufserfahrung seit 2019",
    title: "Entwicklung, Development Consulting & Application Engineering",
    hint: "Praxis aus echten Projekten",
    description:
      "Seit 2019 arbeite ich beruflich im IT- und Entwicklungsumfeld – mit Fokus auf Entwicklung, Development Consulting und die Betreuung von Anwendungen im Engineering-Alltag. So entsteht Know-how aus Umsetzung, Schnittstellen und realen Anforderungen.",
    relevance:
      "Das ist kein theoretischer Lebenslauf, sondern ein Praxissignal: Erfahrung aus Entwicklung und Beratung fließt direkt in Entscheidungen, Umsetzungsqualität und Zusammenarbeit ein.",
  },
];

