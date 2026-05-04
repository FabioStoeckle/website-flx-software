import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Target, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { CertificationCard } from "@/components/trust/CertificationCard";
import { qualifications, type Qualification } from "@/data/qualifications";
import { QualificationTextCard } from "@/components/trust/QualificationTextCard";

export const metadata: Metadata = {
  title: "Über uns | FLX-Software",
  description:
    "Wir entwickeln Websites, Web-Apps und digitale Tools. Kein Agentur-Overhead, direkte Ansprechpartner, schnelle Umsetzung.",
};

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
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Wer wir sind</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Zwei Entwickler aus Deutschland die eigene Produkte bauen und Webprojekte ohne das ganze Agentur-Drumherum umsetzen.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-light text-white">Wie es dazu kam</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Wir haben FLX-Software gestartet weil wir eigene Ideen umsetzen wollten und nebenher gemerkt haben dass wir Projekte auch für andere gerne übernehmen. Ohne den ganzen Aufwand den eine klassische Agentur mitbringt.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <Target className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Kein Overhead</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Kein Büro, keine festen Mitarbeiter, keine Verwaltungsebenen. Das spart Zeit und senkt deinen Preis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Wir hassen Zeitverschwendung</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Kein wochenlanges Konzeptionieren bevor etwas gebaut wird. Ein kurzes Gespräch reicht und wir fangen an.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageSquare className="h-7 w-7 text-flx-cyan" />
                  <div>
                    <h3 className="text-xl font-medium text-white">Du redest direkt mit uns</h3>
                    <p className="mt-1 text-gray-400 leading-relaxed">
                      Keine Account Manager, keine Weiterleitungen. Du schreibst uns und bekommst eine Antwort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-light text-white">Was du davon hast</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Kurz gesagt: du weißt immer mit wem du es zu tun hast und was als nächstes passiert.
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Direkter Kontakt zu den Entwicklern die an deinem Projekt arbeiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Schnell live ohne monatelange Vorlaufzeit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Persönlicher Support vor Ort wenn du ihn brauchst</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                  <span>Weiterentwicklung nach dem Launch so lange du willst</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <p className="text-gray-400 leading-relaxed">
                  Klingt gut? Schreib uns kurz was du dir vorstellst.
                </p>
                <div className="mt-6">
                  <Link href="/kontakt">
                    <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                      Jetzt melden
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
            <h2 className="text-4xl font-light text-white">Ausbildung und Erfahrung</h2>
            <p className="mt-3 text-gray-400 text-lg leading-relaxed max-w-2xl">
              Wir kommen nicht aus dem Nichts. Hier ist was wir mitbringen.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-stretch">
            {/* 1) Google-Zertifikat */}
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
                />
              ) : null}
            </div>

            {/* 2) Fachinformatiker für Anwendungsentwicklung (IHK) */}
            <div className="min-w-0 h-full">
              {ihkQualification ? (
                <QualificationTextCard
                  key={ihkQualification.id}
                  status={ihkQualification.status}
                  title={ihkQualification.title}
                  hint={ihkQualification.hint}
                  description={ihkQualification.description}
                  relevance={ihkQualification.relevance}
                />
              ) : null}
            </div>

            {/* 3) Bachelor Professional in IT – Informationssicherheit (in Arbeit) */}
            <div className="min-w-0 h-full">
              {bachelorProQualification ? (
                <QualificationTextCard
                  key={bachelorProQualification.id}
                  status={bachelorProQualification.status}
                  title={bachelorProQualification.title}
                  hint={bachelorProQualification.hint}
                  description={bachelorProQualification.description}
                  relevance={bachelorProQualification.relevance}
                />
              ) : null}
            </div>

            {/* 4) Berufserfahrung / Praxiserfahrung */}
            <div className="min-w-0 h-full">
              {experienceQualification ? (
                <QualificationTextCard
                  key={experienceQualification.id}
                  status={experienceQualification.status}
                  title={experienceQualification.title}
                  hint={experienceQualification.hint}
                  description={experienceQualification.description}
                  relevance={experienceQualification.relevance}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

