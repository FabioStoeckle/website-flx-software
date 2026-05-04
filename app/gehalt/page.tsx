import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Brutto Netto Rechner 2025 | FLX-Software",
  description:
    "Präziser Brutto-Netto-Rechner für Deutschland 2025. Steuerklassen I bis VI, alle Bundesländer, Kirchensteuer, PKV/GKV, Kinder. Monat- und Jahresübersicht.",
};

const GehaltRechner = dynamic(
  () => import("@/components/gehalt/GehaltRechner").then((m) => m.GehaltRechner),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center text-gray-500 text-sm">
        Lädt...
      </div>
    ),
  },
);

export default function GehaltPage() {
  return (
    <>
      <section className="relative pt-32 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">
            Brutto Netto Rechner
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Alle relevanten Parameter für Deutschland 2025. Steuerklassen I bis VI, alle Bundesländer, Kirchensteuer, PKV und GKV, Kinder. Monat und Jahr auf einen Blick.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <GehaltRechner />
        </div>
      </section>
    </>
  );
}
