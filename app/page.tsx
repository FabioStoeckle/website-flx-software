import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { ProductCard } from "@/components/brand/ProductCard";
import { ServiceCard } from "@/components/brand/ServiceCard";

export const metadata: Metadata = {
  title: "FLX-Software | Websites und Web-Apps von Fabio und Fabian",
  description:
    "Fabio Stöckle und Fabian Pfeiffer entwickeln Websites, Web-Apps und digitale Tools. Schnell, persönlich und ohne Agentur-Overhead.",
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
              <span className="block">Wir bauen es einfach.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
              Fabio und Fabian entwickeln Websites, Web-Apps und digitale Tools. Kein Agentur-Overhead, keine ewigen Planungsrunden. Vom ersten Gespräch bis zum Go-Live so schnell wie möglich.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/#produkte">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                  Unsere Projekte ansehen
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
                <span>Zwei Ansprechpartner statt anonymes Ticket-System</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-flx-cyan/20 rounded-full flex items-center justify-center">
                  <span className="inline-block w-2.5 h-2.5 bg-flx-cyan rounded-full" />
                </div>
                <span>Schnell live ohne wochenlange Konzeptionsrunden</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-flx-cyan/20 rounded-full flex items-center justify-center">
                  <span className="inline-block w-2.5 h-2.5 bg-flx-cyan rounded-full" />
                </div>
                <span>Persönlicher Support vor Ort wenn nötig</span>
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
              <h2 className="text-2xl font-medium text-white">Was wir gebaut haben</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                FLX-Suite, Rivals11, Taktikfeld, ein Brutto-Netto-Rechner und ein QR-Designer. Fünf eigene Projekte die live sind und genutzt werden. Kein Demo, keine Mockups.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8 h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white">Wie wir Projekte angehen</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Kein wochenlanges Konzeptionieren. Wir klären kurz was du brauchst, setzen es um und gehen live. So unkompliziert wie möglich.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-8 h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white">Was du davon hast</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Wir haben keine Mitarbeiter und kein Büro. Das bedeutet für dich: niedrigere Kosten, kurze Wege und direkte Ansprechpartner.
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
              <h2 className="text-4xl sm:text-5xl font-light text-white">Unsere Projekte</h2>
              <p className="mt-3 text-gray-400 max-w-2xl leading-relaxed">
                Fünf eigene Projekte die wir selbst entwickelt haben und betreiben. Alle kostenlos nutzbar.
              </p>
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-light text-white">Was wir für dich bauen</h2>
            <p className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Neben unseren eigenen Produkten nehmen wir auch externe Projekte an. Websites, Web-Apps, Tools. Sag uns was du brauchst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {featuredServices.map((service) => (
              <ServiceCard key={service.key} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white">
            Hast du ein Projekt?
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Kein langes Briefing nötig. Schreib kurz was du dir vorstellst. Fabio oder Fabian melden sich persönlich bei dir.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Jetzt melden
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/#produkte">
              <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                Erst unsere Projekte ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

