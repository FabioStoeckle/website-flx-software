import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import customersData from "@/data/customers.json";

type Customer = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  features: string[];
};

type ReferenzPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return customersData.map((customer) => ({ slug: customer.slug }));
}

export async function generateMetadata({ params }: ReferenzPageProps): Promise<Metadata> {
  const project = customersData.find((c) => c.slug === params.slug);
  if (!project) return { title: "Projekt nicht gefunden" };

  return {
    title: project.name,
    description: project.summary,
  };
}

export default function ReferenzPage({ params }: ReferenzPageProps) {
  const project = customersData.find((c) => c.slug === params.slug) as Customer | undefined;
  if (!project) notFound();

  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Zurück
          </Link>

          <div className="mt-8">
            <div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-sm text-gray-300">
              {project.industry}
            </div>
            <h1 className="mt-4 text-5xl font-light tracking-tight text-white">{project.name}</h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">{project.summary}</p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-medium text-white">Problem</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">{project.problem}</p>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-medium text-white">Lösung</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">{project.solution}</p>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-medium text-white">Ergebnis</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-8 glass rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-medium text-white">Was umgesetzt wurde</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
            <h3 className="text-3xl font-light text-white">Ähnliches Projekt geplant?</h3>
            <p className="mt-3 text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Wir helfen dir, eine digitale Lösung aufzubauen, die im Alltag genutzt wird: klar, pragmatisch und wartbar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white smooth-transition">
                  Projekt anfragen
                  <ArrowRight className="ml-2 inline-block h-5 w-5" />
                </button>
              </Link>
              <Link href="/produkte">
                <button className="text-gray-400 hover:text-white transition-colors px-2 py-2 text-lg font-medium">
                  Erst Produkte ansehen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

