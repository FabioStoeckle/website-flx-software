"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getConsentFromStorage, isStatisticsEnabled } from "@/lib/consent";

export function VercelAnalyticsGate() {
  const [statisticsAllowed, setStatisticsAllowed] = useState(false);

  useEffect(() => {
    const update = () => {
      const consent = getConsentFromStorage();
      setStatisticsAllowed(isStatisticsEnabled(consent));
    };

    update();

    window.addEventListener("flx-consent-changed", update);
    return () => window.removeEventListener("flx-consent-changed", update);
  }, []);

  if (!statisticsAllowed) return null;
  return <Analytics />;
}

