import { FileCheck } from "lucide-react";

type QualificationTextCardProps = {
  status: string;
  title: string;
  hint?: string;
  description: string;
  relevance?: string;
  variant?: "dark" | "light";
};

export function QualificationTextCard({
  status,
  title,
  hint,
  description,
  relevance,
  variant = "dark",
}: QualificationTextCardProps) {
  const isLight = variant === "light";

  return (
    <div
      className={
        isLight
          ? "flx-angle-card flex h-full flex-col bg-white p-7 shadow-lg shadow-slate-900/10"
          : "glass flex h-full flex-col rounded-lg border border-white/10 p-7"
      }
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/15 ring-1 ring-flx-cyan/20">
            <FileCheck className="h-6 w-6 text-flx-cyan" />
          </div>
          <div>
            <div className={isLight ? "text-sm text-slate-500" : "text-sm text-gray-400"}>{status}</div>
            <h3
              className={
                isLight ? "mt-1 text-2xl font-semibold text-slate-950" : "mt-1 text-2xl font-medium text-white"
              }
            >
              {title}
            </h3>
            {hint ? <div className="mt-2 text-sm text-flx-cyan">{hint}</div> : null}
          </div>
        </div>
      </div>

      <p
        className={
          isLight
            ? "mt-5 break-words leading-relaxed text-slate-700"
            : "mt-5 break-words leading-relaxed text-gray-400"
        }
      >
        {description}
      </p>

      <div
        className={
          isLight
            ? "mt-auto rounded-lg border border-slate-200 bg-slate-100 p-4 text-sm leading-relaxed text-slate-700"
            : "mt-auto rounded-lg border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-gray-400"
        }
      >
        {relevance ??
          "Relevanz für FLX-Software: Dieses Wissen fließt direkt in unsere Projekte ein und hilft bei sauberen Entscheidungen."}
      </div>
    </div>
  );
}
