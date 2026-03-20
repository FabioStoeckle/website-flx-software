import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { ProductCard } from "@/components/brand/ProductCard";
import { ServiceCard } from "@/components/brand/ServiceCard";

export const metadata: Metadata = {
  title: "FLX-Software.de | Digitale Produkte & Weblösungen",
  description:
    "FLX-Software entwickelt digitale Produkte, PWAs und Websites für Unternehmen. Produkte ansehen oder Projekt anfragen – klar, schnell, wartbar.",
};

export default function HomePage() {
  const featuredProducts = products;
  const featuredServices = services;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white">
              <span className="gradient-text font-medium block">FLX-Software</span>
              <span className="block">Digitale Produkte. Weblösungen. Klartext.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
              FLX-Software entwickelt digitale Produkte, PWAs und Websites mit echtem Praxisnutzen.
              Von fertigen Lösungen bis zu individueller Entwicklung: pragmatisch, modern und wartbar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/#produkte">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                  Produkte ansehen
                  <ArrowRight className="ml-2 inline-block h-5 w-5" />
                </button>
              </Link>
              <Link href="/kontakt">
                <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                  Projekt anfragen
                </button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-flx-cyan/20 rounded-full flex items-center justify-center">
                  <span className="inline-block w-2.5 h-2.5 bg-flx-cyan rounded-full" />
                </div>
                <span>Produkte & Individualentwicklung aus einer Hand</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-flx-cyan/20 rounded-full flex items-center justify-center">
                  <span className="inline-block w-2.5 h-2.5 bg-flx-cyan rounded-full" />
                </div>
                <span>Technisch sauber, schnell live, wartbar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-flx-cyan/20 rounded-full flex items-center justify-center">
                  <span className="inline-block w-2.5 h-2.5 bg-flx-cyan rounded-full" />
                </div>
                <span>Klare Kommunikation statt Buzzwords</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="glass rounded-2xl border border-white/10 p-8 h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white">Was FLX baut</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Digitale Produkte für Teams und Kunden: Apps, PWAs und Websites, die im Alltag funktionieren.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8 h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white">Wie wir arbeiten</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Pragmatismus zuerst: schnelle MVPs, saubere Architektur, klare Roadmaps und echte Iteration.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8 h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white">Warum es wirkt</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Verständliche UI, stabile Umsetzung und echte Deliverables – damit Software genutzt wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produkte */}
      <section id="produkte" className="py-16 sm:py-24 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light text-white">Produkte</h2>
              <p className="mt-3 text-gray-400 max-w-2xl leading-relaxed">
                Eigenständige Lösungen unter der Dachmarke FLX-Software. Schnell auffindbar – und sofort nutzbar.
              </p>
            </div>
            <Link href="/#produkte" className="hidden sm:inline-block">
              <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                Alle Produkte →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white">Leistungen</h2>
            <p className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              FLX-Software entwickelt nicht nur Produkte – wir bauen auch individuelle digitale Lösungen für reale Projekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {featuredServices.map((service) => (
              <ServiceCard key={service.key} service={service} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/#leistungen">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Leistungen im Detail
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white">
            Projektanfrage statt Bauchgefühl.
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Kurz beschreiben, was du brauchst. Wir antworten pragmatisch: Vorgehen, Aufwand und nächste Schritte.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/#produkte">
              <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                Erst Produkte ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

