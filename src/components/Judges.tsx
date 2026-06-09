'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/* ── Judge data ── */
type CompanyKey = 'Google' | 'Apple' | 'OpenAI' | 'Meta' | 'DeepAI';

const judges: { name: string; photo: string; company: CompanyKey }[] = [
  { name: 'Deep Gajjar',      photo: '/judges/deep-gajjar.png',     company: 'Google' },
  { name: 'Disha Patel',      photo: '/judges/disha-patel.png',     company: 'Apple'  },
  { name: 'Phoebe Wang',      photo: '/judges/phoebe-wang.png',     company: 'OpenAI' },
  { name: 'Neelakshi Soni',   photo: '/judges/neelakshi-soni.png',  company: 'Meta'   },
  { name: 'Mariia Pliusnova', photo: '/judges/mariia-pliusnova.png',company: 'DeepAI' },
];

const companyColors: Record<CompanyKey, string> = {
  Google: '#4285f4',
  Apple:  '#a0a0b0',
  OpenAI: '#10a37f',
  Meta:   '#0082fb',
  DeepAI: '#ff6b35',
};

function CompanyLogo({ company }: { company: CompanyKey }) {
  // All wordmarks rendered white for the dark theme, ~20px tall.
  // OpenAI's file is black-on-white (no alpha): invert + screen-blend drops the background.
  // Google and Apple source files carry large transparent padding, so they render
  // taller with negative margins to keep the visible wordmark ~18px like the rest.
  // Brand colors preserved. Apple and OpenAI files are monochrome black, so they
  // invert to white; Meta's invert+hue-rotate lightens the navy text but keeps
  // the icon's blue hue. Google and DeepAI render untouched.
  if (company === 'Google') {
    return (
      <Image
        src="/judges/google-logo.png"
        alt="Google"
        width={78}
        height={44}
        style={{ height: 48, width: 'auto', margin: '-14px 0' }}
      />
    );
  }
  if (company === 'Apple') {
    return (
      <Image
        src="/judges/apple-logo.png"
        alt="Apple"
        width={92}
        height={52}
        style={{ filter: 'brightness(0) invert(1)', opacity: 0.85, height: 58, width: 'auto', margin: '-18px 0' }}
      />
    );
  }
  if (company === 'OpenAI') {
    return (
      <Image
        src="/judges/openai-logo.png"
        alt="OpenAI"
        width={66}
        height={18}
        style={{ filter: 'invert(1)', mixBlendMode: 'screen', opacity: 0.85, height: 20, width: 'auto' }}
      />
    );
  }
  if (company === 'Meta') {
    return (
      <Image
        src="/judges/meta-logo.png"
        alt="Meta"
        width={74}
        height={15}
        style={{ filter: 'invert(1) hue-rotate(180deg)', height: 16, width: 'auto' }}
      />
    );
  }
  // DeepAI: square icon only — add the name to the right.
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
      <Image
        src="/judges/deepai-logo.png"
        alt=""
        width={20}
        height={20}
        style={{ width: 22, height: 22, objectFit: 'contain' }}
      />
      <span style={{ color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 600, lineHeight: 1 }}>
        DeepAI
      </span>
    </span>
  );
}

export default function Judges() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.judge-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('faq-item-visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.09}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="judges" ref={sectionRef} style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>Judges</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            The{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>judges.</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="judges-grid" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {judges.map((judge) => {
            const color = companyColors[judge.company];
            return (
              <div
                key={judge.name}
                className="judge-card faq-item-enter"
                style={{
                  flex: '1 1 175px',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  background: 'var(--bg-card)',
                  padding: '2rem 1.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'center',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}55`;
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                {/* Photo */}
                <div style={{
                  width: 116,
                  height: 116,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `2px solid ${color}44`,
                  flexShrink: 0,
                  position: 'relative',
                  background: 'var(--bg-card-hover)',
                }}>
                  <Image
                    src={judge.photo}
                    alt={judge.name}
                    fill
                    sizes="116px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Name */}
                <div className="font-display" style={{
                  fontSize: '1.35rem',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                }}>
                  {judge.name}
                </div>

                {/* Company logo — fixed-height row pinned to card bottom so all five align */}
                <div style={{
                  marginTop: 'auto',
                  height: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <CompanyLogo company={judge.company} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .judges-grid { flex-direction: column !important; }
          .judge-card  { flex: unset !important; }
        }
      `}</style>
    </section>
  );
}
