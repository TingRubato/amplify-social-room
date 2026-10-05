import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PromoConstellation.css";

type Offer = {
  label: string;
  badge: string;
  strike?: string;
  title: string;
  sub: string;
  cta: string;
  href: string;
  accent: string;
  x: number; // SVG viewBox units (0-100)
  y: number; // SVG viewBox units (0-60)
};

const OFFERS: Offer[] = [
  {
    label: "Free lesson",
    badge: "Free lesson",
    title: "The 5-Second Language Shift",
    sub: "Spot your teen's strength, even when they give you nothing. Free worksheet + video.",
    cta: "Get the free lesson",
    href: "https://stopstruggling.evonneweinhaus.com/free-preview.html",
    accent: "#98DDDF",
    x: 14,
    y: 14,
  },
  {
    label: "Parenting Toolkit",
    badge: "$47",
    strike: "$289",
    title: "Minimize Conflict. Maximize Connection.",
    sub: "S.O.S. Parenting Toolkit: book, 16 worksheets, audios, bonus trainings. Video Series $147.",
    cta: "Get the Toolkit",
    href: "https://stopstruggling.evonneweinhaus.com/",
    accent: "#FFBE98",
    x: 86,
    y: 18,
  },
  {
    label: "Video Series upgrade",
    badge: "Toolkit owners · +$100",
    title: "Add the Full Video Series",
    sub: "16 short videos, 2+ hours, lifetime access, 5+ bonuses.",
    cta: "Upgrade my Toolkit",
    href: "https://upsell.evonneweinhaus.com/",
    accent: "#a95aec",
    x: 48,
    y: 50,
  },
];

const LINES: [number, number][] = [[0, 1], [1, 2], [2, 0]];
const SEQUENCE = [0, 1, 0, 2]; // free is the hook: it comes back between every other offer
const DWELL = [7, 7, 7, 5]; // seconds per SEQUENCE step
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function buildMorse(target: Element) {
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
  "...---...".split("").forEach((c, i) => {
    const hold = c === "." ? 0.12 : 0.36;
    tl.to(target, { opacity: 1, attr: { r: 3.5 }, duration: 0.04 })
      .to(target, { opacity: 0, attr: { r: 2 }, duration: 0.08 }, `+=${hold}`)
      .to({}, { duration: i === 2 || i === 5 ? 0.36 : 0.12 });
  });
  return tl;
}

const PromoConstellation: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const prevRef = useRef(0);
  const stepRef = useRef(0);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);
  const userPausedRef = useRef(false);
  const introDoneRef = useRef(false);
  const callRef = useRef<gsap.core.Tween | null>(null);
  const morseRef = useRef<gsap.core.Timeline | null>(null);
  const introRef = useRef<gsap.core.Timeline | null>(null);

  const arm = () => {
    callRef.current?.kill();
    if (REDUCE || !introDoneRef.current || hoverRef.current || focusRef.current || userPausedRef.current) return;
    callRef.current = gsap.delayedCall(DWELL[stepRef.current], () => {
      stepRef.current = (stepRef.current + 1) % SEQUENCE.length;
      setActive(SEQUENCE[stepRef.current]);
      arm();
    });
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    introDoneRef.current = false;
    const q = gsap.utils.selector(root);
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      gsap.set(cards, { autoAlpha: 0 });
      if (REDUCE) {
        gsap.set(cards[0], { autoAlpha: 1 });
        return;
      }
      morseRef.current = buildMorse(q(".promo__pulse")[0]);
      gsap.set(q(".promo__dot"), { scale: 0 });
      gsap.set(q(".promo__line"), { strokeDashoffset: 1 });
      const free = OFFERS[0];
      introRef.current = gsap
        .timeline({
          delay: 2.4,
          onComplete: () => {
            introDoneRef.current = true;
            morseRef.current?.play(0);
            arm();
          },
        })
        .to(q(".promo__dot"), { scale: 1, duration: 0.5, ease: "back.out(3)", stagger: 0.12 }, 0)
        .to(q(".promo__line"), { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut", stagger: 0.15 }, 0.4)
        .fromTo(
          q(".promo__spark"),
          { attr: { cx: -10, cy: -10 }, opacity: 1 },
          { attr: { cx: free.x, cy: free.y }, duration: 0.4, ease: "power2.in" },
          1.1
        )
        .set(q(".promo__spark"), { opacity: 0 }, 1.5)
        .fromTo(
          q(".promo__flare"),
          { attr: { r: 2 }, opacity: 1 },
          { attr: { r: 10 }, opacity: 0, duration: 0.6, ease: "power2.out" },
          1.5
        )
        .fromTo(
          cards[0],
          { autoAlpha: 0, y: 12, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power3.out", clearProps: "filter" },
          1.4
        );
    }, root);
    return () => {
      callRef.current?.kill();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = active;
    if (prev === active) return;
    const from = cardRefs.current[prev];
    const to = cardRefs.current[active];
    if (REDUCE) {
      gsap.set(from, { autoAlpha: 0 });
      gsap.set(to, { autoAlpha: 1 });
      return;
    }
    const spark = rootRef.current?.querySelector(".promo__spark");
    const pulse = rootRef.current?.querySelector(".promo__pulse");
    if (spark) {
      gsap.fromTo(
        spark,
        { attr: { cx: OFFERS[prev].x, cy: OFFERS[prev].y }, opacity: 1 },
        { attr: { cx: OFFERS[active].x, cy: OFFERS[active].y }, duration: 0.5, ease: "power2.inOut", onComplete: () => { gsap.set(spark, { opacity: 0 }); } }
      );
    }
    gsap.to(from, { autoAlpha: 0, y: -8, duration: 0.25, ease: "power2.in" });
    gsap.fromTo(
      to,
      { autoAlpha: 0, y: 12, filter: "blur(6px)" },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.45, delay: 0.25, ease: "power3.out", clearProps: "filter" }
    );
    if (active === 0 && !userPausedRef.current) morseRef.current?.play(0);
    else {
      morseRef.current?.pause();
      if (pulse) gsap.set(pulse, { opacity: 0 });
    }
  }, [active]);

  const select = (i: number) => {
    introRef.current?.progress(1);
    stepRef.current = SEQUENCE.indexOf(i);
    setActive(i);
    arm();
  };

  const togglePause = () => {
    const next = !userPausedRef.current;
    userPausedRef.current = next;
    setUserPaused(next);
    if (next) {
      callRef.current?.kill();
      morseRef.current?.pause();
    } else {
      if (active === 0) morseRef.current?.play(0);
      arm();
    }
  };

  return (
    <aside
      ref={rootRef}
      className="promo"
      aria-label="Featured offers"
      onMouseEnter={() => { hoverRef.current = true; callRef.current?.kill(); }}
      onMouseLeave={() => { hoverRef.current = false; arm(); }}
      onFocus={() => { focusRef.current = true; callRef.current?.kill(); }}
      onBlur={(e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
        focusRef.current = false;
        arm();
      }}
    >
      <div className="promo__sky-wrap">
        <svg className="promo__sky" viewBox="0 0 100 60" aria-hidden="true">
          {LINES.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              className="promo__line"
              pathLength={1}
              x1={OFFERS[a].x}
              y1={OFFERS[a].y}
              x2={OFFERS[b].x}
              y2={OFFERS[b].y}
            />
          ))}
          <circle className="promo__pulse" cx={OFFERS[0].x} cy={OFFERS[0].y} r={2} />
          <circle className="promo__flare" cx={OFFERS[0].x} cy={OFFERS[0].y} r={2} />
          <circle className="promo__spark" cx={-10} cy={-10} r={1.2} />
        </svg>
        <div className="promo__stars">
          {OFFERS.map((o, i) => (
            <button
              key={o.label}
              type="button"
              className="promo__star"
              style={{ left: `${o.x}%`, top: `${(o.y / 60) * 100}%`, "--accent": o.accent } as React.CSSProperties}
              aria-pressed={active === i}
              aria-label={`Show: ${o.label}`}
              onClick={() => select(i)}
            >
              <span className="promo__dot" />
            </button>
          ))}
        </div>
        {!REDUCE && (
          <button
            type="button"
            className="promo__pause"
            aria-pressed={userPaused}
            aria-label={userPaused ? "Resume offer rotation" : "Pause offer rotation"}
            onClick={togglePause}
          >
            {userPaused ? "\u25B6" : "\u275A\u275A"}
          </button>
        )}
      </div>

      <div className="promo__cards">
        {OFFERS.map((o, i) => (
          <article
            key={o.label}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="promo__card"
            style={{ "--accent": o.accent } as React.CSSProperties}
            aria-hidden={active !== i}
          >
            <p className="promo__badge">
              {o.badge}
              {o.strike && <s className="promo__strike">{o.strike}</s>}
            </p>
            <h3 className="promo__title">{o.title}</h3>
            <p className="promo__sub">{o.sub}</p>
            <a className="promo__cta" href={o.href} target="_blank" rel="noopener noreferrer">
              {o.cta}
              <span className="promo__sr"> (opens in new tab)</span>
            </a>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default PromoConstellation;
