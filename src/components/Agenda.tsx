'use client';

import { useEffect, useRef } from 'react';

const events = [
  { time: '8:00 AM',  label: 'Doors open',         desc: 'Check in, grab breakfast, and find your team.' },
  { time: '9:00 AM',  label: 'Opening ceremony',    desc: 'Welcome remarks, event rules, and sponsor introductions.' },
  { time: '9:30 AM',  label: 'Hacking begins',      desc: 'Build starts. Mentors are available from this moment.' },
  { time: '12:00 PM', label: 'Lunch',               desc: 'Catered lunch. Take a break, swap ideas, keep building.' },
  { time: '1:00 PM',  label: 'Workshops',           desc: 'Optional skill sessions running in parallel. Attend or keep building.' },
  { time: '5:00 PM',  label: 'Submissions due',     desc: 'Final code freeze. Submit your project to the judging panel.' },
  { time: '5:30 PM',  label: 'Demos begin',         desc: 'Science-fair style presentations. Each team gets time in front of judges.' },
  { time: '7:30 PM',  label: 'Awards ceremony',     desc: 'Prizes, acknowledgements, and closing remarks.' },
  { time: '8:00 PM',  label: 'Doors close',         desc: 'Wrap up, exchange contacts, and head home.' },
];

export default function Agenda() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Animate the vertical timeline line drawing on scroll
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;
      const rect = section.getBoundingClientRect();
      const visible = Math.max(0, Math.min(1,
        (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
      ));
      line.style.height = `${visible * 100}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Schedule
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            May 31st,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>minute by minute.</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
            Mountain View campus · 8 AM to 8 PM
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Animated vertical line */}
          <div style={{
            position: 'absolute',
            left: '6px',
            top: 0,
            width: '1px',
            background: 'var(--border)',
            height: '100%',
          }} />
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: '6px',
              top: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, var(--accent), rgba(196,255,80,0.2))',
              height: '0%',
              transition: 'height 0.1s linear',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((ev, i) => (
              <AgendaRow key={ev.time} ev={ev} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaRow({ ev, index }: { ev: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('faq-item-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isKeyEvent = index === 2 || index === 4 || index === 6; // Hacking, Workshops, Awards

  return (
    <div
      ref={ref}
      className="faq-item-enter"
      style={{
        display: 'flex',
        gap: '1.5rem',
        paddingBottom: '2rem',
        position: 'relative',
        transitionDelay: `${index * 0.04}s`,
      }}
    >
      {/* Node dot */}
      <div style={{
        position: 'absolute',
        left: '-2rem',
        top: '4px',
        width: '13px',
        height: '13px',
        borderRadius: '50%',
        border: `1px solid ${isKeyEvent ? 'var(--accent)' : 'var(--border)'}`,
        background: isKeyEvent ? 'rgba(196,255,80,0.12)' : 'var(--bg)',
        flexShrink: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {isKeyEvent && (
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
        )}
      </div>

      {/* Time */}
      <div style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.68rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.06em',
        minWidth: '68px',
        paddingTop: '2px',
        opacity: 0.65,
      }}>
        {ev.time}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '0.95rem',
          fontWeight: isKeyEvent ? 500 : 400,
          color: isKeyEvent ? 'var(--text-primary)' : 'var(--text-primary)',
          marginBottom: '0.3rem',
          letterSpacing: '-0.01em',
        }}>
          {ev.label}
        </div>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
          {ev.desc}
        </div>
      </div>
    </div>
  );
}
