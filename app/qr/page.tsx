import type { Metadata } from "next";
import dynamic from "next/dynamic";

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
      <div className="h-96 flex items-center justify-center text-gray-500 text-sm">
        Lädt...
      </div>
    ),
  },
);

export default function QRPage() {
  return (
    <>
      <section className="relative pt-32 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">
            QR-Code Designer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Eigenes Logo einbinden, Farben und Stil anpassen, sofort als PNG oder SVG exportieren. Kostenlos, ohne Anmeldung.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <QRDesigner />
        </div>
      </section>
    </>
  );
}
