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
  ArrowRight,
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
      <Section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Wir bauen Software, die wirklich genutzt wird.
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400 font-light">
            Drei Hauptbereiche mit klaren Deliverables. Kein Marketing-Sprech, 
            sondern praxisnahe Lösungen, die funktionieren.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="space-y-20">
          {/* App Development */}
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">App-Entwicklung</h2>
              <p className="text-xl text-gray-400 font-light">
                PWA, Webapps, mobile Tools. Installierbar, offline-fähig, native Performance.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-4">Progressive Web Apps</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Web-Apps, die auf dem Homescreen leben und offline funktionieren.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Installierbar auf iOS & Android</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Offline-Sync mit Service Workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Push-Notifications</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">Was das bringt: Native App-Feeling ohne App-Store.</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-4">Webapps & Mobile Tools</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Modern, performant, SEO-optimiert. Server- und Client-Komponenten.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Next.js App Router & Server Components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">TypeScript strict mode</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Tailwind + Component Libraries</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">Was das bringt: Schnelle, wartbare Anwendungen.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Automationen</h2>
              <p className="text-xl text-gray-400 font-light">
                KI-gestützte Abläufe, Webhooks, Workflows. Manuelle Prozesse eliminieren, Zeit sparen.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-4">KI-gestützte Abläufe</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  OpenAI, Claude, Custom Models. Von Chatbots bis Content-Generierung.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">GPT-4, Claude Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">RAG (Retrieval Augmented Generation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Fine-Tuning & Prompt Engineering</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">Was das bringt: Intelligente Automatisierung statt manueller Arbeit.</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-4">Webhooks & Workflows</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  APIs orchestrieren, Daten verknüpfen, Prozesse automatisieren.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Webhook-basierte Trigger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">API-Orchestrierung (REST, GraphQL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-gray-300">Scheduled Tasks & Batch-Jobs</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">Was das bringt: Manuelle Prozesse eliminieren, Zeit sparen.</p>
                </div>
              </div>
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
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl md:text-6xl font-light text-white">
            Sag uns, was dich aufhält – wir lösen es.
          </h2>
          <p className="mb-12 text-xl text-gray-400 font-light">
            Kostenlos, unverbindlich, auf den Punkt. Wir machen dir einen Plan.
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

