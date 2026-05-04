import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | FLX-Software",
  description:
    "Schreib Fabio oder Fabian direkt an. Kein Ticket-System, keine Warteschleife. Wir antworten persönlich und in der Regel noch am selben Tag.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Schreib uns</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Fabio oder Fabian lesen deine Nachricht und antworten persönlich. Kein Support-Ticket, keine Warteschleife.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-medium text-white">Direkt erreichen</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-flx-cyan mt-0.5" />
                    <div>
                      <div className="text-white font-medium">E-Mail</div>
                      <a
                        href="mailto:info@flx-software.de"
                        className="mt-1 block text-gray-400 hover:text-white transition-colors"
                      >
                        info@flx-software.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-flx-cyan mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Standort</div>
                      <div className="mt-1 text-gray-400">Deutschland (Remote & vor Ort)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                  <p className="text-gray-400 leading-relaxed">
                    Du musst uns nicht alles auf einmal erklären. Ein paar Sätze reichen völlig.
                  </p>
                  <div className="mt-6">
                    <Link href="/#produkte">
                      <button className="text-gray-400 hover:text-white transition-colors font-medium">
                        Erst unsere Projekte ansehen →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h2 className="mb-2 text-2xl font-medium text-white">Nachricht schreiben</h2>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  Einfach kurz beschreiben was du brauchst. Wir melden uns in der Regel noch am selben Tag.
                </p>

                <div id="kontakt-anfrage">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white">Häufige Fragen</h2>
            <p className="mt-3 text-lg text-gray-400 leading-relaxed max-w-3xl">
              Was wir oft gefragt werden bevor jemand schreibt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Wie läuft das ab wenn ich euch beauftrage?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Meistens so: kurzes Gespräch, wir klären was du brauchst und was es kosten soll, dann fangen wir an. Kein wochenlanges Hin und Her bevor auch nur eine Zeile Code geschrieben wird.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">Was kostet ein Projekt?</summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Das kommt auf den Umfang an. Kleinere Sachen rechnen wir pauschal ab. Bei größeren Projekten einigen wir uns vorher auf ein Budget und halten uns daran. Wir sagen dir ehrlich was realistisch ist.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Ich habe schon eine Website. Könnt ihr die weiterentwickeln?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Ja, gerne. Wenn du etwas hast das ausgebaut oder verbessert werden soll schauen wir es uns an und sagen dir ehrlich was möglich ist und was es bringt.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Wie schnell bekomme ich eine Antwort?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  In der Regel noch am selben Tag. Wenn es mal etwas länger dauert kriegst du zumindest kurz Bescheid damit du nicht in der Luft hängst.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

