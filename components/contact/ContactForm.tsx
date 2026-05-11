"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Projektanfrage von " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nFirma: ${formData.company || "Keine Angabe"}\n\nNachricht:\n${formData.message}`
    );

    window.location.href = `mailto:info@flx-software.de?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-flx-cyan/70 focus:outline-none focus:ring-2 focus:ring-flx-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-flx-cyan/70 focus:outline-none focus:ring-2 focus:ring-flx-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-800">
          Betrieb oder Firma
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-flx-cyan/70 focus:outline-none focus:ring-2 focus:ring-flx-cyan/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
          Worum geht es? *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Zum Beispiel: Wir verwalten unsere Fahrzeuge noch in Excel."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-flx-cyan/70 focus:outline-none focus:ring-2 focus:ring-flx-cyan/20"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          required
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-flx-cyan focus:ring-flx-cyan/30"
        />
        <label htmlFor="privacy" className="text-sm leading-relaxed text-slate-600">
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-medium text-flx-cyan hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-flx-cyan px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#005ec7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flx-cyan/60 focus-visible:ring-offset-2"
      >
        <Send className="h-5 w-5" />
        Nachricht senden
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        Das Formular öffnet dein E-Mail Programm mit einer vorbereiteten Nachricht an info@flx-software.de.
      </p>
    </form>
  );
}
