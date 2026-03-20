import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Customer = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  features: string[];
};

export function ProjectCard({ project, className = "" }: { project: Customer; className?: string }) {
  return (
    <div className={`glass rounded-2xl border border-white/10 p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/40 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <Badge variant="secondary">{project.industry}</Badge>
        <div className="text-right text-sm text-gray-400">Projekt</div>
      </div>

      <h3 className="mt-4 text-2xl font-medium text-white">{project.name}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.features.slice(0, 3).map((f) => (
          <span key={f} className="text-xs bg-cyan-400/15 text-cyan-200 px-3 py-1 rounded-full ring-1 ring-cyan-400/20">
            {f}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Link
          href={`/referenzen/${project.slug}`}
          className="raycast-button inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white smooth-transition"
        >
          Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

