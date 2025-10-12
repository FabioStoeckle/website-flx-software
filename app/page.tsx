import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerTeaser } from "@/components/CustomerTeaser";
import {
  Zap,
  Code2,
  Sparkles,
  Server,
  Smartphone,
  Globe,
  Bot,
  ArrowRight,
} from "lucide-react";
import customersData from "@/data/customers.json";

export default function HomePage() {
  const featuredCustomers = customersData.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-50 to-white pt-20">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Software, die arbeitet.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Wir bauen Apps und Tools, die Probleme lösen – schnell, stabil, wartbar.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/kontakt">
              <Button size="lg">Projekt anfragen</Button>
            </Link>
            <Link href="/leistungen">
              <Button size="lg" variant="outline">
                Leistungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
          Warum mit uns arbeiten?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Zap className="mb-2 h-10 w-10 text-sky-500" />
              <CardTitle>Schnelle Iteration</CardTitle>
              <CardDescription>
                Von Discovery bis MVP in 4–6 Wochen. Keine monatelangen Projekte, sondern klare
                Sprints.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="mb-2 h-10 w-10 text-sky-500" />
              <CardTitle>Saubere Code-Basis</CardTitle>
              <CardDescription>
                TypeScript, Tests, CI/CD. Alles wartbar, erweiterbar, dokumentiert.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="mb-2 h-10 w-10 text-sky-500" />
              <CardTitle>Klarer Klartext</CardTitle>
              <CardDescription>
                Keine Buzzword-Battles. Wir sagen, was geht, was nicht geht und warum.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Server className="mb-2 h-10 w-10 text-sky-500" />
              <CardTitle>Hosting auf Vercel</CardTitle>
              <CardDescription>
                Automatisches Deployment, Edge-Performance, null Downtime. Einfach produktiv.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Services Teaser */}
      <Section className="bg-slate-50">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
          Unsere Leistungen
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Smartphone className="mb-4 h-12 w-12 text-sky-500" />
              <CardTitle>App-Entwicklung</CardTitle>
              <CardDescription>
                Next.js, React, PWAs. Web-Apps, die sich wie native Apps anfühlen. Responsive,
                schnell, offline-fähig.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Progressive Web Apps (PWA)</li>
                <li>✓ React Native / Expo</li>
                <li>✓ Offline-First Strategien</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Globe className="mb-4 h-12 w-12 text-sky-500" />
              <CardTitle>Web-Portale</CardTitle>
              <CardDescription>
                Kundenbereiche, Dashboards, Admin-Panels. Mit Auth, Rollen, Datenexport – alles,
                was Unternehmen brauchen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Authentifizierung & Autorisierung</li>
                <li>✓ Dashboards & Analytics</li>
                <li>✓ CMS-Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Bot className="mb-4 h-12 w-12 text-sky-500" />
              <CardTitle>AI & Automation</CardTitle>
              <CardDescription>
                Workflows automatisieren, Daten verknüpfen, APIs orchestrieren. Von Webhooks bis
                LLM-Integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Workflow-Automation</li>
                <li>✓ OpenAI / LLM-Integration</li>
                <li>✓ Zapier/n8n Alternativen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link href="/leistungen">
            <Button variant="outline" size="lg">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Customer References */}
      <Section>
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Referenzen</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
          Echte Projekte, echte Ergebnisse. Von Handwerksbetrieben bis zu digitalen Services.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCustomers.map((customer) => (
            <CustomerTeaser key={customer.slug} {...customer} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Bereit, loszulegen?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-50">
            Lass uns über dein Projekt sprechen. Kostenlos, unverbindlich, auf den Punkt.
          </p>
          <Link href="/kontakt">
            <Button size="lg" variant="secondary">
              Jetzt Projekt anfragen
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

