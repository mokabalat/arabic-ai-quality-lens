import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Public browser measurement ID; no server or secret-backed request is needed. */
export function Analytics() {
  const { href } = useLocation();
  useEffect(() => {
    const measurementId = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY'];
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });
    }
    window.gtag("event", "page_view", {
      page_path: href,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [href]);
  return null;
}