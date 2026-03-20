import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

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
              FLX-Software entwickelt digitale Produkte, Web-Apps und Websites für Unternehmen und Teams.
              Sauber gebaut. Schnell live. Wartbar weiterentwickelt.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-cyan-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-sm font-medium text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/produkte"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  Produkte
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/referenzen"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  Referenzen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  Über FLX-Software
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="mb-6 text-sm font-medium text-white uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/sicherheit"
                    className="text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    Sicherheit & DSGVO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info@flx-software.de"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
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

