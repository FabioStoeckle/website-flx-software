# FLX Software – Website

**Apps. Tools. Klartext.**

Produktionsreife Website für FLX Software – gebaut mit Next.js 14, TypeScript, Tailwind CSS und shadcn/ui.

## 🚀 Schnellstart

### Voraussetzungen

- **Node.js** LTS (v20+)
- **pnpm** (empfohlen) oder npm

### Lokale Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Dev-Server starten
pnpm dev

# Browser öffnen
# http://localhost:3000
```

### Produktions-Build

```bash
# Statischen Export erstellen
pnpm build

# Lokal testen (nach Build)
pnpm start
```

### Code-Qualität

```bash
# Linting
pnpm lint

# Type-Checking
pnpm typecheck

# Formatierung
pnpm format

# Formatierung prüfen
pnpm format:check
```

## 📁 Projektstruktur

```
├── app/                      # Next.js App Router
│   ├── (site)/              # Seiten-Gruppe
│   │   ├── page.tsx         # Home
│   │   ├── leistungen/      # Leistungen
│   │   ├── kunden/[slug]/   # Dynamische Kundenseiten
│   │   ├── ueber-uns/       # Über uns
│   │   ├── kontakt/         # Kontakt
│   │   ├── impressum/       # Impressum
│   │   └── datenschutz/     # Datenschutz
│   ├── not-found.tsx        # 404-Seite
│   ├── layout.tsx           # Root-Layout
│   ├── globals.css          # Globale Styles
│   ├── sitemap.ts           # Sitemap-Generator
│   ├── robots.ts            # robots.txt-Generator
│   └── opengraph-image.tsx  # OG-Image (dynamisch)
├── components/              # React-Komponenten
│   ├── ui/                  # shadcn/ui Komponenten
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Logo.tsx             # FLX Logo
│   ├── Navigation.tsx       # Top-Navigation
│   ├── Footer.tsx           # Footer
│   ├── Section.tsx          # Layout-Container
│   └── CustomerTeaser.tsx   # Kunden-Preview-Karte
├── data/
│   └── customers.json       # Kundendaten (statisch)
├── lib/
│   └── utils.ts             # Utility-Funktionen (cn)
├── public/
│   └── favicon.svg          # Favicon
├── .husky/                  # Git-Hooks (Pre-Commit)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Design & Branding

### Farben

- **Primary**: `#0EA5E9` (Sky-500)
- **Accent**: `#22D3EE` (Cyan-400)
- **Dark**: `#111827` (Gray-900)
- **Light**: `#F8FAFC` (Slate-50)

### Schriften

- **Sans**: Inter (Standard)
- **Mono**: JetBrains Mono (Code-Details)

### Logo

Das Logo wird als SVG-Komponente gerendert:

```tsx
import { Logo } from "@/components/Logo";

<Logo size="md" />
```

## 📄 Inhalte verwalten

### Neue Kunden anlegen

Kunden-Referenzen werden aus `/data/customers.json` geladen.

**Beispiel-Eintrag:**

```json
{
  "slug": "holzbau-xy",
  "name": "Holzbau XY",
  "industry": "Bau/Handwerk",
  "summary": "Digitale Auftragsübersicht & QR-gestützte Geräteverwaltung.",
  "problem": "Zettelwirtschaft, fehlende Transparenz bei Geräten.",
  "solution": "PWA mit QR-Codes, Check-in/out, TÜV-Reminder.",
  "outcome": "30% weniger Geräteverluste, schnellere Übergaben.",
  "features": ["PWA", "QR-Codes", "Supabase-ready", "Export"]
}
```

- Einfach einen neuen Eintrag in `customers.json` hinzufügen
- Build neu starten (Next.js generiert automatisch statische Seiten)

## 📧 Kontaktformular

### Standard: Mailto

Standardmäßig nutzt das Kontaktformular ein **client-seitiges mailto**:

```tsx
window.location.href = `mailto:info@flx-software.de?subject=...&body=...`;
```

### Optional: API-basiert (Formspree / Resend)

Falls du einen API-basierten Mail-Versand möchtest:

1. **Formspree** registrieren: [formspree.io](https://formspree.io)
2. Formspree-ID als Umgebungsvariable hinterlegen:

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

3. In `/app/kontakt/page.tsx` den kommentierten Code aktivieren:

```tsx
// Aktuell:
window.location.href = `mailto:...`;

// Ändern zu:
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

4. API-Route erstellen (`/app/api/contact/route.ts`):

```ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.json();

  // Formspree-Integration
  const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Mail could not be sent' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

## 🚢 Deployment (Vercel)

### 1. Vercel-Projekt erstellen

```bash
# Vercel CLI installieren (optional)
npm i -g vercel

# Deploy
vercel
```

### 2. GitHub verbinden

- Projekt auf GitHub pushen
- In [Vercel Dashboard](https://vercel.com) importieren
- Automatische Deployments bei jedem Push

### 3. Domain verbinden

- Vercel Dashboard → Settings → Domains
- Domain `flx-software.de` hinzufügen
- DNS-Einträge konfigurieren (A/CNAME Records)

### 4. Umgebungsvariablen (optional)

Falls du Formspree o. Ä. nutzt:

- Vercel Dashboard → Settings → Environment Variables
- `NEXT_PUBLIC_FORMSPREE_ID` hinzufügen

## 🔧 Entwicklung

### Neue Seite hinzufügen

```bash
# Neue Seite erstellen
touch app/neue-seite/page.tsx
```

```tsx
import { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Neue Seite",
  description: "Beschreibung der neuen Seite.",
};

export default function NeueSeite() {
  return (
    <Section>
      <h1>Neue Seite</h1>
    </Section>
  );
}
```

### Neue Komponente hinzufügen

```bash
touch components/NeueKomponente.tsx
```

```tsx
import React from "react";

export function NeueKomponente() {
  return <div>Neue Komponente</div>;
}
```

### Tailwind-Klassen nutzen

```tsx
<div className="bg-sky-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

## 📦 Wichtige Dependencies

| Package | Version | Zweck |
|---------|---------|-------|
| `next` | 14.2.5 | React-Framework |
| `react` | 18.3.1 | UI-Library |
| `typescript` | 5.5.4 | Type-Safety |
| `tailwindcss` | 3.4.9 | Styling |
| `lucide-react` | 0.427.0 | Icons |
| `framer-motion` | 11.3.28 | Animationen |

## 🛠️ Scripts

| Script | Beschreibung |
|--------|--------------|
| `pnpm dev` | Dev-Server starten |
| `pnpm build` | Produktions-Build (statischer Export) |
| `pnpm start` | Build lokal testen |
| `pnpm lint` | ESLint ausführen |
| `pnpm typecheck` | TypeScript-Check |
| `pnpm format` | Code formatieren (Prettier) |
| `pnpm format:check` | Formatierung prüfen |

## ✅ Pre-Commit Hooks (Husky)

Bei jedem Commit werden automatisch ausgeführt:

- **ESLint** (Code-Qualität)
- **TypeScript** (Type-Checking)

Falls Fehler auftreten, wird der Commit blockiert.

## 🔐 SEO & Meta

- **Sitemap**: Automatisch generiert (`/sitemap.xml`)
- **robots.txt**: Automatisch generiert (`/robots.txt`)
- **OpenGraph**: Dynamisches OG-Image (`/opengraph-image`)
- **Metadata**: Definiert in jedem `page.tsx`

## 📝 Rechtliches

### Impressum

**Wichtig**: Vor Veröffentlichung bitte die Platzhalter in `/app/impressum/page.tsx` ausfüllen:

- Verantwortlicher (Fabio Stöckle)
- Anschrift (Straße, PLZ, Ort)
- USt-IdNr.

### Datenschutz

Die Datenschutzerklärung in `/app/datenschutz/page.tsx` ist ein **Platzhalter** und muss rechtlich geprüft und angepasst werden. Insbesondere:

- Hosting-Anbieter (Vercel)
- Datenverarbeitung (Server-Logs, Kontaktformular)
- Betroffenenrechte

**Empfehlung**: Datenschutzexperten oder Anwalt konsultieren.

## 📞 Support & Kontakt

- **E-Mail**: info@flx-software.de
- **GitHub**: (Link zu deinem GitHub-Profil)

---

**FLX Software** – by Fabio Stöckle

