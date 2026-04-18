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
const MAX_SPEED_PER_FRAME = 0.028; // slower transition
const SPRING_STRENGTH = 0.055;     // softer spring
const STEP_HOLD_MS = 6000;         // 6 seconds per step

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const targetStepRef = useRef(0);
  const displayStepRef = useRef(0);
  const stepStartTimeRef = useRef(0);
  const currentStepRef = useRef(0);
  // Timer only counts while section is visible
  const isVisibleRef = useRef(false);
  // Accumulated time actually spent viewing the current step
  const accruedMsRef = useRef(0);
  // Timestamp when we last resumed (became visible)
  const visibleSinceRef = useRef(0);

  const applyFrame = (displayStep: number) => {
    steps.forEach((_, i) => {
      const el = panelRefs.current[i];
      if (!el) return;
      const delta = i - displayStep;
      const rotateX = delta * DEG_PER_STEP;
      const absDelta = Math.abs(delta);
      const opacity = Math.max(0, 1 - Math.pow(absDelta, 1.6) * 2.2);
      el.style.transform = `rotateX(${rotateX}deg)`;
      el.style.opacity = String(opacity);
      el.classList.toggle('is-active', absDelta < 0.5);
    });

    const activeIndex = Math.round(displayStep);
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

  const goToStep = (n: number) => {
    targetStepRef.current = n;
    currentStepRef.current = n;
    accruedMsRef.current = 0;
    if (isVisibleRef.current) {
      visibleSinceRef.current = performance.now();
    }
  };

  useEffect(() => {
    applyFrame(0);

    // IntersectionObserver — start/pause timer based on visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        const now = performance.now();
        if (entry.isIntersecting) {
          // Resume: record when we became visible
          isVisibleRef.current = true;
          visibleSinceRef.current = now;
        } else {
          // Pause: bank the time spent visible so far
          if (isVisibleRef.current) {
            accruedMsRef.current += now - visibleSinceRef.current;
          }
          isVisibleRef.current = false;
        }
      },
      { threshold: 0.4 } // at least 40% of section must be visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const tick = () => {
      const now = performance.now();
      let display = displayStepRef.current;
      const target = targetStepRef.current;

      // Smooth display toward target
      const rawDelta = target - display;
      const capped = Math.max(-MAX_SPEED_PER_FRAME, Math.min(MAX_SPEED_PER_FRAME, rawDelta));
      display += capped;
      if (Math.abs(target - display) > 0.001) {
        display += (target - display) * SPRING_STRENGTH;
      } else {
        display = target;
      }
      displayStepRef.current = display;
      applyFrame(display);

      // Only count down and advance when the section is visible
      if (isVisibleRef.current) {
        const settled = Math.abs(display - target) < 0.02;
        if (settled) {
          const viewingMs = accruedMsRef.current + (now - visibleSinceRef.current);
          const progress = Math.min(1, viewingMs / STEP_HOLD_MS);

          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }

          if (viewingMs >= STEP_HOLD_MS) {
            goToStep((currentStepRef.current + 1) % steps.length);
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

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

        <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '1rem' }}>
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
                style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.2em', transition: 'color 0.4s ease, opacity 0.4s ease' }}
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

        {/* Progress bar — only fills while section is in view */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '3rem', overflow: 'hidden' }}>
          <div ref={progressBarRef} style={{ height: '100%', width: '0%', background: 'var(--accent)', opacity: 0.45 }} />
        </div>

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
                        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>{d}</span>
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
