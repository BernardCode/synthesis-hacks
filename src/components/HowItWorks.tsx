'use client';

import { useEffect, useRef, useState } from 'react';

/* ─── ICONS ─── */

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
      <line x1="22" y1="35" x2="33" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.28" strokeLinecap="round" />
      <line x1="58" y1="35" x2="47" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.28" strokeLinecap="round" />
    </svg>
  );
}

function HackSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="64" height="64" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.08" />
      <polyline points="8,25 20,25 20,18 36,18" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.28" strokeLinecap="square" />
      <polyline points="44,18 60,18 60,25 72,25" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.28" strokeLinecap="square" />
      <polyline points="8,55 20,55 20,62 36,62" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.28" strokeLinecap="square" />
      <polyline points="44,62 60,62 60,55 72,55" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.28" strokeLinecap="square" />
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
      <path d="M27 27 Q27 32 32 32" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.45" />
      <circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="40" cy="40" r="2.2" fill="currentColor" />
      <rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
      <rect x="69" y="4" width="7" height="7" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
      <rect x="4" y="69" width="7" height="7" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
      <rect x="69" y="69" width="7" height="7" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
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
      <text x="16" y="70" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.38">02</text>
      <text x="40" y="72" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.28">03</text>
      <text x="64" y="70" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.85">01</text>
      <line x1="64" y1="34" x2="64" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M57 18 L64 9 L71 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="64" cy="8" r="3" fill="currentColor" />
      <line x1="64" y1="3" x2="64" y2="5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="69.5" y1="4.5" x2="68" y2="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="58.5" y1="4.5" x2="60" y2="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M40 60 Q40 50 16 52" stroke="currentColor" strokeWidth="0.7" fill="none" strokeDasharray="2.5 3" opacity="0.22" />
      <path d="M40 60 Q52 52 54 44" stroke="currentColor" strokeWidth="0.7" fill="none" strokeDasharray="2.5 3" opacity="0.22" />
    </svg>
  );
}

const steps = [
  {
    number: '01',
    label: 'REGISTER',
    icon: <RegisterSVG />,
    title: 'Form your team',
    desc: 'Sign up solo or with a crew. No experience needed. We hold a team-matching session at the start so nobody arrives without collaborators.',
    details: ['Open to grades 9–12', 'Teams of 2–4', 'All skill levels welcome', 'Free to attend'],
  },
  {
    number: '02',
    label: 'HACK',
    icon: <HackSVG />,
    title: 'Build for 12 hours',
    desc: "Mentors are on-site the entire time. Workshops run throughout the event. Build an app, game, website, or anything. The only goal is to ship something that didn't exist before.",
    details: ['Mentors always available', 'Multiple workshops', 'Any project type', 'Free food & drinks'],
  },
  {
    number: '03',
    label: 'DEMO',
    icon: <DemoSVG />,
    title: 'Present & win prizes',
    desc: 'Science-fair style demos to a panel of judges. Multiple prize categories across design, technical depth, creativity, and beginner achievement. Walk away with real work and real connections.',
    details: ['Multiple prize categories', 'Judge panel presentation', 'Audience favorite award', 'Networking reception'],
  },
];

const DEG_PER_STEP = 70;

// Easing: slow near integer (facing) positions, fast between them.
// EASE_STRENGTH=0.82 → ~10x speed ratio between slow/fast zones.
const EASE_STRENGTH = 0.82;
function easedStep(raw: number): number {
  return raw - (EASE_STRENGTH / (2 * Math.PI)) * Math.sin(2 * Math.PI * raw);
}

// Max displayStep change per animation frame (~60fps)
const MAX_SPEED_PER_FRAME = 0.045;

// Spring that pulls displayStep toward nearest integer when scroll is idle.
// strength = fraction of distance closed per frame (0–1)
const SPRING_STRENGTH = 0.08;

export default function HowItWorks() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  // targetStep: where scroll says we should be (eased, uncapped)
  const targetStepRef = useRef(0);
  // displayStep: what's actually rendered (capped velocity + spring)
  const displayStepRef = useRef(0);
  // exitProgress: 0–1 for section exit ramp
  const exitProgressRef = useRef(0);
  // last time scroll fired, to detect idle
  const lastScrollTimeRef = useRef(0);
  // scrollStepRef kept for click handler compat
  const scrollStepRef = useRef(0);

  const applyFrame = (scrollStep: number, exitProgress: number) => {
    steps.forEach((_, i) => {
      const el = panelRefs.current[i];
      if (!el) return;
      const delta = i - scrollStep;
      const rotateX = delta * DEG_PER_STEP;

      // Opacity: stays near 1 when close to facing, drops sharply beyond ~0.4 steps.
      // Power curve keeps the facing panel bright and collapses others quickly.
      const absDelta = Math.abs(delta);
      const opacity = Math.max(0, 1 - Math.pow(absDelta, 1.6) * 2.2);

      // Exit: only lift/fade the active panel (last panel should NOT fade when scrolling past it)
      const exitY = absDelta < 0.01 ? -exitProgress * 50 : 0;

      el.style.transform = `rotateX(${rotateX}deg) translateY(${exitY}px)`;
      el.style.opacity = String(opacity);

      const isActive = Math.abs(delta) < 0.5;
      el.classList.toggle('is-active', isActive);
    });

    // Sync indicator bars
    const activeIndex = Math.round(scrollStep);
    document.querySelectorAll('.step-indicator-btn').forEach((btn, i) => {
      const isActive = i === activeIndex;
      btn.querySelector('.step-ind-label')?.setAttribute('data-active', String(isActive));
      const bar = btn.querySelector('.step-ind-bar') as HTMLElement | null;
      if (bar) {
        bar.style.width = isActive ? '52px' : '20px';
        bar.style.background = isActive ? 'var(--accent)' : 'rgba(255,255,255,0.1)';
      }
    });
  };

  useEffect(() => {
    applyFrame(0, 0);

    // Read scroll position → update targetStep and exitProgress
    const readScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScrollable);

      const stepEnd = 0.65;
      const stepProgress = Math.min(progress / stepEnd, 1);
      const rawStep = stepProgress * (steps.length - 1);
      targetStepRef.current = easedStep(rawStep);

      exitProgressRef.current = progress > stepEnd
        ? Math.min(1, (progress - stepEnd) / (1 - stepEnd))
        : 0;
    };

    const onScroll = () => {
      lastScrollTimeRef.current = performance.now();
      readScroll();
    };

    // Continuous animation loop — runs every frame regardless of scroll
    const tick = () => {
      const target = targetStepRef.current;
      let display = displayStepRef.current;
      const idleMs = performance.now() - lastScrollTimeRef.current;
      const isIdle = idleMs > 80; // ms since last scroll event

      // 1. Move display toward target, capped to MAX_SPEED_PER_FRAME
      const rawDelta = target - display;
      const capped = Math.max(-MAX_SPEED_PER_FRAME, Math.min(MAX_SPEED_PER_FRAME, rawDelta));
      display += capped;

      // 2. When scroll is idle, spring toward nearest integer (equilibrium)
      if (isIdle) {
        const nearest = Math.round(display);
        const clampedNearest = Math.max(0, Math.min(steps.length - 1, nearest));
        display += (clampedNearest - display) * SPRING_STRENGTH;
      }

      displayStepRef.current = display;
      scrollStepRef.current = display;
      applyFrame(display, exitProgressRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: '380vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          // NO overflow:hidden — it clips 3D-rotated panels
        }}
      >
        <div style={{ width: '100%', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

            {/* Section header */}
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

            {/* Step indicators — direct DOM manipulation keeps them in sync */}
            <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '3rem' }}>
              {steps.map((s, i) => (
                <button
                  key={s.number}
                  className="step-indicator-btn"
                  onClick={() => {
                    scrollStepRef.current = i;
                    applyFrame(i, 0);
                  }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', alignItems: 'flex-start' }}
                >
                  <span
                    className="step-ind-label"
                    data-active={i === 0 ? 'true' : 'false'}
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      transition: 'color 0.4s ease, opacity 0.4s ease',
                    }}
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

            {/* Stage — perspective wrapper, no overflow clip */}
            <div className="step-stage">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => { panelRefs.current[i] = el; }}
                  className="step-panel"
                  data-state="next"
                >
                  <div
                    className="step-content-grid"
                    style={{
                      display: 'grid',
                      alignItems: 'center',
                    }}
                  >
                    {/* Left: icon + detail list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ color: 'var(--accent)' }}>{step.icon}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {step.details.map((d) => (
                          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                              <rect x="0" y="0" width="8" height="8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
                              <rect x="2.5" y="2.5" width="3" height="3" fill="currentColor" opacity="0.55" />
                            </svg>
                            <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: title + description */}
                    <div>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: 'clamp(2rem, 4vw, 3rem)',
                          fontWeight: 300,
                          letterSpacing: '-0.025em',
                          lineHeight: 1.05,
                          marginBottom: '1.25rem',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '46ch', fontWeight: 300 }}>
                        {step.desc}
                      </p>
                      {i < steps.length - 1 && (
                        <div className="scroll-nudge" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem', opacity: 0.3 }}>
                          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, transparent, var(--accent))' }} />
                          <span style={{ fontSize: '0.58rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.16em', color: 'var(--accent)' }}>
                            SCROLL TO CONTINUE
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
