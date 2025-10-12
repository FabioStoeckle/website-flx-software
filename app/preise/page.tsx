import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CheckCircle2, ArrowRight, Clock, Users, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Preisstrukturen für App-Entwicklung, Automation und Maintenance. Budget-Spannen und Pakete im Überblick.",
};

export default function PreisePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Transparente Preise
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light">
            Keine versteckten Kosten. Klare Budget-Spannen. 
            Was du bekommst, was es kostet.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Discovery Sprint */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">Discovery Sprint</h3>
                <p className="text-gray-400 text-sm">1-2 Wochen</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">5.000€</span>
                  <span className="text-gray-400 ml-2">ab</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Requirements-Workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Wireframes & Prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Technologie-Stack</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Projektplan & Timeline</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  Discovery starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* MVP Development */}
            <div className="glass rounded-2xl p-8 border-2 border-cyan-400/50">
              <div className="mb-6">
                <div className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Beliebt
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">MVP Development</h3>
                <p className="text-gray-400 text-sm">4-6 Wochen</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">15.000€</span>
                  <span className="text-gray-400 ml-2">ab</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Core-Features entwickeln</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Responsive Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Deployment & Hosting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">30 Tage Support</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  MVP starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Maintenance */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">Care & Maintenance</h3>
                <p className="text-gray-400 text-sm">Monatlich</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">2.500€</span>
                  <span className="text-gray-400 ml-2">/Monat</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Security Updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Bugfixes & Optimierung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Monitoring & Backup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">2-4 neue Features</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  Maintenance starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Wie läuft die Abrechnung?
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Transparent. Fair. Ohne Überraschungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">50% Start</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bei Projektstart. Sichere Planung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">40% Meilenstein</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bei MVP-Fertigstellung. 
                Testen & Feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">10% Launch</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bei Go-Live. 
                Alles funktioniert.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">30 Tage Garantie</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kostenlose Nachbesserungen. 
                Keine Risiken.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Häufige Fragen
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Alles, was du über Preise wissen musst.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Gibt es Wartungsverträge?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ja. Care & Maintenance startet ab 2.500€/Monat. 
                Inklusive Updates, Monitoring und 2-4 neue Features pro Monat.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Was kostet eine App-Entwicklung?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                MVP-Entwicklung startet bei 15.000€ für 4-6 Wochen. 
                Komplexere Apps mit vielen Features können 25.000-50.000€ kosten.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Wie läuft die Abrechnung?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                50% bei Start, 40% bei MVP-Fertigstellung, 10% bei Go-Live. 
                Keine versteckten Kosten, alles transparent.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Gibt es Nachbesserungen?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ja. 30 Tage kostenlose Garantie nach Go-Live. 
                Bugs werden kostenlos behoben, neue Features nach Aufwand.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Noch Fragen?
          </h2>
          <p className="mb-12 text-xl text-gray-400 font-light">
            Kostenlose Erstberatung. 30 Min. Auf den Punkt.
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
