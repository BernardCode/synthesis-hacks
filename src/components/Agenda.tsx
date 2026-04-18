'use client';

import { useEffect, useRef, useState } from 'react';

type Event = { time: string; label: string; desc: string };

const events: Event[] = [
  { time: '8:00 AM',  label: 'Doors open',         desc: 'Check in, grab breakfast, and find your team.' },
  { time: '9:00 AM',  label: 'Opening ceremony',   desc: 'Welcome remarks, event rules, and sponsor introductions.' },
  { time: '9:30 AM',  label: 'Hacking begins',     desc: 'Build starts. Mentors are available from this moment.' },
  { time: '12:00 PM', label: 'Lunch',              desc: 'Catered lunch. Take a break, swap ideas, keep building.' },
  { time: '1:00 PM',  label: 'Workshops',          desc: 'Optional skill sessions running in parallel. Attend or keep building.' },
  { time: '5:00 PM',  label: 'Submissions due',    desc: 'Final code freeze. Submit your project to the judging panel.' },
  { time: '5:30 PM',  label: 'Demos begin',        desc: 'Science-fair style presentations. Each team gets time in front of judges.' },
  { time: '7:30 PM',  label: 'Awards ceremony',    desc: 'Prizes, acknowledgements, and closing remarks.' },
  { time: '8:00 PM',  label: 'Doors close',        desc: 'Wrap up, exchange contacts, and head home.' },
];

const KEY_EVENTS = new Set([2, 4, 7]);

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
      const tl   = timelineRef.current;
      const fill = fillRef.current;
      const comet = cometRef.current;
      if (!tl || !fill) return;

      const rect     = tl.getBoundingClientRect();
      const targetY  = window.innerHeight * 0.45;
      const relY     = targetY - rect.top;
      const progress = Math.max(0, Math.min(1, relY / rect.height));

      fill.style.height = `${progress * 100}%`;

      // Comet head position
      if (comet) {
        const cometY = progress * rect.height;
        comet.style.transform = `translateY(${cometY}px)`;
        comet.style.opacity = progress > 0.01 && progress < 0.99 ? '1' : '0';
      }

      // Find the latest dot above target line
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

  // Row entry observer — staggered fade-in
  useEffect(() => {
    const rows = timelineRef.current?.querySelectorAll<HTMLElement>('.agenda-row');
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setVisibleRows((prev) => new Set(prev).add(idx));
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
      {/* Ambient accent glow behind section */}
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
        @keyframes ringPulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
        }
        @keyframes dotGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196, 255, 80, 0); }
          50%      { box-shadow: 0 0 0 6px rgba(196, 255, 80, 0.12); }
        }
        @keyframes cometTrail {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.15); opacity: 0.7; }
        }
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .row-enter { opacity: 0; transform: translateX(-24px); }
        .row-visible { animation: rowSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .agenda-row.active .agenda-card {
          border-color: var(--border-accent) !important;
          background: linear-gradient(135deg, var(--bg-card) 0%, rgba(196,255,80,0.04) 100%) !important;
          transform: translateX(6px);
          box-shadow: -4px 0 24px rgba(196, 255, 80, 0.06);
        }
        .agenda-row.active .agenda-label {
          color: var(--text-primary) !important;
        }
        .agenda-row.active .agenda-time {
          color: var(--accent) !important;
        }
        .agenda-row.active .agenda-dot-inner {
          transform: scale(1.35);
          background: var(--accent) !important;
        }
        .agenda-row.active .dot-ring-active {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }
        .agenda-row:hover .agenda-card {
          transform: translateX(6px);
          border-color: var(--border-accent);
        }
        .agenda-row.key .agenda-dot-inner {
          background: var(--accent);
          animation: dotGlow 2.4s ease-in-out infinite;
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
            Google Humboldt · 1225 Crossman Ave, Sunnyvale · 3rd Floor · 8 AM – 8 PM
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '3.5rem' }}>

          {/*
            LINE LAYER: sits in its OWN column to the left of rows.
            Dots overlap it visually but do NOT have a solid bg to punch through.
          */}
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '6px',
            bottom: '6px',
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
            {/* Comet head — leads the fill as it moves */}
            <div
              ref={cometRef}
              style={{
                position: 'absolute',
                left: '-4px',
                top: 0,
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
              const isKey     = KEY_EVENTS.has(i);
              const isActive  = i === activeIndex;
              const isVisible = visibleRows.has(i);
              return (
                <div
                  key={i}
                  data-idx={i}
                  className={`agenda-row ${isKey ? 'key' : ''} ${isActive ? 'active' : ''} ${isVisible ? 'row-visible' : 'row-enter'}`}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingBottom: '1.75rem',
                    position: 'relative',
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {/*
                    DOT: NO solid background. Uses a ring (border only) so the
                    line behind it is visible through the hollow center,
                    eliminating the "gaps" problem entirely.
                  */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '6px',
                      top: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    {/* Outer ring — solid border, transparent interior */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: `1.5px solid ${isKey || isActive ? 'var(--accent)' : 'rgba(255,255,255,0.25)'}`,
                        background: 'transparent',
                        transition: 'border-color 0.4s',
                      }}
                    />
                    {/* Inner pellet */}
                    <div
                      className="agenda-dot-inner"
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: isKey ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 1,
                      }}
                    />
                    {/* Pulsing ring — active state */}
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
                        opacity: 0,
                        transform: 'translate(-50%, -50%) scale(0.5)',
                        transition: 'opacity 0.5s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    {/* Continuous key-event pulse */}
                    {isKey && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: '1.5px solid var(--accent)',
                        animation: 'ringPulse 2.4s ease-out infinite',
                        animationDelay: `${i * 0.4}s`,
                      }} />
                    )}
                  </div>

                  {/* Push content right past dot */}
                  <div style={{ paddingLeft: '1.5rem', display: 'flex', gap: '1.25rem', flex: 1 }}>
                    {/* Time */}
                    <div
                      className="agenda-time"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.82rem',
                        color: isKey ? 'var(--accent)' : 'var(--text-muted)',
                        letterSpacing: '0.04em',
                        minWidth: '72px',
                        paddingTop: '8px',
                        transition: 'color 0.3s',
                        flexShrink: 0,
                      }}
                    >
                      {ev.time}
                    </div>

                    {/* Card */}
                    <div
                      className="agenda-card"
                      style={{
                        flex: 1,
                        padding: '0.95rem 1.2rem',
                        background: isKey ? 'rgba(196, 255, 80, 0.025)' : 'var(--bg-card)',
                        border: `1px solid ${isKey ? 'var(--border-accent)' : 'var(--border)'}`,
                        borderRadius: '8px',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div
                        className="agenda-label"
                        style={{
                          fontSize: '1rem',
                          fontWeight: isKey ? 500 : 400,
                          color: isKey ? 'var(--text-primary)' : 'var(--text-muted)',
                          marginBottom: '0.3rem',
                          letterSpacing: '-0.01em',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          transition: 'color 0.3s',
                        }}
                      >
                        {ev.label}
                        {isKey && (
                          <span style={{
                            fontSize: '0.6rem',
                            fontFamily: 'DM Mono, monospace',
                            letterSpacing: '0.14em',
                            color: 'var(--accent)',
                            padding: '0.15rem 0.5rem',
                            border: '1px solid var(--border-accent)',
                            borderRadius: '3px',
                            background: 'rgba(196, 255, 80, 0.08)',
                          }}>
                            KEY
                          </span>
                        )}
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
          gap: '2rem',
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
          <div style={{ width: '1px', height: '30px', background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--accent)' }}>
              <path d="M12 2 L15 9 L22 9.5 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9.5 L9 9 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
            </svg>
            <div>
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>HIGHLIGHTS</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{KEY_EVENTS.size} key moments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
