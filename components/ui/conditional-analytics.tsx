"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

const COOKIE_CONSENT_KEY = "corweb-cookie-consent";

export function ConditionalAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      setHasConsent(consent === "accepted");
    };

    // Check on mount
    checkConsent();

    // Listen for storage changes (in case consent is updated in another tab or by cookie banner)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === COOKIE_CONSENT_KEY) {
        checkConsent();
      }
    };

    // Also listen for custom event from cookie banner
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cookie-consent-changed", handleConsentChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookie-consent-changed", handleConsentChange);
    };
  }, []);

  if (!hasConsent) return null;

  return <Analytics />;
}

