import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  // We ship brand assets via `public/brand/*` so this works with the static export.
  // Navigation uses `sm`, so we make that explicitly larger for top-left.
  const src = "/brand/flx-logo-top-left.png";
  const heightPx = size === "sm" ? 34 : size === "md" ? 42 : 56;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt="FLX-Software"
        style={{ height: heightPx, width: "auto", display: "block" }}
        loading="eager"
      />
    </div>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/flx-webicon.png"
      alt="FLX Icon"
      className={className}
      style={{ width: 32, height: 32, borderRadius: 10, display: "block" }}
      loading="eager"
    />
  );
}

export function AppIcon({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ width: 96, height: 96 }}>
      <img
        src="/brand/flx-webicon.png"
        alt="FLX App Icon"
        style={{ width: "100%", height: "100%", borderRadius: 20, display: "block" }}
        loading="eager"
      />
    </div>
  );
}

