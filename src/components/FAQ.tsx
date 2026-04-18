'use client';

import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What is a hackathon?',
    a: "A hackathon is an event where you team up to build a project in a fixed amount of time. An app, website, game, or anything else you want to try. It's less about winning and more about learning, making things, and meeting people who share your interests.",
  },
  {
    q: 'Do I need to know how to code?',
    a: "Nope. Synthesis Hacks is built for beginners. You'll be surprised what you can build with a bit of guidance and a good team. Mentors are around the whole day.",
  },
  {
    q: 'What grade levels can participate?',
    a: 'Synthesis Hacks is open to high school students (grades 9 through 12). No prior experience needed.',
  },
  {
    q: 'Is it solo or team-based?',
    a: "Teams of 2 to 4. Don't have a team yet? No worries. We run a team-matching session at the start so you can find people to work with.",
  },
  {
    q: 'Is there a cost to attend?',
    a: 'Synthesis Hacks is free. Good opportunities should be open to everyone.',
  },
  {
    q: 'How long is the event?',
    a: 'The hackathon runs for 12 hours at Google Humboldt in Sunnyvale. Full schedule details go up closer to the event.',
  },
  {
    q: 'How do I get involved as a sponsor or mentor?',
    a: "We'd love to have you. Scroll down to the sponsors section or email sponsors@synthesishacks.com and we'll get back to you.",
  },
];

function AccordionItem({
  faq,
  index,
  open,
  onToggle,
  observed,
}: {
  faq: { q: string; a: string };
  index: number;
  open: boolean;
  onToggle: () => void;
  observed: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (open) {
      setHeight(el.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div
      className={`faq-item-enter${observed ? ' faq-item-visible' : ''}`}
      style={{
        background: open ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        border: `1px solid ${open ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, background 0.3s ease, opacity 0.55s ease, transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
        transitionDelay: observed ? `${index * 0.055}s` : '0s',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.15rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4, flex: 1 }}>
          {faq.q}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
          style={{
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: open ? 'var(--accent)' : 'var(--text-muted)',
          }}
        >
          <path d="M3 6 L8 11 L13 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      {/* Animated height reveal */}
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          ref={bodyRef}
          style={{
            padding: '0 1.5rem 1.25rem',
            paddingTop: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.75,
            borderTop: '1px solid var(--border)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
          }}
        >
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [observed, setObserved] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserved(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" style={{ padding: '6rem 1.5rem', background: 'rgba(255,255,255,0.01)' }}>
      <div ref={sectionRef} style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>FAQ</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Questions, answered
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              observed={observed}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{ fontWeight: 500, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Still have questions?</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>We're happy to help.</p>
          </div>
          <a href="mailto:team@synthesishacks.com" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.65rem 1.5rem' }}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
