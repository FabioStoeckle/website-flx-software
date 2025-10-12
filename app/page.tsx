import Link from "next/link";
import { Section } from "@/components/Section";
import { CustomerTeaser } from "@/components/CustomerTeaser";
import { ArrowRight, Sparkles, Zap, Code, CheckCircle2, QrCode, Clipboard, FileCheck, Smartphone, Users, FileText, BarChart3 } from "lucide-react";
import customersData from "@/data/customers.json";

export default function HomePage() {
  const featuredCustomers = customersData.slice(0, 2);

  return (
    <>
      {/* Hero Section - Product-Focused */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
              <span className="block gradient-text font-medium">Werkzeuge, Geräte, Prüfungen</span>
              <span className="block">im Griff</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light leading-relaxed">
              QR-Inventarverwaltung, Wartungs- & Prüfplan, TÜV/Dekra-Nachweise – als PWA mit Offline-Scanner.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/kontakt">
                <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
                  Live-Demo anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/preise">
                <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                  Preise & Module →
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-sm">Offline-fähig</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-sm">DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-sm">In 14 Tagen einsatzbereit</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* Kernmodule - 4x2 Feature Grid */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Was die App kann
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Acht Module. Offline-fähig. Handwerks-ready.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Inventar & QR-Codes */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Inventar & QR-Codes</h3>
              <p className="text-sm text-gray-400 mb-4">Alle Werkzeuge/Geräte mit QR-Label scannen.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Scan → Gerätedetail in 1 Sek.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Serien-/Lager-/Kostenstellen-Felder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Foto, Notizen, Standort</span>
                </li>
              </ul>
            </div>

            {/* Check-in/Check-out */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <Clipboard className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Check-in/Check-out</h3>
              <p className="text-sm text-gray-400 mb-4">Verleih an Mitarbeiter/Teams verwalten.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Rückgabetermine & Push-Reminder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Digitale Unterschrift</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Verlaufhistorie pro Gerät</span>
                </li>
              </ul>
            </div>

            {/* Prüfungen & Nachweise */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Prüfungen & Nachweise</h3>
              <p className="text-sm text-gray-400 mb-4">TÜV/Dekra/DGUV-Prüfplan mit Fristen.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Foto-/PDF-Upload, Protokolle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Audit-Trail für Audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Export für TÜV (PDF/CSV)</span>
                </li>
              </ul>
            </div>

            {/* Wartung & Tickets */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Wartung & Tickets</h3>
              <p className="text-sm text-gray-400 mb-4">Störungen melden und nachverfolgen.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>SLA/Prio, Zuständigkeit, Verlauf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Foto/Notiz bei Störung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Verbrauchs- & Ersatzteilhistorie</span>
                </li>
              </ul>
            </div>

            {/* PWA & Offline-Scanner */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">PWA & Offline-Scanner</h3>
              <p className="text-sm text-gray-400 mb-4">iOS/Android installierbar, offline-fähig.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Offline-Sync via Service Worker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kamera-Scanner, 1-Hand-Nutzung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kein App-Store, Web-Installation</span>
                </li>
              </ul>
            </div>

            {/* Rollen & Rechte */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Rollen & Rechte</h3>
              <p className="text-sm text-gray-400 mb-4">Admin/Fachkraft/Mitarbeiter-Rollen.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Standort-/Abteilungs-Scopes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Journaling/Audit-Log</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Feingranulare Berechtigungen</span>
                </li>
              </ul>
            </div>

            {/* Dokumente & Zertifikate */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Dokumente & Zertifikate</h3>
              <p className="text-sm text-gray-400 mb-4">Geräte-Mappe: Bedienungs-/Sicherheitsblätter.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>TÜV/Dekra-Zertifikate verknüpfen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Ablaufwarnung + Eskalation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>PDF-Viewer, Versionierung</span>
                </li>
              </ul>
            </div>

            {/* Berichte & Exporte */}
            <div className="glass rounded-2xl p-6 smooth-hover">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Berichte & Exporte</h3>
              <p className="text-sm text-gray-400 mb-4">Nächste Prüfungen, überfällige Geräte.</p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kostenstellen/Stillstandstage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>CSV/PDF, Mail-Planer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Dashboard & Kennzahlen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Integration */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              <span className="font-medium text-white">Integriert sich sauber:</span> Supabase-ready, CSV-Import, Webhooks, Outlook/Teams-Mails optional.
            </p>
          </div>
        </div>
      </section>

      {/* Branchen - Für wen? */}
      <section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Für wen?
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Drei Handwerks-Branchen. Drei Pain-Points. Eine Lösung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bau/Holz/Metall */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Bau/Holz/Metall</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-red-400 mb-2">❌ Problem</p>
                  <p className="text-gray-400 text-sm">
                    Geräte verschwinden, Prüfungen vergessen, TÜV-Termine verschlafen.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 mb-2">✅ Lösung</p>
                  <p className="text-gray-400 text-sm">
                    QR-Scanner + Prüffristen + Eskalation. Digitale Check-in/out-Historie.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-400 mb-2">📊 Nutzen</p>
                  <p className="text-gray-400 text-sm">
                    30% weniger Geräteverlust, keine vergessenen TÜV-Prüfungen mehr.
                  </p>
                </div>
              </div>
            </div>

            {/* Elektro/SHK */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Elektro/SHK</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-red-400 mb-2">❌ Problem</p>
                  <p className="text-gray-400 text-sm">
                    DGUV V3 Pflicht, Wartungslisten in Excel, fehlende Audit-Nachweise.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 mb-2">✅ Lösung</p>
                  <p className="text-gray-400 text-sm">
                    Digitale Protokolle, Foto-Upload, Audit-Trail, PDF/CSV-Export für Prüfer.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-400 mb-2">📊 Nutzen</p>
                  <p className="text-gray-400 text-sm">
                    40% weniger Prüfverzug, rechtssichere Dokumentation, Audit-ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Maler/Innenausbau */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Maler/Innenausbau</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-red-400 mb-2">❌ Problem</p>
                  <p className="text-gray-400 text-sm">
                    Viele Kleinwerkzeuge, unklare Kostenstellen, langsame Ausgabe/Rücknahme.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 mb-2">✅ Lösung</p>
                  <p className="text-gray-400 text-sm">
                    Schnelles QR-Scan-System, Kostenstellen-Zuordnung, Push-Reminder bei Rückgabe.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-400 mb-2">📊 Nutzen</p>
                  <p className="text-gray-400 text-sm">
                    25% mehr Werkzeugeinsatzzeit, klare Kostenstellen, weniger Verluste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI-Beweis - KPIs */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Was es in der Praxis bringt
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Keine Floskeln. Drei messbare KPIs aus echten Projekten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold gradient-text">−30%</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Geräteverlust</h3>
              <p className="text-gray-400 leading-relaxed">
                Durch QR-Check-out & digitale Verlaufhistorie. 
                Jede Ausgabe dokumentiert, jede Rückgabe nachverfolgbar.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold gradient-text">−40%</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Prüfverzug</h3>
              <p className="text-gray-400 leading-relaxed">
                Durch Prüfplan + automatische Reminder + Eskalation. 
                Kein TÜV-Termin wird mehr verschlafen.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold gradient-text">+25%</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Werkzeugeinsatzzeit</h3>
              <p className="text-gray-400 leading-relaxed">
                Weniger Stillstand durch schnellere Wartung & Ersatzteil-Historie. 
                Geräte sind öfter im Einsatz, nicht im Lager.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-white mb-4">
                So messen wir das
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Dashboard mit Kennzahlen, Berichte (CSV/PDF), Export für Controlling. 
                Vergleich vor/nach App-Einführung über 6-12 Monate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Problem/Lösung/Ergebnis */}
      <section className="py-32 bg-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Echte Projekte
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Problem → Lösung → Ergebnis. Mit Zahlen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Holzbau XY */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  Bau/Handwerk
                </span>
                <h3 className="text-2xl font-medium text-white mt-2">Holzbau XY</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-red-400 mb-1">Problem</p>
                  <p className="text-gray-400 text-sm">
                    Zettelwirtschaft, fehlende Transparenz bei Geräten, vergessene TÜV-Termine. 
                    Geräteverluste durch unklare Zuordnung.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 mb-1">Lösung</p>
                  <p className="text-gray-400 text-sm">
                    Progressive Web App mit QR-Code-System, automatische TÜV-Erinnerungen, 
                    mobile Check-in/out, Offline-Sync auf Baustelle.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-400 mb-1">Ergebnis</p>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">30% weniger Geräteverluste</strong> nach 6 Monaten, 
                    keine vergessenen TÜV-Termine mehr, schnellere Baustellen-Übergaben.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">PWA</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">QR-Codes</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">TÜV-Reminder</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">Offline-Sync</span>
              </div>

              <Link href="/kontakt">
                <button className="w-full raycast-button px-4 py-3 text-sm font-medium text-white">
                  Ähnliches Setup für meinen Betrieb
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Maler Meier */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  Handwerk
                </span>
                <h3 className="text-2xl font-medium text-white mt-2">Maler Meier</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-red-400 mb-1">Problem</p>
                  <p className="text-gray-400 text-sm">
                    Langsame Angebotserstellung, Medienbrüche zwischen Excel/Word/Mail, 
                    unprofessionelle Kommunikation mit Kunden.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-400 mb-1">Lösung</p>
                  <p className="text-gray-400 text-sm">
                    Web-Portal mit KI-generierten Angeboten (OpenAI), automatische PDF-Erstellung, 
                    Kundenbereich mit Login & Auftragsstatus.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-400 mb-1">Ergebnis</p>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Angebote in 5 Min statt 30 Min</strong>, 
                    40% mehr Aufträge durch professionelle Präsentation, digitale Nachverfolgung.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">KI-Integration</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">PDF-Export</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">Kundenportal</span>
                <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">Auth</span>
              </div>

              <Link href="/kontakt">
                <button className="w-full raycast-button px-4 py-3 text-sm font-medium text-white">
                  Ähnliches Setup für meinen Betrieb
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Product-Focused */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
            Mit QR starten?
          </h2>
          <p className="text-xl text-gray-400 mb-4 font-light">
            Live-Demo anfordern. Pilot in 14 Tagen. Keine Verkaufsgespräche.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Antwort in &lt;24 h. Kostenlos & unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt">
              <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
                Live-Demo anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link href="/preise">
              <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                Preise & Module →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

