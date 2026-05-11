import Link from "next/link";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo variant="dark" size="sm" className="mb-6" />
            <p className="mb-6 text-gray-400 leading-relaxed max-w-md">
              FLX-Software baut Websites, kleine Verwaltungsprogramme und digitale Helfer für Betriebe,
              die weniger Papierkram und mehr Überblick wollen.
            </p>
          </div>

            {/* Legal & Contact */}
            <div className="md:col-span-2">
              <h3 className="mb-6 text-sm font-medium text-white uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/sicherheit"
                    className="text-gray-300 transition-colors hover:text-flx-cyan"
                  >
                    Sicherheit & DSGVO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="text-gray-300 transition-colors hover:text-flx-cyan"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-gray-300 transition-colors hover:text-flx-cyan"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info@flx-software.de"
                  className="flex items-center gap-2 text-gray-300 transition-colors hover:text-flx-cyan"
                  >
                    <Mail size={16} />
                    info@flx-software.de
                  </a>
                </li>
              </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} FLX Software. Alle Rechte vorbehalten.{" "}
            <span className="text-xs text-gray-600">by Fabio Stöckle</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
