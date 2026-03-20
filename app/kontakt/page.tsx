import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | FLX-Software",
  description:
    "Projekt anfragen oder Kontakt aufnehmen: FLX-Software meldet sich pragmatisch und schnell zurück. Einfach Formular ausfüllen.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Kontakt</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Projekt geplant? Fragen? Schreib uns kurz. Wir melden uns mit einem pragmatischen Vorschlag für die nächsten
            Schritte.
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
                    Wenn du magst: nenn kurz Ziel, Zeitrahmen und was du mit Fertig meinst.
                  </p>
                  <div className="mt-6">
                    <Link href="/produkte">
                      <button className="text-gray-400 hover:text-white transition-colors font-medium">
                        Oder erst Produkte ansehen →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h2 className="mb-2 text-2xl font-medium text-white">Nachricht senden</h2>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  Fülle das Formular aus. Wir antworten schnell und mit klaren nächsten Schritten.
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
            <h2 className="text-4xl sm:text-5xl font-light text-white">FAQ zu Projekten</h2>
            <p className="mt-3 text-lg text-gray-400 leading-relaxed max-w-3xl">
              Kurze Antworten auf typische Fragen, damit du schnell einschätzen kannst, ob es passt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Wie läuft eine Zusammenarbeit konkret ab?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Wir starten mit Kickoff & Scope, setzen danach Design & Setup auf, bauen in klaren Sprints und
                  bringen am Ende stabilen Betrieb. Du weißt jederzeit, was als Nächstes passiert.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">Wie wird der Preis geplant?</summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Wir schlagen ein passendes Leistungsmodell vor (Festpreis, Sprints oder Support) – abhängig von
                  Umfang, Ziel und Planbarkeit.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Arbeitet ihr auch mit bestehenden Lösungen?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Ja. Wir übernehmen Weiterentwicklung, stabilisieren Code und bauen gezielt neue Funktionen ein –
                  ohne das System unnötig zu verkomplizieren.
                </p>
              </details>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6">
              <details>
                <summary className="cursor-pointer text-white font-medium">
                  Wie schnell bekommt man eine Rückmeldung?
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Üblicherweise melden wir uns zeitnah. In der Antwort bekommst du einen konkreten Vorschlag für
                  nächste Schritte.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

