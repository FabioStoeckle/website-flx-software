import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/brand/ProductCard";

export const metadata: Metadata = {
  title: "Produkte | FLX-Software",
  description: "Eigenständige FLX-Produkte: Apps, Websites und digitale Lösungen. Schnell auffindbar – direkt nutzbar.",
};

export default function ProduktePage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Produkte</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            FLX-Software als Dachmarke für eigene Apps, Websites und digitale Tools. Produkte sind eigenständig – und lassen sich bei Bedarf erweitern.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                Projekt anfragen
                <ArrowRight className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
            <Link href="/leistungen">
              <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                Leistungen ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

