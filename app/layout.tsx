import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable} ${rajdhani.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

