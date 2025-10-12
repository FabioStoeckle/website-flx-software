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
              <span className="block">Wir digitalisieren</span>
              <span className="block gradient-text font-medium">Handwerksbetriebe</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
              Apps und Automationen für Handwerk & Mittelstand.<br />
              <span className="text-cyan-400 font-medium">30% weniger Aufwand, 40% mehr Aufträge.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/kontakt">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
                  Kostenlose Erstberatung buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/leistungen">
                <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                  MVP in 6 Wochen starten →
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* What we do - Linear Style */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Von Excel zu App in 30 Tagen
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Drei Bereiche. Ein Ziel: Software, die wirklich genutzt wird.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">App-Entwicklung</h3>
              <p className="text-gray-400 leading-relaxed">
                PWAs, Webapps, mobile Tools. Installierbar, offline-fähig, 
                native Performance ohne App-Store.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Webtools</h3>
              <p className="text-gray-400 leading-relaxed">
                Kundenbereiche, Dashboards, Admin-Panels. 
                Mit Auth, Rollen, Datenexport – alles, was Unternehmen brauchen.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Automationen</h3>
              <p className="text-gray-400 leading-relaxed">
                KI-gestützte Abläufe, Webhooks, Workflows. 
                Manuelle Prozesse eliminieren, Zeit sparen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work - Raycast Style */}
      <section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Wie wir arbeiten
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Vier Schritte. Klar, ohne Buzzwords.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Analyse</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Verstehen, was wirklich gebraucht wird. 
                Keine Features, die keiner nutzt.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Entwicklung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Core-Features zuerst, schnell testbar. 
                4–6 Wochen bis zum ersten Nutzen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Umsetzung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Live gehen, echte Nutzer, echtes Feedback. 
                Anpassen, was nicht funktioniert.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Betreuung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Updates, Monitoring, neue Features. 
                Software wächst mit dem Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FLX - Superhuman Style */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Warum FLX
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Drei Argumente: Pragmatismus, Zuverlässigkeit, technische Exzellenz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Pragmatismus</h3>
              <p className="text-gray-400 leading-relaxed">
                Die beste Lösung ist die, die funktioniert. Nicht die eleganteste, 
                nicht die trendigste – die, die das Problem löst.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Zuverlässigkeit</h3>
              <p className="text-gray-400 leading-relaxed">
                Code, der heute funktioniert und morgen noch wartet werden kann. 
                Tests, Types, Dokumentation – keine Verhandlungssache.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Klartext</h3>
              <p className="text-gray-400 leading-relaxed">
                Keine Buzzwords, keine leeren Versprechen. Wir sagen, was geht, 
                was nicht geht und warum. Transparent, direkt, ehrlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Superhuman Style */}
      <section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Kunden vertrauen uns
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Echte Projekte. Echte Ergebnisse. Echte Zitate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredCustomers.map((customer) => (
              <div key={customer.slug} className="glass rounded-2xl p-8 smooth-hover">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    {customer.industry}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">{customer.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">"{customer.summary}"</p>
                <div className="border-l-2 border-cyan-400 pl-4 mb-4">
                  <p className="text-sm text-gray-300 italic">
                    "Die App hat unseren Arbeitsalltag komplett verändert. 
                    {customer.outcome}"
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Geschäftsführer {customer.name}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {customer.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Linear Style */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
            Jetzt digitales Projekt planen?
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Kostenlose Erstberatung. 30 Min. Auf den Punkt. Unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
                Termin buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link href="/leistungen">
              <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                Preise ansehen →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

