import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageSquare,
  Target,
  Wrench,
} from "lucide-react";
import { CertificationCard } from "@/components/trust/CertificationCard";
import { qualifications, type Qualification } from "@/data/qualifications";
import { QualificationTextCard } from "@/components/trust/QualificationTextCard";

export const metadata: Metadata = {
  title: "Über FLX-Software | FLX-Software",
  description:
    "FLX-Software baut einfache digitale Lösungen für Betriebe, die weniger Papierkram und mehr Überblick wollen.",
};

const values = [
  {
    title: "Praktisch denken",
    text: "Eine Lösung muss im Alltag helfen. Sonst ist sie nicht fertig.",
    icon: Target,
  },
  {
    title: "Sauber bauen",
    text: "Deine Website oder dein Programm soll stabil laufen und später gut anpassbar bleiben.",
    icon: Wrench,
  },
  {
    title: "Klar sprechen",
    text: "Du bekommst verständliche Antworten, kurze Wege und ehrliche Einschätzungen.",
    icon: MessageSquare,
  },
];

const deliverables = [
  "Persönlicher Ansprechpartner",
  "Klare Absprachen vor dem Start",
  "Verständliche Erklärung ohne Fachchinesisch",
  "Saubere Umsetzung mit Blick auf deinen Alltag",
  "Unterstützung auch nach dem Start",
];

export default function UeberUnsPage() {
  const googleCertificate = qualifications.find(
    (q): q is Extract<Qualification, { kind: "document" }> => q.kind === "document"
  );

  const ihkQualification = qualifications.find(
    (q): q is Extract<Qualification, { kind: "text" }> => q.kind === "text" && q.id === "fiadevelop-ihk"
  );

  const bachelorProQualification = qualifications.find(
    (q): q is Extract<Qualification, { kind: "text" }> =>
      q.kind === "text" && q.id === "bachelorpro-infosec"
  );

  const experienceQualification = qualifications.find(
    (q): q is Extract<Qualification, { kind: "text" }> =>
      q.kind === "text" && q.id === "experience-since-2019"
  );

  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              FLX-Software steht für einfache digitale Lösungen, die im Betrieb wirklich genutzt werden.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Digital bauen, aber verständlich bleiben.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Wir helfen Handwerkern, Dienstleistern und kleinen Unternehmen dabei, Papierkram, Suchen und doppelte
              Arbeit zu reduzieren.
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
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Worauf es ankommt</p>
                  <h2 className="text-2xl font-semibold">Einfach nutzbar</h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {["Weniger Zettel", "Weniger Suchen", "Weniger doppelte Arbeit", "Mehr Überblick"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-100 p-4 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-flx-cyan" aria-hidden="true" />
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
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flx-angle-card bg-white p-7 shadow-lg shadow-slate-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Haltung</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Bodenständig statt kompliziert.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                Wir reden nicht um den heißen Brei. Wir wollen verstehen, wie dein Betrieb arbeitet, wo es hakt und was
                dir wirklich Zeit spart.
              </p>
            </div>

            <div className="grid gap-5">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flx-angle-card bg-white p-6 shadow-lg shadow-slate-900/10">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 leading-relaxed text-slate-700">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080b12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d1320] p-7 sm:p-10">
            <div className="absolute right-[-8%] top-0 h-full w-48 -skew-x-12 bg-flx-cyan/20" />
            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Zusammenarbeit</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Was du bekommst</h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-300">
                  Eine Lösung, die zu deinem Betrieb passt, und eine Zusammenarbeit, bei der du immer weißt, woran du
                  bist.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 text-slate-950">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-flx-cyan" aria-hidden="true" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Nachweis</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Qualifikation und Praxiserfahrung</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Neben Erfahrung aus echten Projekten gibt es auch fachliche Grundlagen, die für saubere Arbeit wichtig
              sind.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <div className="min-w-0 h-full">
              {googleCertificate ? (
                <CertificationCard
                  key={googleCertificate.id}
                  title={googleCertificate.title}
                  subtitle={googleCertificate.status}
                  issuer={googleCertificate.issuer}
                  description={googleCertificate.description}
                  thumbnailSrc={googleCertificate.thumbnailSrc}
                  documentHref={googleCertificate.documentHref}
                  variant="light"
                />
              ) : null}
            </div>

            {[ihkQualification, bachelorProQualification, experienceQualification].map((qualification) => (
              <div key={qualification?.id} className="min-w-0 h-full">
                {qualification ? (
                  <QualificationTextCard
                    status={qualification.status}
                    title={qualification.title}
                    hint={qualification.hint}
                    description={qualification.description}
                    relevance={qualification.relevance}
                    variant="light"
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
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
