import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, DatabaseBackup, FileCheck, Lock, Server, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Sicherheit & Datenschutz | FLX-Software",
  description:
    "Sicherheit, Datenschutz und DSGVO bei FLX-Software. Verständlich erklärt für Websites und digitale Lösungen.",
};

const securityPoints = [
  {
    title: "DSGVO im Blick",
    icon: Shield,
    items: [
      "Datenverarbeitung nach DSGVO",
      "Auftragsverarbeitungsvertrag auf Anfrage",
      "Löschung und Auskunft möglich",
      "Sparsame Erhebung von Daten",
    ],
  },
  {
    title: "Sichere Übertragung",
    icon: Lock,
    items: ["HTTPS Verschlüsselung", "Sichere Formulare", "Geschützte Zugänge", "Passwörter werden nicht im Klartext gespeichert"],
  },
  {
    title: "Rollen und Rechte",
    icon: FileCheck,
    items: ["Zugriff nur für berechtigte Personen", "Unterschiedliche Rollen möglich", "Klare Zuständigkeiten", "Nachvollziehbare Änderungen"],
  },
  {
    title: "Backups",
    icon: DatabaseBackup,
    items: ["Regelmäßige Sicherungen", "Wiederherstellung nach Absprache", "Schutz vor Datenverlust", "Saubere Trennung wichtiger Daten"],
  },
  {
    title: "Hosting",
    icon: Server,
    items: ["Bewährte Anbieter", "EU Standort möglich", "Stabile Auslieferung", "Technische Überwachung"],
  },
  {
    title: "Saubere Pflege",
    icon: Shield,
    items: ["Updates nach Bedarf", "Prüfung verwendeter Bausteine", "Fehlerbehebung", "Klare Dokumentation"],
  },
];

export default function SicherheitPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] pt-24">
        <div className="absolute inset-0 bg-[url('/brand/flx-handy-wallpaper.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,109,231,0.26),transparent_34%),linear-gradient(135deg,rgba(0,109,231,0.18)_0%,transparent_30%,rgba(255,255,255,0.04)_30.3%,transparent_31%)]" />
        <div className="absolute right-[-14%] top-24 h-64 w-[58%] -skew-x-12 border-y border-flx-cyan/35 bg-flx-cyan/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-gray-300">
              Datenschutz soll verständlich sein und nicht erst im Kleingedruckten anfangen.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sicherheit & DSGVO
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Wir bauen digitale Lösungen so, dass Daten bewusst verarbeitet, sauber geschützt und nachvollziehbar
              verwaltet werden.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-7 hidden h-[86%] w-[74%] -skew-x-12 border border-flx-cyan/30 bg-flx-cyan/10 lg:block" />
            <div className="relative flx-angle-card bg-white p-6 text-slate-950 shadow-2xl shadow-flx-cyan/10">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-flx-cyan">Grundsatz</p>
                  <h2 className="text-2xl font-semibold">So wenig Daten wie möglich</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {["Verschlüsselte Übertragung", "Klare Zugriffsrechte", "Sinnvolle Datensparsamkeit", "Kontakt bei Fragen"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-100 p-4 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-flx-cyan" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-24">
        <div className="absolute left-[-10%] top-10 h-40 w-[46%] -skew-x-12 bg-flx-cyan/10" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Überblick</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Worauf wir achten</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Je nach Projekt unterscheiden sich die Anforderungen. Diese Punkte gehören für uns aber immer zur
              sauberen Arbeit dazu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {securityPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flx-angle-card bg-white p-6 shadow-lg shadow-slate-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flx-cyan/10 text-flx-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{point.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {point.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-flx-cyan" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#080b12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d1320] p-7 sm:p-10">
            <div className="absolute right-[-8%] top-0 h-full w-48 -skew-x-12 bg-flx-cyan/20" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-flx-cyan">Wichtig</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Sicherheit wird passend geplant.</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                Eine einfache Website braucht andere Maßnahmen als ein internes Programm mit Kunden oder Fahrzeugdaten.
                Deshalb klären wir früh, welche Daten verarbeitet werden und welcher Schutz dafür sinnvoll ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950 sm:py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Noch Fragen zu Sicherheit oder Datenschutz?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Schreib uns kurz, worum es geht. Wir erklären verständlich, was bei deinem Projekt wichtig ist.
          </p>
          <div className="mt-9">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-flx-cyan px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#005ec7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flx-cyan/60 focus-visible:ring-offset-2"
            >
              Sicherheitsfragen klären
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
