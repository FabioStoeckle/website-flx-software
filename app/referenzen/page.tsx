import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import customersData from "@/data/customers.json";
import { ProjectCard } from "@/components/brand/ProjectCard";

export const metadata: Metadata = {
  title: "Referenzen | FLX-Software",
  description:
    "Ausgewählte Projekte von FLX-Software: Problem → Umsetzung → Ergebnis. Als Beleg für echte digitale Lösungen.",
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-white">Referenzen</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-400 leading-relaxed">
            Projekte, die zeigen, wie FLX-Software digitale Lösungen in der Praxis umsetzt: klare Strukturen,
            saubere Umsetzung und messbarer Nutzen.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customersData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

