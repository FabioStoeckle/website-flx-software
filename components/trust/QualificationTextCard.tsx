import { FileCheck } from "lucide-react";

type QualificationTextCardProps = {
  status: string;
  title: string;
  hint?: string;
  description: string;
};

export function QualificationTextCard({ status, title, hint, description }: QualificationTextCardProps) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-7 h-full">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/20 flex items-center justify-center">
            <FileCheck className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <div className="text-sm text-gray-400">{status}</div>
            <h3 className="mt-1 text-2xl font-medium text-white">{title}</h3>
            {hint ? <div className="mt-2 text-sm text-cyan-300">{hint}</div> : null}
          </div>
        </div>
      </div>

      <p className="mt-5 text-gray-400 leading-relaxed">{description}</p>

      <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-gray-400 leading-relaxed">
        Relevanz für FLX-Software: Dieses Know-how fließt direkt in unsere Projekte ein – als solide Grundlage
        für Qualität, Umsetzung und bewusste Entscheidungen.
      </div>
    </div>
  );
}

