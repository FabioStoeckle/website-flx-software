import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquare, PencilLine } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | FLX-Software",
  description:
    "Projekt anfragen oder Kontakt aufnehmen. Schreib kurz, was dich im Alltag nervt. FLX-Software meldet sich ehrlich zurück.",
};

const quickExamples = [
  "Wir verwalten unsere Fahrzeuge noch in Excel",
  "Ich brauche eine bessere Übersicht über meine Werkzeuge",
  "Unsere Website ist alt und bringt kaum Anfragen",
];

const faqItems = [
  {
    question: "Muss ich schon ein fertiges Konzept haben?",
    answer:
      "Nein. Eine kurze Beschreibung reicht. Wir fragen nach, sortieren die Idee und sagen dir ehrlich, was sinnvoll ist.",
  },
  {
    question: "Wie schnell bekomme ich eine Antwort?",
    answer:
      "In der Regel melden wir uns zeitnah mit einer ersten Einschätzung und einem Vorschlag für den nächsten Schritt.",
  },
  {
    question: "Kann es auch ein kleines Projekt sein?",
    answer:
      "Ja. Viele gute Lösungen starten klein, zum Beispiel mit einer Liste, einem Formular oder einer besseren Übersicht.",
  },
  {
    question: "Was passiert nach der Anfrage?",
    answer:
      "Wir schauen uns dein Anliegen an, klären offene Fragen und geben dir eine verständliche Einschätzung zu Aufwand und Nutzen.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              Du musst noch nicht genau wissen, wie die Lösung aussehen soll.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Schreib uns, was dich im Betrieb aufhält.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Oft reicht ein kurzer Satz. Wir schauen uns dein Anliegen an und sagen dir ehrlich, welcher nächste Schritt
              sinnvoll ist.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#kontakt-anfrage"
                className="raycast-button inline-flex items-center justify-center px-7 py-4 text-base font-medium text-white smooth-transition"
              >
                Anfrage schreiben
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="mailto:info@flx-software.de"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-base font-medium text-white transition-colors hover:border-flx-cyan/70 hover:text-flx-cyan"
              >
                info@flx-software.de
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <MessageSquare className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Gute erste Nachricht</p>
                  <h2 className="text-2xl font-semibold">Kurz und ehrlich</h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {quickExamples.map((example) => (
                  <div key={example} className="rounded-lg bg-slate-100 p-4 font-medium">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flx-angle-card h-full bg-white p-7 shadow-lg shadow-slate-900/10">
              <h2 className="text-3xl font-semibold">Direkt erreichbar</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                Wenn du lieber direkt schreibst, erreichst du uns jederzeit per E-Mail.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-6 w-6 text-flx-cyan" />
                  <div>
                    <div className="font-semibold">E-Mail</div>
                    <a href="mailto:info@flx-software.de" className="mt-1 block text-slate-700 hover:text-flx-cyan">
                      info@flx-software.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-6 w-6 text-flx-cyan" />
                  <div>
                    <div className="font-semibold">Standort</div>
                    <div className="mt-1 text-slate-700">Deutschland, je nach Projekt auch vor Ort</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-slate-100 p-5">
                <p className="font-medium">Hilfreich ist:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {["Was nervt dich aktuell?", "Wer nutzt die Lösung später?", "Gibt es schon Excel, Papierlisten oder Vorlagen?"].map(
                    (item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-flx-cyan" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div id="kontakt-anfrage" className="flx-angle-card bg-white p-7 shadow-lg shadow-slate-900/10">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <PencilLine className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Nachricht senden</h2>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    Fülle das Formular aus. Du bekommst eine verständliche Antwort ohne Fachchinesisch.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Fragen</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Kurz geklärt</h2>
          </div>

          <div className="grid items-start gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="flx-angle-card self-start bg-white p-6 text-slate-950 shadow-lg shadow-black/20">
                <details>
                  <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
                  <p className="mt-3 leading-relaxed text-slate-700">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
