import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <Search size={80} className="text-slate-300" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-slate-900">Seite nicht gefunden</h2>
        <p className="mb-8 text-lg text-slate-600">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </Section>
  );
}

