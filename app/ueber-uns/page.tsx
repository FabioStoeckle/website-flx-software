import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "FLX Software – Software-Entwicklung mit Pragmatismus, Stabilität und Klartext. By Fabio Stöckle.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Über uns
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Software-Entwicklung ohne Buzzwords. Pragmatisch, stabil, klar.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass rounded-3xl p-12">
            <h2 className="mb-8 text-3xl font-light text-white">Warum wir Software anders denken</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Wir bauen Software, die tatsächlich benutzt wird. Keine monatelangen
                Planungsphasen, keine aufgeblähten Frameworks, keine unnötigen Meetings.
              </p>
              <p>
                Stattdessen: Schnelle MVPs, klare Kommunikation, saubere Code-Basen. Wir glauben an
                kurze Iterationszyklen, echtes Feedback und pragmatische Lösungen.
              </p>
              <p>
                Unsere Kunden sind Handwerksbetriebe, die ihre Prozesse digitalisieren wollen,
                Startups, die schnell einen Prototypen brauchen, und etablierte Unternehmen, die
                interne Tools modernisieren möchten.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Unsere Werte</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Target className="mb-4 h-10 w-10 text-sky-500" />
              <CardTitle>Pragmatismus</CardTitle>
              <CardDescription>
                Die beste Lösung ist die, die funktioniert. Nicht die eleganteste, nicht die
                trendigste – die, die das Problem löst.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="mb-4 h-10 w-10 text-sky-500" />
              <CardTitle>Stabilität</CardTitle>
              <CardDescription>
                Code, der heute funktioniert und morgen noch wartet werden kann. Tests, Types,
                Dokumentation – keine Verhandlungssache.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="mb-4 h-10 w-10 text-sky-500" />
              <CardTitle>Klartext</CardTitle>
              <CardDescription>
                Keine Buzzwords, keine leeren Versprechen. Wir sagen, was geht, was nicht geht und
                warum. Transparent, direkt, ehrlich.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="mb-8 text-3xl font-light text-white">by Fabio Stöckle</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <p>
                FLX Software ist ein Ein-Mann-Studio mit Fokus auf moderne Web-Technologien und
                pragmatische Lösungen.
              </p>
              <p>
                Fabio Stöckle entwickelt seit über 10 Jahren Software – von Startups bis
                Mittelstand, von PWAs bis AI-Automation. Sein Fokus: Schnelle MVPs, sauberer Code,
                klare Kommunikation.
              </p>
              <p>
                Kein Buzzword, kein Lebenslauf – mehr Persönlichkeit. Pragmatismus, Klartext, 
                Verantwortung, Erfahrung aus IT & Handwerk.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Lass uns zusammenarbeiten
          </h2>
          <p className="mb-12 text-xl text-gray-400 font-light">
            Ob Discovery Sprint, MVP oder Maintenance – wir finden die richtige Lösung für dein Projekt.
          </p>
          <Link href="/kontakt">
            <button className="raycast-button px-8 py-4 text-lg font-medium text-white">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </Section>
    </>
  );
}

