import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise - Handwerk App | QR-Inventarverwaltung",
  description:
    "Transparente Preise für QR-Inventarverwaltung, Wartungsplan und Prüffristen. Starter ab 149€, Pro ab 399€. Pilot in 14 Tagen.",
};

export default function PreisePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Preise & Pläne
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light">
            Keine Mogelpreise. Klare Ranges. Pilot in 14 Tagen.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">Starter</h3>
                <p className="text-gray-400 text-sm">Bis 10 Nutzer / 500 Geräte</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">149€</span>
                  <span className="text-gray-400 ml-2">ab / Monat</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">QR-Inventar & Scanner</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Check-in/Check-out</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Prüffristen & TÜV-Reminder</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">PWA (iOS/Android)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Basis-Berichte (CSV/PDF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-600" />
                  <span className="text-gray-500 text-sm">Wartungstickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-600" />
                  <span className="text-gray-500 text-sm">Erweiterte Berichte</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-600" />
                  <span className="text-gray-500 text-sm">API/Webhooks</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  Pilot starten (14 Tage)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Pro */}
            <div className="glass rounded-2xl p-8 border-2 border-cyan-400/50">
              <div className="mb-6">
                <div className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Empfohlen
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Pro</h3>
                <p className="text-gray-400 text-sm">Bis 50 Nutzer / 5.000 Geräte</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">399€</span>
                  <span className="text-gray-400 ml-2">ab / Monat</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Alles aus Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Wartungstickets & SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Eskalationen & Prio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Dokumentenmappe & Zertifikate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Erweiterte Berichte & Dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">API/Webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Audit-Trail & Exports</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-gray-600" />
                  <span className="text-gray-500 text-sm">SSO & Custom Reports</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  Pilot starten (14 Tage)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm">&gt;50 Nutzer / multi-Standort</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">Auf Anfrage</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Alles aus Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">SSO (SAML, OAuth)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Rollen feingranular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Custom Reports & Dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">SLA & Onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Dedizierter Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Multi-Standort-Verwaltung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Custom Integrationen</span>
                </li>
              </ul>
              <Link href="/kontakt">
                <button className="w-full raycast-button px-6 py-3 text-white font-medium">
                  Angebot anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-32 bg-black/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Häufige Fragen
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Keine Verkaufsgespräche. Klare Antworten.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Wie schnell sind wir live?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Typisch 14 Tage Pilot. Setup + CSV-Import + Schulung. 
                Danach entscheiden, ob Rollout oder Anpassungen.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Import aus Excel?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ja, CSV-Vorlage. Spalten: Gerätename, Seriennummer, Kostenstelle, Standort, Prüfdatum. 
                Wir helfen beim Mapping.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Offline-Nutzung?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ja, PWA mit Offline-Sync. Auf Baustelle scannen ohne Internet, 
                Daten synchronisieren bei Verbindung.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Rechtssicher für Audits?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ja. Protokolle, Audit-Trail, Foto-/PDF-Upload, Export für TÜV/Dekra/DGUV. 
                Audit-ready nach DSGVO.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Kündigung & Daten-Export?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Jederzeit kündbar (Monatslaufzeit nach Pilot). 
                Daten-Export als CSV/PDF auf Anfrage. Keine Vendor-Lock-in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Pilot in 14 Tagen starten?
          </h2>
          <p className="mb-4 text-xl text-gray-400 font-light">
            Live-Demo anfordern. Keine Verkaufsgespräche. Antwort in &lt;24 h.
          </p>
          <p className="mb-12 text-sm text-gray-500">
            Kostenlos & unverbindlich.
          </p>
          <Link href="/kontakt">
            <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
              Live-Demo anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </>
  );
}
