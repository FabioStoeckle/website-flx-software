import Link from "next/link";
import { ArrowRight, Code2, Laptop, Network, Sparkles, Wrench } from "lucide-react";
import type { Service } from "@/data/services";

function ServiceIcon({ service }: { service: Service }) {
  const Icon = (() => {
    switch (service.key) {
      case "websites":
        return Laptop;
      case "webapps":
        return Network;
      case "pwaps":
        return Sparkles;
      case "tools":
        return Wrench;
      case "maintenance":
        return Code2;
      default:
        return Laptop;
    }
  })();

  return (
    <div className="w-12 h-12 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center">
      <Icon className="text-flx-cyan" size={22} aria-hidden="true" />
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <ServiceIcon service={service} />
      </div>

      <h3 className="mt-4 text-2xl font-medium text-white">{service.title}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{service.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-gray-300">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-flx-cyan" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link href="/kontakt#kontakt-anfrage" className="raycast-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition focus-visible:outline-none">
          Projekt anfragen
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

