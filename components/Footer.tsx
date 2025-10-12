import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="mb-4 text-sm text-slate-600">
              Software, die arbeitet. Apps und Tools, die Probleme lösen – schnell, stabil,
              wartbar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-sky-500"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-sky-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-sky-500"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/leistungen"
                  className="text-slate-600 transition-colors hover:text-sky-500"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-slate-600 transition-colors hover:text-sky-500"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-slate-600 transition-colors hover:text-sky-500"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-slate-600 transition-colors hover:text-sky-500"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-slate-600 transition-colors hover:text-sky-500"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@flx-software.de"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-sky-500"
                >
                  <Mail size={16} />
                  info@flx-software.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            © {currentYear} FLX Software. Alle Rechte vorbehalten.{" "}
            <span className="inline-block text-xs text-slate-400">by Fabio Stöckle</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

