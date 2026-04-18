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

// Indexes of "key" events that get highlighted
const KEY_EVENTS = new Set([2, 4, 6]);

export default function Agenda() {
  const sectionRef   = useRef<HTMLElement>(null);
  const timelineRef  = useRef<HTMLDivElement>(null);
  const fillRef      = useRef<HTMLDivElement>(null);
  const pulseRef     = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Scroll-driven line fill + active dot detection
  useEffect(() => {
    const onScroll = () => {
      const timeline = timelineRef.current;
      const fill     = fillRef.current;
      if (!timeline || !fill) return;

      const rect = timeline.getBoundingClientRect();
      // Target point is 40% from top of viewport — feels natural
      const targetY    = window.innerHeight * 0.4;
      const relativeY  = targetY - rect.top;
      const progress   = Math.max(0, Math.min(1, relativeY / rect.height));

      fill.style.height = `${progress * 100}%`;

      // Find the latest event dot above the target line
      const rows = timeline.querySelectorAll<HTMLElement>('.agenda-row');
      let newActive = -1;
      rows.forEach((row, i) => {
        const rowRect = row.getBoundingClientRect();
        if (rowRect.top + 14 < targetY) newActive = i;
      });
      setActiveIndex(newActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="schedule" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      {/* Section-specific styles */}
      <style jsx>{`
        @keyframes agendaPulse {
          0%   { transform: translateY(0); opacity: 0.9; }
          100% { transform: translateY(30px); opacity: 0; }
        }
        @keyframes agendaRingPulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
        @keyframes agendaSlideIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .agenda-row {
          animation: agendaSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .agenda-row.active .agenda-label {
          color: var(--text-primary) !important;
        }
        .agenda-row.active .agenda-time {
          color: var(--accent) !important;
        }
        .agenda-row.active .agenda-dot-outer {
          border-color: var(--accent) !important;
          background: rgba(196, 255, 80, 0.18) !important;
          box-shadow: 0 0 0 4px rgba(196, 255, 80, 0.08) !important;
        }
        .agenda-row.active .agenda-dot-inner {
          background: var(--accent) !important;
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        .agenda-row:hover .agenda-card {
          border-color: var(--border-accent);
          background: var(--bg-card-hover);
          transform: translateX(4px);
        }
        .agenda-row.key .agenda-dot-outer {
          border-color: var(--accent) !important;
          background: rgba(196, 255, 80, 0.12) !important;
        }
        .agenda-row.key .agenda-dot-inner {
          background: var(--accent) !important;
          opacity: 1 !important;
        }
      `}</style>

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
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
        <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '3.25rem' }}>

          {/* Base track — dim line */}
          <div style={{
            position: 'absolute',
            left: '10px',
            top: 0,
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)',
            borderRadius: '1px',
          }} />

          {/* Filled progress line — UNDER the dots, punches through because dots are transparent */}
          <div
            ref={fillRef}
            style={{
              position: 'absolute',
              left: '10px',
              top: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent) 0%, var(--accent) 80%, rgba(196,255,80,0.4) 100%)',
              height: '0%',
              borderRadius: '1px',
              transition: 'height 0.08s linear',
              boxShadow: '0 0 12px rgba(196, 255, 80, 0.4)',
            }}
          />

          {/* Traveling pulse dot that falls down the line */}
          <div
            ref={pulseRef}
            style={{
              position: 'absolute',
              left: '7px',
              top: '0',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 16px 4px rgba(196, 255, 80, 0.5)',
              opacity: 0,
              pointerEvents: 'none',
              animation: 'agendaPulse 1.6s ease-out infinite',
              animationDelay: '0s',
            }}
          />

          {/* Event rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((ev, i) => {
              const isKey    = KEY_EVENTS.has(i);
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className={`agenda-row ${isKey ? 'key' : ''} ${isActive ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    paddingBottom: '1.5rem',
                    position: 'relative',
                    animationDelay: `${i * 0.06}s`,
                  }}
                >
                  {/* Node — NO solid bg, just a stroked ring so the line shows through */}
                  <div
                    className="agenda-dot-outer"
                    style={{
                      position: 'absolute',
                      left: '-3.25rem',
                      top: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: '1.5px solid var(--border)',
                      background: 'var(--bg)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: 'translateX(calc(-50% + 11px))',
                    }}
                  >
                    <div
                      className="agenda-dot-inner"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        opacity: isKey ? 1 : 0.5,
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    {/* Pulse rings on key events */}
                    {isKey && (
                      <>
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: '1.5px solid var(--accent)',
                          transform: 'translate(-50%, -50%)',
                          animation: 'agendaRingPulse 2.2s ease-out infinite',
                          animationDelay: `${i * 0.3}s`,
                          pointerEvents: 'none',
                        }} />
                      </>
                    )}
                  </div>

                  {/* Time badge */}
                  <div
                    className="agenda-time"
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.78rem',
                      color: isKey ? 'var(--accent)' : 'var(--text-muted)',
                      letterSpacing: '0.04em',
                      minWidth: '72px',
                      paddingTop: '3px',
                      transition: 'color 0.3s',
                    }}
                  >
                    {ev.time}
                  </div>

                  {/* Content card */}
                  <div
                    className="agenda-card"
                    style={{
                      flex: 1,
                      padding: '0.9rem 1.2rem',
                      background: isKey ? 'rgba(196, 255, 80, 0.02)' : 'var(--bg-card)',
                      border: `1px solid ${isKey ? 'var(--border-accent)' : 'var(--border)'}`,
                      borderRadius: '8px',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                          fontSize: '0.58rem',
                          fontFamily: 'DM Mono, monospace',
                          letterSpacing: '0.14em',
                          color: 'var(--accent)',
                          padding: '0.15rem 0.45rem',
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
              );
            })}
          </div>

          {/* End cap — closes the line gracefully */}
          <div style={{
            position: 'absolute',
            left: '6px',
            bottom: '-6px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            zIndex: 2,
          }} />
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
              <div style={{ fontSize: '0.62rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>DURATION</div>
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
              <div style={{ fontSize: '0.62rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>MILESTONES</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{events.length} events</div>
            </div>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--accent)' }}>
              <path d="M12 2 L15 9 L22 9.5 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9.5 L9 9 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
            </svg>
            <div>
              <div style={{ fontSize: '0.62rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>HIGHLIGHTS</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{KEY_EVENTS.size} key moments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
