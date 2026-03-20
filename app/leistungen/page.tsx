import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/brand/ServiceCard";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Leistungen | FLX-Software",
  description:
    "Websites, Web-Apps, PWAs und individuelle Tools. FLX-Software baut digitale Lösungen pragmatisch, schnell und wartbar.",
};

export default function LeistungenPage() {
  const serviceSchema = services.map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: "FLX-Software",
      url: "https://flx-software.de",
    },
  }));

  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Leistungen</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            FLX-Software entwickelt digitale Lösungen für Unternehmen und Teams: von markenstarken Websites bis zu PWAs und
            individuellen Tools. Klarer Scope. Saubere Umsetzung. Wartbare Ergebnisse.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/produkte">
              <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                Erst Produkte ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white">Was wir liefern</h2>
            <p className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Keine austauschbaren Agentur-Floskeln. Stattdessen: konkrete Deliverables – und eine Zusammenarbeit, die du
              spürst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((service) => (
              <ServiceCard key={service.key} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white">So läuft ein Projekt ab</h2>
            <p className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Planbar, pragmatisch, iterativ. Du weißt jederzeit, was als Nächstes passiert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">01</div>
              <h3 className="mt-3 text-xl font-medium text-white">Kickoff & Scope</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Ziele, Constraints und Deliverables – damit das Projekt von Anfang an klar ist.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">02</div>
              <h3 className="mt-3 text-xl font-medium text-white">Design & Setup</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                UI-Grundlagen, Daten-Setup und technische Basis, die später nicht bremst.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">03</div>
              <h3 className="mt-3 text-xl font-medium text-white">Umsetzung in Sprints</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Kurze Iterationen mit funktionierenden Zwischenständen statt monatelanger Wartezeit.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">04</div>
              <h3 className="mt-3 text-xl font-medium text-white">Launch & Weiterbau</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Go-live, Stabilität und gezielte Verbesserungen – ohne Überraschungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white">Bereit für den nächsten Schritt?</h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Sag uns kurz, was du bauen willst. Wir melden uns mit einem pragmatischen Vorschlag für Vorgehen und nächsten
            Schritten.
          </p>
          <div className="mt-10">
            <Link href="/kontakt">
              <button className="raycast-button px-10 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projektanfrage (Ziel für Sticky-CTA) */}
      <section id="kontakt-anfrage" className="py-20 sm:py-28 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl font-light text-white">Projekt anfragen</h2>
              <p className="mt-3 text-lg text-gray-400 leading-relaxed">
                Kurz den Scope nennen. Wir melden uns mit einem pragmatischen Vorschlag für nächste Schritte.
              </p>
              <div className="mt-8 glass rounded-2xl border border-white/10 p-6 h-full flex flex-col">
                <div className="text-sm text-gray-400 leading-relaxed">
                  Du bekommst von uns: klaren Ablauf, realistische Einschätzung und ein umsetzbares Konzept.
                </div>
                <div className="mt-auto pt-4 text-xs text-gray-500">
                  Tipp: Zeitrahmen + “Fertig heißt…” hilft.
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h3 className="mb-2 text-2xl font-medium text-white">Kurzformular</h3>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Name, E-Mail und Projektidee – fertig.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": serviceSchema,
          }),
        }}
      />
    </>
  );
}

