import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Target, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { CertificationCard } from "@/components/trust/CertificationCard";
import { qualifications } from "@/data/qualifications";
import { QualificationTextCard } from "@/components/trust/QualificationTextCard";

export const metadata: Metadata = {
  title: "Über FLX-Software | FLX-Software",
  description:
    "FLX-Software steht für pragmatische Entwicklung: digitale Produkte, PWAs und Websites, die im Alltag funktionieren.",
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Über FLX-Software</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            FLX-Software ist eine Dachmarke für digitale Produkte und Weblösungen. Wir bauen Software, die klar strukturiert ist
            und im Alltag genutzt wird.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-light text-white">Unsere Haltung</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Keine Buzzword-Show. Wir entscheiden pragmatisch: was bringt dem Projekt echten Nutzen, was ist technisch
                sinnvoll, was macht die Zusammenarbeit leichter.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <Target className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Pragmatismus</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Die beste Lösung ist die, die funktioniert – nicht die, die am schicksten klingt.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Stabil & wartbar</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Saubere Architektur, klare Zuständigkeiten und Updates, die planbar bleiben.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageSquare className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Klarer Austausch</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Kurze Wege, verständliche Status-Updates und Entscheidungen mit nachvollziehbarem Warum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-light text-white">Was du bekommst</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Eine Zusammenarbeit, die nicht aus dem Takt gerät – und ein Ergebnis, das Teams wirklich nutzen.
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Strukturiertes Produkt-/Projekt-Setup und klare Deliverables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Design, Entwicklung und Qualitätssicherung aus einem Ablauf</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Weiterentwicklung nach Launch – wenn du mehr willst</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <p className="text-gray-400 leading-relaxed">
                  Du suchst eine Dachmarke, die Produkte und Projekte sauber bündelt? Dann passt FLX-Software.
                </p>
                <div className="mt-6">
                  <Link href="/kontakt">
                    <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                      Projekt anfragen
                      <ArrowRight className="ml-2 inline-block h-5 w-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="text-4xl font-light text-white">Qualifikation, Know-how & Praxiserfahrung</h2>
            <p className="mt-3 text-gray-400 text-lg leading-relaxed max-w-2xl">
              Bei FLX-Software verbinden wir nachgewiesenes Know-how mit soliden Grundlagen und echter Engineering-Praxis.
              Das Ergebnis: Entscheidungen, Umsetzung und Ergebnisse, die im Projektalltag funktionieren.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12 md:grid-rows-2 items-stretch">
            {/* Featured: Google-Zertifikat (left, 2 rows) */}
            <div className="md:col-span-6 md:row-span-2 h-full">
              {qualifications
                .filter((q) => q.kind === "document")
                .map((q) => (
                  <CertificationCard
                    key={q.id}
                    title={q.title}
                    subtitle={q.status}
                    issuer={q.issuer}
                    description={q.description}
                    thumbnailSrc={q.thumbnailSrc}
                    documentHref={q.documentHref}
                  />
                ))}
            </div>

            {/* Ausbildung (top, right) */}
            <div className="md:col-span-3 md:row-span-1 h-full">
              {qualifications
                .filter((q) => q.kind === "text")
                .slice(0, 2)
                .map((q) => {
                  if (q.id !== "fiadevelop-ihk") return null;
                  return (
                    <QualificationTextCard
                      key={q.id}
                      status={q.status}
                      title={q.title}
                      hint={q.hint}
                      description={q.description}
                      relevance={q.relevance}
                    />
                  );
                })}
            </div>

            {/* Weiterbildung (top, right) */}
            <div className="md:col-span-3 md:row-span-1 h-full">
              {qualifications
                .filter((q) => q.kind === "text")
                .slice(0, 2)
                .map((q) => {
                  if (q.id !== "bachelorpro-infosec") return null;
                  return (
                    <QualificationTextCard
                      key={q.id}
                      status={q.status}
                      title={q.title}
                      hint={q.hint}
                      description={q.description}
                      relevance={q.relevance}
                    />
                  );
                })}
            </div>

            {/* Experience (bottom, right - spans both top columns) */}
            <div className="md:col-span-6 md:row-span-1 h-full">
              {qualifications
                .filter((q) => q.kind === "text")
                .map((q) => {
                  if (q.id !== "experience-since-2019") return null;
                  return (
                    <QualificationTextCard
                      key={q.id}
                      status={q.status}
                      title={q.title}
                      hint={q.hint}
                      description={q.description}
                      relevance={q.relevance}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

