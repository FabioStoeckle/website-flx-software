import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungsmodelle | FLX-Software",
  description:
    "Projektkosten transparent und planbar: Festpreis für klaren Scope, Sprint-Modelle für iterative Entwicklung und Support nach Launch.",
};

export default function PreisePage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Leistungsmodelle</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Keine Mogelpreise. Wir planen die Kosten an deinem Scope – und geben dir vor Start einen klaren Rahmen für
            Vorgehen und Aufwand.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/#leistungen">
              <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                Leistungen ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl border border-white/10 p-8">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">Festpreis</div>
              <h2 className="mt-3 text-2xl font-medium text-white">Wenn der Scope klar ist</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Ideal für Websites und Landingpages mit definiertem Umfang – du bekommst einen planbaren Preis und einen
                konkreten Lieferzeitpunkt.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Sauberer Funktionsumfang & Deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Klarer Launch-Plan</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">Sprints</div>
              <h2 className="mt-3 text-2xl font-medium text-white">Wenn es iterativ wird</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Für Web-Apps, PWAs und Tools: kurze Iterationen, echte Zwischenstände, Feedback und gezielter Weiterbau.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Planbarkeit über Roadmap & Sprint-Ziele</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Transparente Ergebnisse statt Status-Theater</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <div className="text-flx-cyan font-mono text-3xl font-semibold">Support</div>
              <h2 className="mt-3 text-2xl font-medium text-white">Nach dem Launch</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Updates, Bugfixes, Performance und Security. Für Teams, die nicht “fertig” spielen, sondern langfristig arbeiten.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Wartung & gezielte Feature-Sprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                  <span>Stabilität & saubere Deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

