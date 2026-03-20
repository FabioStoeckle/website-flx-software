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
  },
  {
    kind: "text",
    id: "bachelorpro-infosec",
    status: "Weiterbildung / laufend",
    title: "Bachelor Professional in IT – Informationssicherheit (in Arbeit)",
    hint: "Derzeit in Weiterbildung",
    description:
      "Die laufende Weiterbildung stärkt insbesondere Kompetenzen in Informationssicherheit, strukturiertem IT-Verständnis und professioneller Bewertung technischer Risiken.",
  },
];

