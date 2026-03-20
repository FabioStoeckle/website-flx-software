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
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nFirma: ${formData.company || "—"}\n\nNachricht:\n${formData.message}`
    );

    // Client-side mailto submit.
    window.location.href = `mailto:info@flx-software.de?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
          Firma (optional)
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          required
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400/30"
        />
        <label htmlFor="privacy" className="text-sm text-gray-400 leading-relaxed">
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-cyan-400 hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </label>
      </div>

      <button
        type="submit"
        className="raycast-button w-full px-8 py-4 text-lg font-medium text-white smooth-transition inline-flex items-center justify-center gap-2"
      >
        <Send className="h-5 w-5" />
        Nachricht senden
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="text-xs text-gray-500 leading-relaxed">
        Hinweis: Dieses Formular sendet deine Anfrage über `mailto` an `info@flx-software.de`. Du kannst es jederzeit
        anpassen, bevor du sendest.
      </p>
    </form>
  );
}

