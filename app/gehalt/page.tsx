import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Calculator, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Brutto Netto Rechner 2026 | FLX-Software",
  description:
    "Präziser Brutto-Netto-Rechner für Deutschland 2026. Steuerklassen I bis VI, alle Bundesländer, Kirchensteuer, PKV/GKV, Kinder. Monat- und Jahresübersicht.",
};

const GehaltRechner = dynamic(
  () => import("@/components/gehalt/GehaltRechner").then((m) => m.GehaltRechner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 items-center justify-center text-sm text-slate-500">
        Lädt...
      </div>
    ),
  },
);

export default function GehaltPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              Schnell sehen, was vom Brutto übrig bleibt.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Brutto Netto Rechner
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Alle relevanten Angaben für Deutschland 2026. Steuerklasse, Bundesland, Kirchensteuer, Krankenversicherung
              und Kinder auf einen Blick.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Monat und Jahr</p>
                  <h2 className="text-2xl font-semibold">Klar aufgeschlüsselt</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {["Steuerklasse wählen", "Bundesland angeben", "Netto sofort sehen"].map((item) => (
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

      <section className="relative overflow-hidden bg-white py-12 pb-24 text-slate-950 sm:py-16">
        <div className="absolute left-[-10%] top-10 h-40 w-[46%] -skew-x-12 bg-flx-cyan/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <GehaltRechner />
        </div>
      </section>
    </>
  );
}
