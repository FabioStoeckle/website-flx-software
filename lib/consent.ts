export type ConsentCategory = "essential" | "statistics" | "marketing";

export type ConsentPreferences = Record<ConsentCategory, boolean>;

export type ConsentState = {
  version: 1;
  categories: ConsentPreferences;
  decidedAt: string; // ISO string
};

export const CONSENT_VERSION = 1 as const;
export const CONSENT_STORAGE_KEY = "flx_consent_v1";
export const CONSENT_COOKIE_KEY = "flx_consent_v1";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 Jahr

export function getConsentFromStorage(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed?.version !== 1) return null;
    if (!parsed?.categories) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsentToStorage(state: ConsentState) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore (e.g. privacy mode)
  }

  try {
    const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
    const cookieValue = encodeURIComponent(JSON.stringify(state));
    document.cookie = `${CONSENT_COOKIE_KEY}=${cookieValue}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${
      isHttps ? "; Secure" : ""
    }`;
  } catch {
    // ignore
  }
}

export function buildConsentAccept(): ConsentState {
  return {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    categories: {
      essential: true,
      statistics: true,
      marketing: false,
    },
  };
}

export function buildConsentReject(): ConsentState {
  return {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    categories: {
      essential: true,
      statistics: false,
      marketing: false,
    },
  };
}

export function isStatisticsEnabled(consent: ConsentState | null) {
  return Boolean(consent?.categories?.statistics);
}

