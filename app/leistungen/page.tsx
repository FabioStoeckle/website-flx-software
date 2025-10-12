import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Bot,
  Wrench,
  CheckCircle2,
  Clock,
  Users,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "App-Entwicklung, Web-Portale, AI-Automation und Maintenance. Alle Services im Überblick.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-slate-50 to-white pt-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Leistungen
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Von Discovery bis Deployment. Wir decken den kompletten Lifecycle ab – schnell, stabil,
            wartbar.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="space-y-16">
          {/* App Development */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Smartphone className="h-10 w-10 text-sky-500" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">App-Entwicklung</h2>
                <p className="text-slate-600">
                  Native Feel, Web-Technologie. Schnell, responsiv, offline-fähig.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Progressive Web Apps (PWA)</CardTitle>
                  <CardDescription>
                    Web-Apps, die auf dem Homescreen leben und offline funktionieren.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Installierbar auf iOS & Android</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Offline-Sync mit Service Workers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Push-Notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>React & Next.js Apps</CardTitle>
                  <CardDescription>
                    Modern, performant, SEO-optimiert. Server- und Client-Komponenten.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>App Router & Server Components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>TypeScript strict mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Tailwind + Component Libraries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Web Portals */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Globe className="h-10 w-10 text-sky-500" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Web-Portale</h2>
                <p className="text-slate-600">
                  Kundenbereiche, Dashboards, Admin-Panels. Secure, skalierbar, wartbar.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kundenbereiche & Dashboards</CardTitle>
                  <CardDescription>
                    Self-Service-Portale mit Login, Profilverwaltung, Dokumenten-Download.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>SSO & Multi-Factor Auth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Rollenbasierte Zugriffe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Analytics & Reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin-Panels & CMS</CardTitle>
                  <CardDescription>
                    Backend-Interfaces für Content-Verwaltung, Nutzer-Management, Konfiguration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Headless CMS (Sanity, Contentful)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Bulk-Operations & Exports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Audit-Logs & Versionierung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI & Automation */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Bot className="h-10 w-10 text-sky-500" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">AI & Automation</h2>
                <p className="text-slate-600">
                  Workflows automatisieren, APIs orchestrieren, LLMs integrieren.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Workflow-Automation</CardTitle>
                  <CardDescription>
                    Manuelle Prozesse eliminieren. Von Webhooks bis Cron-Jobs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Webhook-basierte Trigger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>API-Orchestrierung (REST, GraphQL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Scheduled Tasks & Batch-Jobs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>LLM-Integration</CardTitle>
                  <CardDescription>
                    OpenAI, Anthropic, Custom Models. Von Chatbots bis Content-Generierung.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>GPT-4, Claude Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>RAG (Retrieval Augmented Generation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Fine-Tuning & Prompt Engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Maintenance */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Wrench className="h-10 w-10 text-sky-500" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Care & Maintenance</h2>
                <p className="text-slate-600">
                  Nach Launch ist vor Feature. Updates, Bugfixes, Monitoring.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Badge>Starter</Badge>
                  <CardTitle className="mt-4">Basic Care</CardTitle>
                  <CardDescription>Security-Updates, Bugfixes, Monitoring.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Dependency-Updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Uptime-Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Critical Bugfixes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-sky-500">
                <CardHeader>
                  <Badge variant="accent">Pro</Badge>
                  <CardTitle className="mt-4">Pro Care</CardTitle>
                  <CardDescription>Alles aus Starter + Feature-Entwicklung.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Alle Starter-Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>2–4 Feature-Sprints/Monat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Performance-Optimierung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge>Scale</Badge>
                  <CardTitle className="mt-4">Enterprise Care</CardTitle>
                  <CardDescription>Dediziertes Team, SLA, On-Call.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Alle Pro-Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>24/7 On-Call Support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span>Custom SLA</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-slate-50">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Unser Prozess</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-sky-500" />
              <CardTitle className="text-lg">1. Discovery</CardTitle>
              <CardDescription>
                Kickoff, Requirements, Wireframes. 1–2 Wochen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Rocket className="mb-2 h-8 w-8 text-sky-500" />
              <CardTitle className="text-lg">2. MVP Sprint</CardTitle>
              <CardDescription>
                Core-Features entwickeln, testen, deployen. 4–6 Wochen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="mb-2 h-8 w-8 text-sky-500" />
              <CardTitle className="text-lg">3. Iteration</CardTitle>
              <CardDescription>
                User-Feedback einholen, Features nachschärfen. 2–4 Wochen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Wrench className="mb-2 h-8 w-8 text-sky-500" />
              <CardTitle className="text-lg">4. Maintenance</CardTitle>
              <CardDescription>
                Laufende Betreuung, Updates, neue Features. Dauerhaft.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Lass uns über dein Projekt sprechen</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-50">
            Kostenlos, unverbindlich, auf den Punkt. Wir machen dir einen Plan.
          </p>
          <Link href="/kontakt">
            <Button size="lg" variant="secondary">
              Jetzt Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

