import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import customersData from "@/data/customers.json";

interface CustomerPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return customersData.map((customer) => ({
    slug: customer.slug,
  }));
}

export async function generateMetadata({ params }: CustomerPageProps): Promise<Metadata> {
  const customer = customersData.find((c) => c.slug === params.slug);

  if (!customer) {
    return {
      title: "Kunde nicht gefunden",
    };
  }

  return {
    title: customer.name,
    description: customer.summary,
  };
}

export default function CustomerPage({ params }: CustomerPageProps) {
  const customer = customersData.find((c) => c.slug === params.slug);

  if (!customer) {
    notFound();
  }

  return (
    <>
      <Section className="pt-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-sky-500"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <div className="mb-8">
          <Badge className="mb-4">{customer.industry}</Badge>
          <h1 className="mb-4 text-4xl font-bold text-slate-900">{customer.name}</h1>
          <p className="text-xl text-slate-600">{customer.summary}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Problem */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{customer.problem}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lösung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{customer.solution}</p>
            </CardContent>
          </Card>

          {/* Outcome */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ergebnis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{customer.outcome}</p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Technologie & Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {customer.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-500" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            Ähnliches Projekt geplant?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-slate-600">
            Wir helfen dir, deine Vision umzusetzen. Schnell, pragmatisch, wartbar.
          </p>
          <Link href="/kontakt">
            <Button size="lg">Projekt anfragen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

