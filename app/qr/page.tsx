import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { CheckCircle2, QrCode } from "lucide-react";

export const metadata: Metadata = {
  title: "QR-Code Designer | FLX-Software",
  description:
    "QR-Codes visuell gestalten: eigenes Logo einbinden, Farben und Stil anpassen, sofort als PNG oder SVG exportieren. Kostenlos, ohne Anmeldung.",
};

const QRDesigner = dynamic(
  () => import("@/components/qr/QRDesigner").then((m) => m.QRDesigner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 items-center justify-center text-sm text-slate-500">
        Lädt...
      </div>
    ),
  },
);

export default function QRPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              QR-Codes erstellen, gestalten und direkt herunterladen.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              QR-Code Designer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Eigenes Logo einbinden, Farben und Stil anpassen, sofort als PNG oder SVG exportieren. Kostenlos und ohne
              Anmeldung.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <QrCode className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Gut für Alltag und Druck</p>
                  <h2 className="text-2xl font-semibold">Schnell exportiert</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {["Logo einfügen", "Farben anpassen", "PNG oder SVG exportieren"].map((item) => (
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
          <QRDesigner />
        </div>
      </section>
    </>
  );
}
