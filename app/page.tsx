import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe2,
  ListChecks,
  MonitorSmartphone,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Trophy,
  Wrench,
} from "lucide-react";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "FLX-Software.de | Digitale Lösungen für Betriebe",
  description:
    "Wir bauen einfache digitale Lösungen für Betriebe, die weniger Papierkram und mehr Überblick wollen.",
};

const trustPoints = [
  "Persönlicher Ansprechpartner",
  "Schnell startklar",
  "Einfach zu bedienen",
  "Sauber gebaut",
];

const problems = [
  "Fahrzeuge werden in Excel gepflegt",
  "Werkzeuge sind irgendwo unterwegs",
  "Angebote und Rechnungen werden jedes Mal neu zusammenkopiert",
  "Kundendaten liegen in Mails, WhatsApp und Papierordnern",
  "Die Website ist veraltet oder bringt keine Anfragen",
];

const services = [
  {
    title: "Websites, die Kunden verstehen",
    description:
      "Wir bauen dir eine moderne Website, die klar zeigt, wer du bist, was du anbietest und wie man dich erreicht.",
    icon: Globe2,
  },
  {
    title: "Eigene Verwaltungsprogramme",
    description:
      "Wenn Excel, Papier oder WhatsApp langsam nerven, bauen wir dir ein einfaches Programm für Fahrzeuge, Werkzeuge, Aufträge, Prüfungen, Dokumente oder interne Listen.",
    icon: ClipboardList,
  },
  {
    title: "Programme für PC, Handy und Tablet",
    description:
      "Deine Lösung läuft direkt im Browser. Du kannst sie im Büro am PC nutzen oder unterwegs auf dem Handy, ohne komplizierte Installation.",
    icon: MonitorSmartphone,
  },
  {
    title: "Kleine Helfer für wiederkehrende Aufgaben",
    description:
      "Wenn du immer wieder dieselben Dinge von Hand machst, kann man vieles vereinfachen. Zum Beispiel PDF Dokumente erstellen, Listen pflegen, Erinnerungen anzeigen oder Daten sortieren.",
    icon: Wrench,
  },
];

const projectIconMap = {
  "flx-suite": ReceiptText,
  taktikfeld: Trophy,
  "qr-designer": QrCode,
  gehaltsrechner: FileText,
  "kfz-rechner": ShieldCheck,
  rivals11: Smartphone,
};

export default function HomePage() {
  const mainProjects = products.filter((product) => product.slug !== "rivals11");
  const appProjects = products.filter((product) => product.slug === "rivals11");

  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_32%,rgba(255,255,255,0.04)_32.3%,transparent_33%)]" />
        <div className="absolute right-[-12%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              Wir bauen einfache digitale Lösungen für Betriebe, die weniger Papierkram und mehr Überblick wollen.
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Digitale Lösungen für Betriebe, die es einfach wollen.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Wir bauen Websites, kleine Verwaltungsprogramme und digitale Helfer für Handwerker, Dienstleister und
              kleine Unternehmen.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="raycast-button inline-flex items-center justify-center px-7 py-4 text-base font-medium text-white smooth-transition"
              >
                Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/#projekte"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-base font-medium text-white transition-colors hover:border-flx-cyan/70 hover:text-flx-cyan"
              >
                Beispiele ansehen
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-flx-cyan" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[470px] lg:block">
            <div className="absolute right-0 top-10 h-[360px] w-[78%] -skew-x-12 border border-flx-cyan/35 bg-white shadow-2xl shadow-flx-cyan/10" />
            <div className="absolute left-8 top-0 h-[360px] w-[68%] -skew-x-12 border border-white/15 bg-[#0b1220]" />
            <div className="absolute inset-x-16 top-16 overflow-hidden rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-flx-cyan">FLX Übersicht</p>
                  <p className="text-2xl font-semibold">Heute erledigen</p>
                </div>
                <ListChecks className="h-10 w-10 text-flx-cyan" aria-hidden="true" />
              </div>
              <div className="mt-6 space-y-4">
                {["Fahrzeugprüfung eintragen", "Angebot als PDF erstellen", "Werkzeugliste prüfen"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-slate-100 p-4">
                    <span className="font-medium">{item}</span>
                    <span className="h-3 w-3 rounded-full bg-flx-cyan" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Aus dem Alltag</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Kommt dir das bekannt vor?</h2>
            </div>
            <div className="grid gap-4">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-lg shadow-black/20"
                >
                  <div className="absolute right-0 top-0 h-full w-2 bg-flx-cyan" />
                  <p className="pr-6 text-lg font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-24">
        <div className="absolute left-[-10%] top-10 h-40 w-[46%] -skew-x-12 bg-flx-cyan/10" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Lösung</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Genau solche Dinge machen wir einfacher.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Du bekommst keine aufgeblähte Software, sondern eine Lösung, die zu deinem Betrieb passt. Verständlich
              erklärt, sauber umgesetzt und im Alltag einfach zu bedienen.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="flx-angle-card bg-white p-7 shadow-lg shadow-slate-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-700">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#080b12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d1320] p-7 sm:p-10">
            <div className="absolute right-[-8%] top-0 h-full w-48 -skew-x-12 bg-flx-cyan/20" />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                Wir wissen: Die meisten Betriebe brauchen keine riesige Software.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Oft geht es um ganz einfache Dinge: weniger Zettel, weniger Suchen, weniger doppelte Arbeit, mehr
                Überblick. Genau dafür bauen wir Lösungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projekte" className="bg-[#05070d] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Beispiele</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Eigene Projekte</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Hier siehst du, welche Art von Lösungen wir bauen. Klar, praktisch und direkt nutzbar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mainProjects.map((product) => {
              const Icon = projectIconMap[product.slug as keyof typeof projectIconMap] ?? FileText;
              const isExternal = product.href.startsWith("http");
              return (
                <a
                  key={product.slug}
                  href={product.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flx-angle-card bg-white p-6 text-slate-950 shadow-lg shadow-black/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition-colors group-hover:text-flx-cyan" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-700">{product.description}</p>
                </a>
              );
            })}
          </div>

          {appProjects.length > 0 && (
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Eigenes App und Game Projekt
              </p>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {appProjects.map((product) => {
                  const Icon = projectIconMap[product.slug as keyof typeof projectIconMap] ?? Smartphone;
                  const isExternal = product.href.startsWith("http");
                  return (
                    <a
                      key={product.slug}
                      href={product.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group rounded-lg border border-white/10 bg-white/5 p-6 text-white transition-colors hover:border-flx-cyan/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/15 text-flx-cyan">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-500 transition-colors group-hover:text-flx-cyan" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold">{product.name}</h3>
                      <p className="mt-3 leading-relaxed text-gray-300">{product.description}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-24">
        <div className="absolute right-[-14%] top-12 h-52 w-[50%] -skew-x-12 border-y border-flx-cyan/30 bg-flx-cyan/10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Hast du eine Idee oder ein Problem im Betrieb?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Du musst kein fertiges Konzept haben. Schreib uns einfach kurz, was dich im Alltag nervt. Oft reicht ein
            Satz wie: Wir verwalten unsere Fahrzeuge noch in Excel oder Ich brauche eine bessere Übersicht über meine
            Werkzeuge. Wir schauen uns das an und sagen dir ehrlich, was sinnvoll ist.
          </p>
          <div className="mt-9">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-flx-cyan px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#005ec7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flx-cyan/60 focus-visible:ring-offset-2"
            >
              Unverbindlich anfragen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
