"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BarChart3, ShieldCheck } from "lucide-react";
import { buildConsentAccept, buildConsentReject, getConsentFromStorage, saveConsentToStorage, type ConsentState } from "@/lib/consent";

function focusFirstFocusable(panel: HTMLElement | null) {
  if (!panel) return;
  const focusable = panel.querySelector<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])");
  focusable?.focus?.();
}

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = getConsentFromStorage();
    if (stored) setConsent(stored);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (consent) return;
    focusFirstFocusable(panelRef.current);
  }, [consent, mounted]);

  const hasDecided = Boolean(consent);

  const decide = (next: ConsentState) => {
    saveConsentToStorage(next);
    setConsent(next);
    window.dispatchEvent(new Event("flx-consent-changed"));
  };

  const handleKeyDown = (e: { key: string; shiftKey: boolean; preventDefault: () => void }) => {
    if (e.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])")
    ).filter((el) => !el.hasAttribute("disabled"));

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    }
  };

  if (hasDecided) return null;

  return (
    <>
      {/* Blocking layer: prevents any interaction until the user decides. */}
      <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed bottom-0 left-0 right-0 z-[70] px-4 pb-4">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="flx-consent-in glass w-full max-w-6xl mx-auto rounded-2xl border border-white/10 p-5 sm:p-6"
          onKeyDown={handleKeyDown}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-flx-cyan/15 ring-1 ring-flx-cyan/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-flx-cyan" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h2 id="cookie-consent-title" className="text-lg sm:text-xl font-medium text-white">
                    Datenschutz & Cookies
                  </h2>
                  <p className="mt-2 text-sm sm:text-[15px] text-gray-300 leading-relaxed">
                    Wir verwenden nur die notwendigen Technologien, um die Website bereitzustellen. Optional
                    aktivieren wir Analysefunktionen, damit wir die Nutzung besser verstehen und verbessern können.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 flex-shrink-0">
                  <BarChart3 className="h-4 w-4 text-flx-cyan" aria-hidden="true" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Du kannst <span className="text-gray-300">Akzeptieren</span> oder{" "}
                  <span className="text-gray-300">Ablehnen</span>. Details findest du in unserer{" "}
                  <Link href="/datenschutz" className="text-flx-cyan hover:underline transition-colors">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                className="raycast-button w-full sm:w-auto px-6 py-3 text-sm font-medium text-white smooth-transition"
                onClick={() => decide(buildConsentAccept())}
              >
                Akzeptieren
              </button>

              <button
                type="button"
                className="raycast-button w-full sm:w-auto px-6 py-3 text-sm font-medium text-white smooth-transition"
                onClick={() => decide(buildConsentReject())}
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

