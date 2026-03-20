import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";
import { FileSpreadsheet, Gamepad2, LayoutGrid } from "lucide-react";

function ProductIcon({ product }: { product: Product }) {
  // Ohne echte Screenshots nutzen wir kleine, präzise UI-Icons als “Thumbnail” im Card-Kontext.
  // Das bleibt auch bei späteren echten Screenshots sauber austauschbar.
  const key = product.slug;

  const Icon = (() => {
    switch (key) {
      case "angebot-fix":
      case "rechnung-fix":
        return FileSpreadsheet;
      case "rivals11":
        return Gamepad2;
      default:
        return LayoutGrid;
    }
  })();

  return (
    <div className="w-12 h-12 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center">
      <Icon className="text-flx-cyan" size={22} aria-hidden="true" />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-flx-cyan/40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <ProductIcon product={product} />
          <Badge variant="accent">{product.category}</Badge>
        </div>
        <div className="text-right text-sm text-gray-400">Produkt</div>
      </div>

      <h3 className="mt-4 text-2xl font-medium text-white">{product.name}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{product.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-gray-300">
        {product.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 flex items-center justify-between gap-4">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="raycast-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition focus-visible:outline-none"
        >
          Öffnen
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

