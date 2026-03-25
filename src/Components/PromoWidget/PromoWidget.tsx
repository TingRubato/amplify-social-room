import { useCallback, useEffect, useRef, useState } from "react";
import "./PromoWidget.css";

const STOP_STRUGGLING_URL = "https://stopstruggling.evonneweinhaus.com";
const STORAGE_KEY = "evonne-promo-dismissed-at";
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000;
const SCROLL_THRESHOLD = 0.12;
const IDLE_DELAY_MS = 5000;

const isDismissedRecently = (): boolean => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const t = Number.parseInt(raw, 10);
    if (Number.isNaN(t)) return false;
    return Date.now() - t < DISMISS_MS;
  } catch {
    return false;
  }
};

const PromoWidget = () => {
  const [peelVisible, setPeelVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggeredRef = useRef(false);

  const triggerShow = useCallback(() => {
    if (triggeredRef.current || isDismissedRecently()) return;
    triggeredRef.current = true;
    setPeelVisible(true);
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen]);

  useEffect(() => {
    if (isDismissedRecently()) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) {
        triggerShow();
        return;
      }
      const ratio = window.scrollY / max;
      if (ratio >= SCROLL_THRESHOLD) triggerShow();
    };

    idleTimerRef.current = setTimeout(triggerShow, IDLE_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [triggerShow]);

  const dismissForWeek = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setPeelVisible(false);
    setPanelOpen(false);
  };

  const closePanelOnly = () => setPanelOpen(false);

  if (!peelVisible) return null;

  return (
    <div className="promo-widget" data-visible="true">
      {panelOpen && (
        <div
          id="promo-widget-panel"
          className="promo-widget__panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="promo-widget-title"
        >
          <span className="promo-widget__ribbon" aria-hidden>
            Parenting Toolkit
          </span>
          <button
            type="button"
            className="promo-widget__close-panel"
            onClick={closePanelOnly}
            aria-label="Close this message"
          >
            ×
          </button>
          <h2 id="promo-widget-title" className="promo-widget__title">
            Have the book already?
          </h2>
          <p className="promo-widget__hook">Wanna see More?</p>
          <p className="promo-widget__copy">
            Maximize connection with the Parenting Toolkit &amp; Parenting Video
            Series
          </p>
          <a
            className="promo-widget__cta"
            href={STOP_STRUGGLING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sure — open Parenting Toolkit and Parenting Video Series in a new tab"
          >
            Sure
          </a>
          <button
            type="button"
            className="promo-widget__dismiss"
            onClick={dismissForWeek}
          >
            Don&apos;t show again for a week
          </button>
        </div>
      )}

      <button
        type="button"
        className="promo-widget__tab"
        onClick={() => setPanelOpen((o) => !o)}
        aria-expanded={panelOpen}
        aria-controls={panelOpen ? "promo-widget-panel" : undefined}
        aria-label={
          panelOpen
            ? "Close Want More promotion"
            : "Open Want More promotion"
        }
      >
        <span className="promo-widget__tab-inner">
          <span className="promo-widget__bookmark-icon" aria-hidden />
          <span className="promo-widget__tab-label">Want More?</span>
        </span>
      </button>
    </div>
  );
};

export default PromoWidget;
