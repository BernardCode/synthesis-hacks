'use client';

import { useEffect, useRef, useState } from 'react';

type Event = { time: string; label: string; desc: string };

const events: Event[] = [
  { time: '8:00 AM',  label: 'Doors open',         desc: 'Check in, grab breakfast, meet your team.' },
  { time: '9:00 AM',  label: 'Opening ceremony',   desc: 'Welcome, rules of the day, sponsor intros.' },
  { time: '9:30 AM',  label: 'Hacking begins',     desc: 'Start building. Mentors are around from this point on.' },
  { time: '12:00 PM', label: 'Lunch',              desc: 'Catered lunch. Take a break, talk to people, keep going.' },
  { time: '1:00 PM',  label: 'Workshops',          desc: 'Optional skill sessions run in parallel. Drop in or keep building.' },
  { time: '5:00 PM',  label: 'Submissions due',    desc: 'Final code freeze. Submit your project for judging.' },
  { time: '5:30 PM',  label: 'Demos begin',        desc: 'Show your project to the judges, science-fair style. Each team gets a slot.' },
  { time: '7:30 PM',  label: 'Awards ceremony',    desc: 'Prizes, thank-yous, closing remarks.' },
  { time: '8:00 PM',  label: 'Doors close',        desc: 'Pack up, trade contacts, head home.' },
];

export default function Agenda() {
  const sectionRef  = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef     = useRef<HTMLDivElement>(null);
  const cometRef    = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());

  // Scroll-driven line fill and active dot detection
  useEffect(() => {
    const onScroll = () => {
      const tl    = timelineRef.current;
      const fill  = fillRef.current;
      const comet = cometRef.current;
      if (!tl || !fill) return;

      const rect     = tl.getBoundingClientRect();
      const targetY  = window.innerHeight * 0.45;
      const relY     = targetY - rect.top;
      const progress = Math.max(0, Math.min(1, relY / rect.height));

      fill.style.height = `${progress * 100}%`;

      if (comet) {
        const cometY = progress * rect.height;
        comet.style.transform = `translateY(${cometY}px)`;
        comet.style.opacity = progress > 0.01 && progress < 0.99 ? '1' : '0';
      }

      const rows = tl.querySelectorAll<HTMLElement>('.agenda-row');
      let newActive = -1;
      rows.forEach((row, i) => {
        const rr = row.getBoundingClientRect();
        if (rr.top + 14 < targetY) newActive = i;
      });
      setActiveIndex(newActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Row entry - uses state + inline transition (NOT a keyframe animation).
  // Keyframe animations can restart on React re-renders; inline transitions
  // simply animate between states and won't re-trigger once the target state
  // is reached. Observer only adds to the Set, never removes - so once a
  // row is visible, its props never change.
  useEffect(() => {
    const rows = timelineRef.current?.querySelectorAll<HTMLElement>('.agenda-row');
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setVisibleRows((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="schedule" style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient accent glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'var(--accent)',
        filter: 'blur(140px)',
        opacity: 0.04,
        top: '20%',
        left: '-150px',
        pointerEvents: 'none',
      }} />

      <style jsx>{`
        @keyframes cometTrail {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.15); opacity: 0.7; }
        }

        .agenda-row.active .agenda-card {
          border-color: var(--border-accent) !important;
          background: linear-gradient(135deg, var(--bg-card) 0%, rgba(196,255,80,0.04) 100%) !important;
          transform: translateX(6px);
          box-shadow: -4px 0 24px rgba(196, 255, 80, 0.06);
        }
        .agenda-row.active .agenda-label { color: var(--text-primary) !important; }
        .agenda-row.active .agenda-time  { color: var(--accent) !important; }
        .agenda-row.active .agenda-dot-inner {
          transform: translate(-50%, -50%) scale(1.4);
          background: var(--accent) !important;
        }
        .agenda-row.active .agenda-dot-outer {
          border-color: var(--accent) !important;
        }
        .agenda-row.active .dot-ring-active {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1.5) !important;
        }
        .agenda-row:hover .agenda-card {
          transform: translateX(6px);
          border-color: var(--border-accent);
        }
      `}</style>

      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Schedule
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}
          >
            May 23rd,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>minute by minute.</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
            Google Humboldt · 1225 Crossman Ave, Sunnyvale · 3rd Floor · 8 AM to 8 PM
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '3.5rem' }}>

          {/*
            LINE: 2px wide column, positioned at left:14px so its center X = 15px.
            Starts at top:15px (the y-center of the first dot) and ends 15px before bottom.
          */}
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '15px',
            bottom: '15px',
            width: '2px',
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            {/* Base dim track */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '2px',
            }} />
            {/* Filled lime progress */}
            <div
              ref={fillRef}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '0%',
                background: 'linear-gradient(to bottom, #c4ff50, #c4ff50 85%, rgba(196,255,80,0.3))',
                borderRadius: '2px',
                boxShadow: '0 0 14px rgba(196, 255, 80, 0.45), 0 0 30px rgba(196, 255, 80, 0.18)',
                transition: 'height 0.12s linear',
                willChange: 'height',
              }}
            />
            {/* Comet head */}
            <div
              ref={cometRef}
              style={{
                position: 'absolute',
                left: '-4px',
                top: '-5px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#c4ff50',
                boxShadow: '0 0 18px 4px rgba(196, 255, 80, 0.65), 0 0 40px 8px rgba(196, 255, 80, 0.25)',
                animation: 'cometTrail 1.4s ease-in-out infinite',
                opacity: 0,
                willChange: 'transform, opacity',
              }}
            />
          </div>

          {/* Event rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((ev, i) => {
              const isActive  = i === activeIndex;
              const isVisible = visibleRows.has(i);
              return (
                <div
                  key={i}
                  data-idx={i}
                  className={`agenda-row ${isActive ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingBottom: '1.75rem',
                    position: 'relative',
                    // Entry uses inline transition (NOT @keyframes) so React
                    // re-renders can't restart it. Once isVisible flips to
                    // true, props stop changing for this row.
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                  }}
                >
                  {/*
                    DOT wrapper at left:-50px (so dot center lands on line center at 15px from timeline edge).
                    Top:6px so dot center y = 15px (matches line's top:15px start).
                    All children use identical top/left/translate for perfect concentric centering.
                  */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-50px',
                      top: '6px',
                      width: '18px',
                      height: '18px',
                      zIndex: 2,
                      pointerEvents: 'none',
                    }}
                  >
                    {/* Outer ring */}
                    <div
                      className="agenda-dot-outer"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: `1.5px solid ${isActive ? 'var(--accent)' : 'rgba(255,255,255,0.25)'}`,
                        background: 'transparent',
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        transition: 'border-color 0.4s',
                      }}
                    />
                    {/* Inner pellet */}
                    <div
                      className="agenda-dot-inner"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'background 0.4s, transform 0.4s',
                      }}
                    />
                    {/* Active-state pulse ring */}
                    <div
                      className="dot-ring-active"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: '1.5px solid var(--accent)',
                        boxSizing: 'border-box',
                        opacity: 0,
                        transform: 'translate(-50%, -50%) scale(0.5)',
                        transition: 'opacity 0.5s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ paddingLeft: '1.5rem', display: 'flex', gap: '1.25rem', flex: 1 }}>
                    <div
                      className="agenda-time"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                        minWidth: '72px',
                        paddingTop: '8px',
                        transition: 'color 0.3s',
                        flexShrink: 0,
                      }}
                    >
                      {ev.time}
                    </div>

                    <div
                      className="agenda-card"
                      style={{
                        flex: 1,
                        padding: '0.95rem 1.2rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div
                        className="agenda-label"
                        style={{
                          fontSize: '1rem',
                          fontWeight: 400,
                          color: 'var(--text-muted)',
                          marginBottom: '0.3rem',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.3s',
                        }}
                      >
                        {ev.label}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        {ev.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary footer */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          padding: '1.25rem 1.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--accent)' }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M12 7 V12 L15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>DURATION</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>12 hours</div>
            </div>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--accent)' }}>
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div>
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>MILESTONES</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{events.length} events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
