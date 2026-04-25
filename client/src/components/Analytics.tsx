import { useEffect } from "react";

const CONSENT_STORAGE_KEY = "wsc-cookie-consent";
const ANALYTICS_SCRIPT_ID = "wsc-analytics-script";

function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { analytics?: boolean };
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

function removeAnalyticsScript() {
  document.getElementById(ANALYTICS_SCRIPT_ID)?.remove();
}

export default function Analytics() {
  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

    if (!endpoint || !websiteId) {
      return;
    }

    const syncAnalytics = () => {
      if (!hasAnalyticsConsent()) {
        removeAnalyticsScript();
        return;
      }

      if (document.getElementById(ANALYTICS_SCRIPT_ID)) {
        return;
      }

      const script = document.createElement("script");
      script.id = ANALYTICS_SCRIPT_ID;
      script.defer = true;
      script.src = `${endpoint.replace(/\/$/, "")}/umami`;
      script.dataset.websiteId = websiteId;
      document.body.appendChild(script);
    };

    syncAnalytics();
    window.addEventListener("wsc-cookie-consent-changed", syncAnalytics);

    return () => {
      window.removeEventListener("wsc-cookie-consent-changed", syncAnalytics);
    };
  }, []);

  return null;
}
