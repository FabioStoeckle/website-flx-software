import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-flx-cyan/40">
      <div className="flex items-start justify-between gap-4">
        <Badge variant="accent">{product.category}</Badge>
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

      <div className="mt-6 flex items-center justify-between gap-4">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="raycast-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition"
        >
          Öffnen
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

