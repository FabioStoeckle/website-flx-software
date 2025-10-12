"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side mailto (default)
    const subject = encodeURIComponent("Projektanfrage von " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nFirma: ${formData.company || "—"}\n\nNachricht:\n${formData.message}`
    );
    window.location.href = `mailto:info@flx-software.de?subject=${subject}&body=${body}`;

    // Alternative: API-Route (optional, siehe Kommentar unten)
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <>
      <Section className="bg-gradient-to-b from-slate-50 to-white pt-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Kontakt
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Projekt geplant? Fragen? Einfach Nachricht senden – wir melden uns innerhalb von 24
            Stunden.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-2xl font-medium text-white">Direkt erreichen</h2>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-xl font-medium text-white">E-Mail</h3>
                </div>
                <a
                  href="mailto:info@flx-software.de"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                >
                  info@flx-software.de
                </a>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-xl font-medium text-white">Standort</h3>
                </div>
                <p className="text-gray-400">Deutschland (Remote & vor Ort)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <h2 className="mb-2 text-2xl font-medium text-white">Nachricht senden</h2>
              <p className="mb-8 text-gray-400">
                Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.
              </p>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Firma (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-600">
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-sky-500 hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>

                  <p className="text-xs text-slate-500">
                    * Pflichtfeld. Hinweis: Diese Seite nutzt aktuell ein einfaches
                    mailto-Formular. Für API-basierte Lösungen siehe Kommentare im Quellcode
                    (Formspree/Resend).
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

