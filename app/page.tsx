import Link from "next/link";
import { Section } from "@/components/Section";
import { CustomerTeaser } from "@/components/CustomerTeaser";
import { ArrowRight, Sparkles, Zap, Code } from "lucide-react";
import customersData from "@/data/customers.json";

export default function HomePage() {
  const featuredCustomers = customersData.slice(0, 2);

  return (
    <>
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
              <span className="block">Software</span>
              <span className="block gradient-text font-medium">die arbeitet</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
              Apps und Tools, die Probleme lösen.<br />
              Schnell. Stabil. Wartbar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/kontakt">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
                  Projekt starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/leistungen">
                <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                  Services ansehen →
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* Services - Linear Style */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Was wir machen
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Drei Bereiche. Ein Ziel: Software, die funktioniert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Progressive Web Apps, React Native, PWAs. 
                Installierbar, offline-fähig, native Performance.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Workflows automatisieren, APIs orchestrieren, 
                AI integrieren. Von Webhooks bis LLM.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Maintenance</h3>
              <p className="text-gray-400 leading-relaxed">
                Updates, Bugfixes, Monitoring. 
                Care-Pakete für dauerhaften Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Raycast Style */}
      <section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Wie wir arbeiten
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Vier Schritte. Ein Ergebnis: Software, die arbeitet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Discovery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Requirements, Wireframes, Planung. 
                1–2 Wochen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">MVP</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Core-Features entwickeln, testen, deployen. 
                4–6 Wochen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Iteration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feedback einholen, Features nachschärfen. 
                2–4 Wochen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Care</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Updates, Monitoring, neue Features. 
                Dauerhaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References - Superhuman Style */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Was wir gemacht haben
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Echte Projekte. Echte Ergebnisse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredCustomers.map((customer) => (
              <div key={customer.slug} className="glass rounded-2xl p-8 smooth-hover">
                <div className="mb-4">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    {customer.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">{customer.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{customer.summary}</p>
                <p className="text-sm text-gray-500">{customer.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Linear Style */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
            Bereit?
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Lass uns reden. Kostenlos, unverbindlich, auf den Punkt.
          </p>
          <Link href="/kontakt">
            <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
              Projekt starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

