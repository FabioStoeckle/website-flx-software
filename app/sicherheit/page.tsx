import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ArrowRight, Shield, Lock, FileCheck, Server, Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sicherheit & Datenschutz | DSGVO-konforme Handwerk App",
  description:
    "DSGVO, EU-Datenhaltung, Verschlüsselung at-rest & in-transit. Audit-Trail, Backups, Penetration-Tests. Rechtssicher für Handwerksbetriebe.",
};

export default function SicherheitPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Sicherheit & Datenschutz
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light">
            DSGVO-konform. EU-Server. Audit-ready. Keine Kompromisse.
          </p>
        </div>
      </Section>

      {/* Main Security Points */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DSGVO */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">DSGVO-konform</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>EU-Datenhaltung (Frankfurt, Amsterdam)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Datenverarbeitung nach DSGVO Art. 6, 28</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>Löschkonzept & Auskunftsrecht</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span>AVV (Auftragsverarbeitungsvertrag) auf Anfrage</span>
                </li>
              </ul>
            </div>

            {/* Verschlüsselung */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Verschlüsselung</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <span>HTTPS, TLS 1.3 (in-transit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <span>AES-256 Datenbankverschlüsselung (at-rest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <span>Passwort-Hashing (bcrypt, Argon2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <span>Sichere API-Kommunikation (JWT, OAuth)</span>
                </li>
              </ul>
            </div>

            {/* Rollen & Rechte */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Rollen & Rechte</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span>Admin/Fachkraft/Mitarbeiter-Rollen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span>Standort-/Abteilungs-Scopes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span>Feingranulare Berechtigungen (Pro/Enterprise)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span>Audit-Log für alle Änderungen</span>
                </li>
              </ul>
            </div>

            {/* Audit-Trail */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Audit-Trail</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <span>Protokollierung aller Änderungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <span>Wer, wann, was-Nachweis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <span>Export für TÜV/Dekra/DGUV-Audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <span>Unveränderbar, WORM-Prinzip</span>
                </li>
              </ul>
            </div>

            {/* Backups */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Backups & Restore</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-400" />
                  <span>Tägliche automatische Backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-400" />
                  <span>Point-in-Time Recovery (7 Tage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-400" />
                  <span>Geo-redundant (Frankfurt + Amsterdam)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-orange-400" />
                  <span>Restore-Test quartalsweise</span>
                </li>
              </ul>
            </div>

            {/* Penetration-Tests */}
            <div className="glass rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Penetration-Tests</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span>Security-Scans (OWASP Top 10)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span>Code-Reviews & Static Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span>Dependency-Scans (npm audit, Snyk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span>Externe Pen-Tests auf Anfrage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Infrastructure */}
      <Section className="py-32 bg-black/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Hosting & Infrastructure
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Vercel Edge Network. ISO 27001-zertifiziert. 99.9% Uptime.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Hosting</h3>
                <p className="text-gray-400">
                  Vercel Edge Network mit Rechenzentren in Frankfurt (primär) und Amsterdam (Backup). 
                  ISO 27001-zertifiziert, SOC 2 Type II.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Datenbank</h3>
                <p className="text-gray-400">
                  Supabase (PostgreSQL) in EU-Region. Automatische Skalierung, 
                  Point-in-Time Recovery, tägliche Backups.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Monitoring</h3>
                <p className="text-gray-400">
                  24/7-System-Monitoring, Incident-Response &lt;1 h (Pro/Enterprise), 
                  Statuspage für Verfügbarkeit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Uptime</h3>
                <p className="text-gray-400">
                  99.9% Uptime-SLA (Pro/Enterprise), automatisches Failover, 
                  Geo-Redundanz für Datenbank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Noch Fragen zu Sicherheit?
          </h2>
          <p className="mb-12 text-xl text-gray-400 font-light">
            AVV, Pen-Test-Reports, Zertifikate – auf Anfrage verfügbar.
          </p>
          <Link href="/kontakt">
            <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
              Sicherheitsfragen klären
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </>
  );
}

