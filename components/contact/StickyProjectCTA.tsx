"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function StickyProjectCTA() {
  const pathname = usePathname();

  // Auf der Kontakt-Seite ist der CTA ohnehin direkt im Content vorhanden.
  if (pathname === "/kontakt") return null;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto">
      <button
        type="button"
        className="pointer-events-auto raycast-button w-full sm:w-auto px-5 py-3 text-base font-medium text-white smooth-transition inline-flex items-center justify-center gap-2"
        aria-label="Projekt anfragen"
        onClick={() => {
          const el = document.getElementById("kontakt-anfrage");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
          window.location.href = "/kontakt";
        }}
      >
        Projekt anfragen
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

