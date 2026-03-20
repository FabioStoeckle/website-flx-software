import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Boxes, FileSpreadsheet, Gamepad2, LayoutGrid, ShieldCheck } from "lucide-react";
import { products, type Product, type ProductViewKey } from "@/data/products";
import { Badge } from "@/components/ui/badge";

function getViewIcon(key: ProductViewKey) {
  switch (key) {
    case "workflow":
      return FileSpreadsheet;
    case "dashboard":
      return LayoutGrid;
    case "export":
      return ShieldCheck;
    case "community":
      return Gamepad2;
    case "automation":
      return Boxes;
    case "security":
      return ShieldCheck;
    default:
      return LayoutGrid;
  }
}

function getProductIcon(product: Product) {
  switch (product.slug) {
    case "angebot-fix":
      return FileSpreadsheet;
    case "rivals11":
      return Gamepad2;
    default:
      return LayoutGrid;
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Produkt | FLX-Software",
      description: "FLX-Software Produkte im Überblick.",
    };
  }

  return {
    title: `${product.name} | FLX-Software`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const ProductIcon = getProductIcon(product);
  const pageUrl = `https://flx-software.de/produkte/${product.slug}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "FLX-Software",
      url: "https://flx-software.de",
    },
    category: product.category,
    url: pageUrl,
  };

  return (
    <>
      <section className="relative pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center">
                  <ProductIcon className="text-flx-cyan" size={24} aria-hidden="true" />
                </div>
                <Badge variant="accent">{product.category}</Badge>
              </div>

              <h1 className="mt-5 text-5xl sm:text-6xl font-light tracking-tight text-white">{product.name}</h1>
              <p className="mt-5 text-lg text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="w-full max-w-xl lg:w-auto">
              <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
                <h2 className="text-xl font-medium text-white">Nächster Schritt</h2>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  Du willst dieses Produkt für deinen Kontext nutzen oder gezielt erweitern? Dann schreib uns kurz
                  deine Idee.
                </p>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                  <Link href="/kontakt#kontakt-anfrage" className="raycast-button inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-white smooth-transition">
                    Projekt anfragen
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="raycast-button inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-white/90 smooth-transition"
                  >
                    Extern ansehen
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 p-8">
                <h2 className="text-3xl font-light text-white">Kurzüberblick</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {product.benefits.slice(0, 4).map((b) => (
                    <div key={b} className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <div className="text-sm text-gray-400">Nutzen</div>
                      <div className="mt-2 text-white font-medium leading-relaxed">{b}</div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-2xl font-medium text-white">Features</h3>
                <ul className="mt-4 space-y-3 text-gray-300">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass rounded-2xl border border-white/10 p-8 mb-8">
                <h3 className="text-2xl font-medium text-white">Vorteile</h3>
                <ul className="mt-4 space-y-3 text-gray-300">
                  {product.vorteile.map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                      <span className="leading-relaxed">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-medium text-white">Typische Zielgruppen</h3>
                <ul className="mt-4 space-y-3 text-gray-300">
                  {product.zielgruppen.map((z) => (
                    <li key={z} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
                      <span className="leading-relaxed">{z}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-light text-white">Beispiel-Ansichten</h2>
            <p className="mt-3 text-gray-400 leading-relaxed max-w-3xl">
              Keine leeren Mockups: kleine “UI-Bausteine” als Orientierung, damit du schnell siehst, wie das Produkt denkt.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
              {product.views.map((view) => {
                const ViewIcon = getViewIcon(view.key);
                return (
                  <div key={view.title} className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center">
                        <ViewIcon className="text-flx-cyan" size={20} aria-hidden="true" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="text-white font-medium text-lg">{view.title}</div>
                      <p className="mt-3 text-gray-400 leading-relaxed">{view.description}</p>
                    </div>

                    <div className="mt-auto pt-6 text-sm text-gray-500">Beispielansicht</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}

