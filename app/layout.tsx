import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { StickyProjectCTA } from "@/components/contact/StickyProjectCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flx-software.de"),
  title: {
    default: "FLX-Software.de | Digitale Produkte & Weblösungen",
    template: "%s | FLX-Software",
  },
  description:
    "FLX-Software entwickelt digitale Produkte, PWAs und Websites mit echtem Praxisnutzen. Produkte ansehen oder Projekt anfragen – klar, schnell, wartbar.",
  keywords: [
    "FLX-Software",
    "Digitale Produkte",
    "Webentwicklung",
    "PWAs",
    "Websites",
    "Web-Apps",
    "Individuelle Tools",
    "Projektanfragen",
  ],
  authors: [{ name: "Fabio Stöckle" }],
  creator: "Fabio Stöckle",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://flx-software.de",
    siteName: "FLX-Software",
    title: "FLX-Software.de | Digitale Produkte & Weblösungen",
    description:
      "FLX-Software entwickelt digitale Produkte, PWAs und Websites. Produkte ansehen oder Projekt anfragen – klar, schnell, wartbar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLX-Software.de | Digitale Produkte & Weblösungen",
    description: "FLX-Software entwickelt digitale Produkte, PWAs und Websites. Projekt anfragen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FLX-Software",
    url: "https://flx-software.de",
    logo: "https://flx-software.de/brand/flx-logo-top-left.png",
    email: "info@flx-software.de",
  };

  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable} ${rajdhani.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Navigation />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <StickyProjectCTA />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

