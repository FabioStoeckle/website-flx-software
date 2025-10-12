import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  const isDark = variant === "dark";
  const flxColor = isDark ? "#22D3EE" : "#22D3EE";
  const softwareColor = isDark ? "#0EA5E9" : "#0EA5E9";
  const textColor = isDark ? "#F8FAFC" : "#F8FAFC";

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <span
          className={`font-rajdhani font-bold text-${size === "sm" ? "xl" : size === "md" ? "2xl" : "3xl"} tracking-tight`}
          style={{ color: flxColor }}
        >
          FLX
        </span>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22D3EE" }} />
      </div>
      <span
        className={`font-rajdhani font-medium text-${size === "sm" ? "xs" : size === "md" ? "sm" : "base"} tracking-wide`}
        style={{ color: isDark ? "#0EA5E9" : "#0EA5E9" }}
      >
        SOFTWARE
      </span>
    </div>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FLX Icon"
    >
      <rect width="100" height="100" rx="12" fill="#111827" />
      <text
        x="50"
        y="65"
        fontFamily="Rajdhani, system-ui, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#22D3EE"
        textAnchor="middle"
        letterSpacing="-0.02em"
      >
        FLX
      </text>
      <circle cx="85" cy="20" r="5" fill="#22D3EE" />
    </svg>
  );
}

export function AppIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ backgroundColor: "#111827" }}
    >
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div
            className="font-rajdhani font-bold text-white"
            style={{
              fontSize: "clamp(20px, 4vw, 32px)",
              color: "#22D3EE",
            }}
          >
            FLX
          </div>
        </div>
      </div>
      <div
        className="absolute top-2 right-2 h-3 w-3 rounded-full"
        style={{ backgroundColor: "#22D3EE" }}
      />
    </div>
  );
}

