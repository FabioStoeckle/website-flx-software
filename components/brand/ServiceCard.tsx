import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center">
          <div className="text-flx-cyan font-mono font-semibold">FLX</div>
        </div>
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
    </div>
  );
}

