import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cookie, FileText, Lock, Mail, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von FLX Software.",
};

const overview = [
  "Wir behandeln personenbezogene Daten vertraulich.",
  "Das Kontaktformular öffnet dein E-Mail Programm.",
  "Optionale Analyse wird erst nach Zustimmung aktiviert.",
  "Bei Fragen erreichst du uns unter info@flx-software.de.",
];

const privacySections = [
  {
    title: "1. Datenschutz auf einen Blick",
    body: [
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      "Ausführliche Informationen entnehmen Sie den folgenden Abschnitten dieser Datenschutzerklärung.",
    ],
  },
  {
    title: "2. Datenerfassung auf dieser Website",
    body: [
      "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Impressum dieser Website.",
      "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich zum Beispiel um Daten handeln, die Sie in ein Kontaktformular eingeben.",
      "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere Systeme erfasst. Das sind vor allem technische Daten, zum Beispiel Browser, Betriebssystem oder Uhrzeit des Seitenaufrufs.",
      "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden, wenn Sie dem zustimmen.",
    ],
  },
  {
    title: "3. Ihre Rechte",
    body: [
      "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.",
      "Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.",
      "Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
    ],
  },
  {
    title: "4. Hosting",
    body: [
      "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
      "Hierbei kann es sich vor allem um IP-Adressen, Kontaktanfragen, Meta und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln, die über eine Website generiert werden.",
      "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber potenziellen und bestehenden Kunden und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots.",
    ],
  },
  {
    title: "5. Allgemeine Hinweise und Pflichtinformationen",
    body: [
      "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln personenbezogene Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.",
      "Wir weisen darauf hin, dass die Datenübertragung im Internet, zum Beispiel bei der Kommunikation per E-Mail, Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
    ],
  },
  {
    title: "6. Server Log Dateien",
    body: [
      "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server Log Dateien, die Ihr Browser automatisch an uns übermittelt.",
      "Dies sind unter anderem Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.",
      "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage unseres berechtigten Interesses an der technisch fehlerfreien Darstellung und Optimierung der Website.",
    ],
  },
  {
    title: "7. Kontaktformular",
    body: [
      "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
      "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt je nach Anfrage auf Grundlage vertraglicher Maßnahmen, unseres berechtigten Interesses an der Bearbeitung der Anfrage oder Ihrer Einwilligung.",
    ],
  },
  {
    title: "8. Cookies und Analyse",
    body: [
      "Wir verwenden notwendige Technologien, um die Website bereitzustellen. Optionale Analysefunktionen werden nur aktiviert, wenn Sie über das Cookie Banner zustimmen.",
      "Sie können die Zustimmung ablehnen. Details und Änderungen ergeben sich aus dem Cookie Banner und dieser Datenschutzerklärung.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">Transparenz rund um deine Daten.</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Datenschutz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Hier erklären wir, welche Daten beim Besuch dieser Website verarbeitet werden und welche Rechte Sie haben.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <Lock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Kurz gesagt</p>
                  <h2 className="text-2xl font-semibold">Bewusst und sparsam</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {overview.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-100 p-4 font-medium">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-flx-cyan" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-24">
        <div className="absolute left-[-10%] top-10 h-40 w-[46%] -skew-x-12 bg-flx-cyan/10" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Verantwortlich", text: "FLX-Software, Inh. Fabio Stöckle", icon: FileText },
              { title: "Kontakt", text: "info@flx-software.de", icon: Mail },
              { title: "Cookies", text: "Optionale Analyse nur mit Zustimmung", icon: Cookie },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flx-angle-card bg-white p-6 shadow-lg shadow-slate-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-700">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 space-y-5">
            {privacySections.map((section) => (
              <article key={section.title} className="flx-angle-card bg-white p-7 shadow-lg shadow-slate-900/10">
                <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080b12] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Shield className="mx-auto h-12 w-12 text-flx-cyan" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">Fragen zum Datenschutz?</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Bei Fragen zur Verarbeitung personenbezogener Daten können Sie sich jederzeit an uns wenden.
          </p>
          <div className="mt-9">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-flx-cyan px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#005ec7]"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
