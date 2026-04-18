'use client';

import { useEffect, useRef } from 'react';

function RegisterSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.12" />
      <polygon points="40,14 62,27 62,53 40,66 18,53 18,27" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.22" />
      <circle cx="40" cy="29" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M20 60 C20 47 28 40 40 40 C52 40 60 47 60 60" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="17" cy="34" r="4.5" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.45" />
      <path d="M6 54 C6 46 11 42 17 42 C22 42 26 45 27 49" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round" />
      <circle cx="63" cy="34" r="4.5" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.45" />
      <path d="M74 54 C74 46 69 42 63 42 C58 42 54 45 53 49" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round" />
    </svg>
  );
}

function HackSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="64" height="64" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.08" />
      <rect x="27" y="27" width="26" height="26" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.06" />
      <line x1="18" y1="33" x2="27" y2="33" stroke="currentColor" strokeWidth="1.2" />
      <line x1="18" y1="40" x2="27" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="18" y1="47" x2="27" y2="47" stroke="currentColor" strokeWidth="1.2" />
      <line x1="53" y1="33" x2="62" y2="33" stroke="currentColor" strokeWidth="1.2" />
      <line x1="53" y1="40" x2="62" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="53" y1="47" x2="62" y2="47" stroke="currentColor" strokeWidth="1.2" />
      <line x1="33" y1="18" x2="33" y2="27" stroke="currentColor" strokeWidth="1.2" />
      <line x1="40" y1="18" x2="40" y2="27" stroke="currentColor" strokeWidth="1.2" />
      <line x1="47" y1="18" x2="47" y2="27" stroke="currentColor" strokeWidth="1.2" />
      <line x1="33" y1="53" x2="33" y2="62" stroke="currentColor" strokeWidth="1.2" />
      <line x1="40" y1="53" x2="40" y2="62" stroke="currentColor" strokeWidth="1.2" />
      <line x1="47" y1="53" x2="47" y2="62" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="40" cy="40" r="2.2" fill="currentColor" />
    </svg>
  );
}

function DemoSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <line x1="4" y1="74" x2="76" y2="74" stroke="currentColor" strokeWidth="0.8" opacity="0.18" />
      <rect x="6" y="50" width="20" height="24" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.38" />
      <rect x="30" y="60" width="20" height="14" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.28" />
      <rect x="54" y="36" width="20" height="38" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <line x1="64" y1="34" x2="64" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M57 18 L64 9 L71 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="64" cy="8" r="3" fill="currentColor" />
    </svg>
  );
}

const steps = [
  {
    number: '01',
    label: 'REGISTER',
    icon: <RegisterSVG />,
    title: 'Form your team',
    desc: 'Sign up alone or bring friends. No experience needed. We run a team-matching session at the start so nobody arrives without a team.',
    details: ['Grades 9 through 12', 'Teams of 2 to 4', 'All skill levels welcome', 'Free to attend'],
  },
  {
    number: '02',
    label: 'HACK',
    icon: <HackSVG />,
    title: 'Build for 12 hours',
    desc: "Mentors are here the whole time. Workshops run in parallel. Build an app, game, website, or anything else. Just make something that didn't exist this morning.",
    details: ['Mentors always available', 'Multiple workshops', 'Any project type', 'Free food & drinks'],
  },
  {
    number: '03',
    label: 'DEMO',
    icon: <DemoSVG />,
    title: 'Present & win prizes',
    desc: 'Show your project to a panel of judges, science-fair style. Prize categories cover design, technical depth, creativity, and first-time builders. You leave with finished work and new friends.',
    details: ['Multiple prize categories', 'Judge panel presentation', 'Audience favorite award', 'Networking reception'],
  },
];

const DEG_PER_STEP   = 70;
const MAX_SPEED      = 0.018;   // slower flip
const SPRING         = 0.038;   // softer spring
const STEP_HOLD_MS   = 8000;    // 8 seconds per step

export default function HowItWorks() {
  const sectionRef     = useRef<HTMLElement>(null);
  const panelRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef         = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const prevBtnRef     = useRef<HTMLButtonElement>(null);
  const nextBtnRef     = useRef<HTMLButtonElement>(null);

  const targetRef      = useRef(0);
  const displayRef     = useRef(0);
  const currentRef     = useRef(0);
  const isVisibleRef   = useRef(false);
  const accruedRef     = useRef(0);
  const visibleSince   = useRef(0);

  // ── render one animation frame ──────────────────────────────
  const applyFrame = (d: number) => {
    steps.forEach((_, i) => {
      const el = panelRefs.current[i];
      if (!el) return;
      const delta   = i - d;
      const rotateX = delta * DEG_PER_STEP;
      const opacity = Math.max(0, 1 - Math.pow(Math.abs(delta), 1.6) * 2.2);
      el.style.transform = `rotateX(${rotateX}deg)`;
      el.style.opacity   = String(opacity);
      el.classList.toggle('is-active', Math.abs(delta) < 0.5);
    });

    const active = Math.round(d);
    document.querySelectorAll('.step-indicator-btn').forEach((btn, i) => {
      const on = i === active;
      btn.querySelector('.step-ind-label')?.setAttribute('data-active', String(on));
      const bar = btn.querySelector('.step-ind-bar') as HTMLElement | null;
      if (bar) {
        bar.style.width      = on ? '52px' : '20px';
        bar.style.background = on ? 'var(--accent)' : 'rgba(255,255,255,0.1)';
      }
    });

    // arrow button opacity
    if (prevBtnRef.current) prevBtnRef.current.style.opacity = active === 0 ? '0.25' : '1';
    if (nextBtnRef.current) nextBtnRef.current.style.opacity = active === steps.length - 1 ? '0.25' : '1';
  };

  // ── jump to a step (resets timer) ───────────────────────────
  const goToStep = (n: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, n));
    targetRef.current  = clamped;
    currentRef.current = clamped;
    accruedRef.current = 0;
    if (isVisibleRef.current) visibleSince.current = performance.now();
  };

  useEffect(() => {
    applyFrame(0);

    // ── IntersectionObserver: require 60% visible before starting ──
    const observer = new IntersectionObserver(
      ([entry]) => {
        const now = performance.now();
        if (entry.isIntersecting) {
          isVisibleRef.current  = true;
          visibleSince.current  = now;
        } else {
          if (isVisibleRef.current) {
            accruedRef.current += now - visibleSince.current;
          }
          isVisibleRef.current = false;
        }
      },
      { threshold: 0.6 }   // 60% - user is clearly looking at it
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // ── rAF loop ────────────────────────────────────────────────
    const tick = () => {
      const now    = performance.now();
      let   disp   = displayRef.current;
      const target = targetRef.current;

      const delta  = target - disp;
      const capped = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, delta));
      disp += capped;
      if (Math.abs(target - disp) > 0.0005) {
        disp += (target - disp) * SPRING;
      } else {
        disp = target;
      }
      displayRef.current = disp;
      applyFrame(disp);

      if (isVisibleRef.current) {
        const settled = Math.abs(disp - target) < 0.02;
        if (settled) {
          const elapsed  = accruedRef.current + (now - visibleSince.current);
          const progress = Math.min(1, elapsed / STEP_HOLD_MS);
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }
          if (elapsed >= STEP_HOLD_MS) {
            goToStep((currentRef.current + 1) % steps.length);
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── arrow button style ───────────────────────────────────────
  const arrowStyle: React.CSSProperties = {
    background: 'none',
    border: '1px solid var(--border)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'border-color 0.2s, opacity 0.2s, background 0.2s',
    flexShrink: 0,
  };

  return (
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            How it works
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            The weekend,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>in three acts.</em>
          </h2>
        </div>

        {/* Controls row: indicators + arrows */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>

          {/* Step indicator tabs */}
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {steps.map((s, i) => (
              <button
                key={s.number}
                className="step-indicator-btn"
                onClick={() => goToStep(i)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', alignItems: 'flex-start' }}
              >
                <span
                  className="step-ind-label"
                  data-active={i === 0 ? 'true' : 'false'}
                  style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.74rem', letterSpacing: '0.2em', transition: 'color 0.4s ease, opacity 0.4s ease' }}
                >
                  {s.number} / {s.label}
                </span>
                <div
                  className="step-ind-bar"
                  style={{
                    height: '1px',
                    width: i === 0 ? '52px' : '20px',
                    background: i === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                    transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1), background 0.5s ease',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button
              ref={prevBtnRef}
              onClick={() => goToStep(currentRef.current - 1)}
              style={{ ...arrowStyle, opacity: 0.25 }}
              aria-label="Previous step"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'none'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              ref={nextBtnRef}
              onClick={() => goToStep(currentRef.current + 1)}
              style={arrowStyle}
              aria-label="Next step"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'none'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '3rem', overflow: 'hidden' }}>
          <div ref={progressBarRef} style={{ height: '100%', width: '0%', background: 'var(--accent)', opacity: 0.45 }} />
        </div>

        {/* 3D stage */}
        <div className="step-stage">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { panelRefs.current[i] = el; }}
              className="step-panel"
            >
              <div className="step-content-grid" style={{ display: 'grid', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ color: 'var(--accent)' }}>{step.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {step.details.map((d) => (
                      <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <rect x="0" y="0" width="8" height="8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
                          <rect x="2.5" y="2.5" width="3" height="3" fill="currentColor" opacity="0.55" />
                        </svg>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '46ch', fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
