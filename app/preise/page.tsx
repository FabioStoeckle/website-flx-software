import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungsmodelle | FLX-Software",
  description:
    "Projektkosten transparent und planbar. Wir sagen dir vor dem Start ehrlich, was sinnvoll ist.",
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
            Keine Mogelpreise. Wir klären gemeinsam, was du brauchst, was du nicht brauchst und welcher Aufwand realistisch ist.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/#leistungen">
              <button className="px-2 py-2 text-lg font-medium text-gray-400 transition-colors hover:text-white">
                Leistungen ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                label: "Festpreis",
                title: "Wenn der Umfang klar ist",
                text: "Ideal für eine Website oder ein klar abgegrenztes kleines Programm. Du bekommst vorher einen festen Rahmen.",
                bullets: ["Klarer Umfang", "Planbarer Preis"],
              },
              {
                label: "Schrittweise",
                title: "Wenn wir gemeinsam starten",
                text: "Gut, wenn die Idee noch wachsen darf. Wir bauen zuerst den wichtigsten Teil und entscheiden dann weiter.",
                bullets: ["Frühe Zwischenstände", "Sinnvoll weiterbauen"],
              },
              {
                label: "Betreuung",
                title: "Nach dem Start",
                text: "Auf Wunsch bleiben wir Ansprechpartner für Anpassungen, Korrekturen und neue Ideen.",
                bullets: ["Schnelle Hilfe", "Passende Erweiterungen"],
              },
            ].map((item) => (
              <div key={item.label} className="glass rounded-lg border border-white/10 p-8">
                <div className="font-mono text-3xl font-semibold text-flx-cyan">{item.label}</div>
                <h2 className="mt-3 text-2xl font-medium text-white">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-400">{item.text}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-flx-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
