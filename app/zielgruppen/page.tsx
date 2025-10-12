import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ArrowRight, Wrench, Rocket, Building2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Zielgruppen",
  description:
    "Spezifische Lösungen für Handwerksbetriebe, Startups und etablierte Unternehmen. Maßgeschneiderte Digitalisierung.",
};

export default function ZielgruppenPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Für wen wir arbeiten
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light">
            Drei Zielgruppen. Ein Ziel: Software, die wirklich genutzt wird.
          </p>
        </div>
      </Section>

      {/* Zielgruppen */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20">
            {/* Handwerksbetriebe */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h2 className="text-4xl font-light text-white">Handwerksbetriebe</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                  <p>
                    <span className="text-cyan-400 font-medium">Problem:</span> Zettelwirtschaft, 
                    Excel-Chaos, vergessene Termine. Manuelle Prozesse kosten Zeit und Geld.
                  </p>
                  <p>
                    <span className="text-cyan-400 font-medium">Lösung:</span> Von Excel zu App in 30 Tagen. 
                    QR-Codes, Push-Notifications, mobile Check-in/out.
                  </p>
                  <p>
                    <span className="text-cyan-400 font-medium">Ergebnis:</span> 30% weniger Aufwand, 
                    40% mehr Aufträge durch professionelle Präsentation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">
                    Geräteverwaltung
                  </span>
                  <span className="text-sm bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">
                    TÜV-Reminder
                  </span>
                  <span className="text-sm bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">
                    Angebotserstellung
                  </span>
                  <span className="text-sm bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">
                    Kundenportal
                  </span>
                </div>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-medium text-white mb-4">Typisches Projekt</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-cyan-400">1</span>
                    </div>
                    <span className="text-gray-300">Discovery Sprint (1 Woche)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-cyan-400">2</span>
                    </div>
                    <span className="text-gray-300">MVP-Entwicklung (4 Wochen)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-cyan-400">3</span>
                    </div>
                    <span className="text-gray-300">Go-Live & Training (1 Woche)</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Budget:</span> 15.000-25.000€
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Timeline:</span> 6 Wochen
                  </p>
                </div>
              </div>
            </div>

            {/* Startups */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-blue-400" />
                  </div>
                  <h2 className="text-4xl font-light text-white">Startups</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                  <p>
                    <span className="text-blue-400 font-medium">Problem:</span> Schnell MVP brauchen, 
                    aber keine Zeit für komplexe Entwicklung. Budget ist begrenzt.
                  </p>
                  <p>
                    <span className="text-blue-400 font-medium">Lösung:</span> MVP in 4-6 Wochen. 
                    Focus auf Core-Features, schnelle Iterationen.
                  </p>
                  <p>
                    <span className="text-blue-400 font-medium">Ergebnis:</span> Schnell am Markt, 
                    echte Nutzer-Feedback, skalierbare Basis.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    MVP-Entwicklung
                  </span>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    User Testing
                  </span>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    Iteration
                  </span>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    Scaling
                  </span>
                </div>
              </div>
              <div className="lg:order-1 glass rounded-2xl p-8">
                <h3 className="text-xl font-medium text-white mb-4">Typisches Projekt</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-400">1</span>
                    </div>
                    <span className="text-gray-300">Sprint Planning (3 Tage)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-400">2</span>
                    </div>
                    <span className="text-gray-300">MVP-Entwicklung (4 Wochen)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-400">3</span>
                    </div>
                    <span className="text-gray-300">Launch & Feedback (1 Woche)</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Budget:</span> 10.000-20.000€
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Timeline:</span> 5 Wochen
                  </p>
                </div>
              </div>
            </div>

            {/* Etablierte Unternehmen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-purple-400" />
                  </div>
                  <h2 className="text-4xl font-light text-white">Etablierte Unternehmen</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                  <p>
                    <span className="text-purple-400 font-medium">Problem:</span> Legacy-Systeme, 
                    veraltete Tools, interne Prozesse digitalisieren.
                  </p>
                  <p>
                    <span className="text-purple-400 font-medium">Lösung:</span> Moderne Web-Tools, 
                    API-Integration, Workflow-Automation.
                  </p>
                  <p>
                    <span className="text-purple-400 font-medium">Ergebnis:</span> Effizientere Prozesse, 
                    bessere Datenqualität, zufriedenere Mitarbeiter.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    Legacy-Modernisierung
                  </span>
                  <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    API-Integration
                  </span>
                  <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    Workflow-Automation
                  </span>
                  <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    Data Migration
                  </span>
                </div>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-medium text-white mb-4">Typisches Projekt</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-400">1</span>
                    </div>
                    <span className="text-gray-300">Analyse & Planning (2 Wochen)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-400">2</span>
                    </div>
                    <span className="text-gray-300">Entwicklung (8-12 Wochen)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-400">3</span>
                    </div>
                    <span className="text-gray-300">Migration & Training (2 Wochen)</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Budget:</span> 25.000-75.000€
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Timeline:</span> 12-16 Wochen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Welche Zielgruppe bist du?
          </h2>
          <p className="mb-12 text-xl text-gray-400 font-light">
            Kostenlose Erstberatung. Wir finden die richtige Lösung für dein Projekt.
          </p>
          <Link href="/kontakt">
            <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
              Termin buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </>
  );
}
