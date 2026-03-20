"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/produkte", label: "Produkte" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über FLX-Software" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full glass border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0" aria-label="FLX Software">
            <Logo variant="dark" size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400",
                  (pathname === item.href || (item.href === "/" && pathname === "/")) ? "text-cyan-400" : "text-gray-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/kontakt">
              <button className="raycast-button px-4 py-2 text-sm font-medium text-white">
                Projekt anfragen
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400",
                    (pathname === item.href || (item.href === "/" && pathname === "/")) ? "text-cyan-400" : "text-gray-300"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                <button className="raycast-button w-full px-4 py-2 text-sm font-medium text-white">
                  Projekt anfragen
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

