'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/venue/humboldt-sign.jpg',    alt: 'Google Humboldt sign outside the building', caption: 'Campus entrance' },
  { src: '/venue/main-hall.jpg',        alt: 'Main hall with round tables and yellow-green chairs', caption: 'Main hall' },
  { src: '/venue/atrium.jpg',           alt: 'Atrium with exposed ceiling and multi-level walkways', caption: 'Atrium' },
  { src: '/venue/meeting-room.jpg',     alt: 'Meeting room with wooden table and fiber art wall hanging', caption: 'Meeting rooms' },
  { src: '/venue/conference-room.jpg',  alt: 'Small conference room with yellow chairs and display screen', caption: 'Conference rooms' },
  { src: '/venue/kitchen.jpg',          alt: 'Bright kitchen with coffee station and snack bar', caption: 'Kitchen & snacks' },
  { src: '/venue/lounge.jpg',           alt: 'Open lounge area with colorful chairs and wall mural', caption: 'Lounge' },
];

// Google logo in SVG — matches Google's official color wordmark
function GoogleLogo({ height = 24 }: { height?: number }) {
  const scale = height / 24;
  const w = Math.round(73 * scale);
  return (
    <svg width={w} height={height} viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
      <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54S5.62 2.47 9.24 2.47c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
      <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.44 3.28 3.52-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
      <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3-2.91 0-5.57 2.55-5.57 5.83 0 3.26 2.66 5.79 5.57 5.79 1.39 0 2.49-.62 3.06-1.32h.09v.83c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.07c-1.76 0-3.1-1.5-3.1-3.54 0-2.07 1.34-3.56 3.1-3.56 1.74 0 3.1 1.51 3.1 3.56 0 2.04-1.36 3.54-3.1 3.54z" fill="#4285F4"/>
      <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52s1.52-3.52 3.28-3.52 3.28 1.44 3.28 3.52-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
      <path d="M58.78 0h2.55v17.73h-2.55z" fill="#34A853"/>
      <path d="M68.71 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
    </svg>
  );
}

export default function Location() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>Venue</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Google Humbolt,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Sunnyvale.</em>
            </h2>
          </div>
          {/* Google logo badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.65rem 1.1rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--bg-card)',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>HOSTED BY</span>
            <GoogleLogo height={20} />
          </div>
        </div>

        {/* Photo gallery */}
        <div style={{ marginBottom: '3rem' }}>
          {/* Main photo */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '0.75rem',
            border: '1px solid var(--border)',
          }}>
            <Image
              key={active}
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1100px) 100vw, 1000px"
              priority={active === 0}
            />
            {/* Caption */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '0.6rem 1rem',
              background: 'linear-gradient(to top, rgba(13,13,20,0.85), transparent)',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              color: 'rgba(240,237,230,0.8)',
              textTransform: 'uppercase',
            }}>
              {photos[active].caption}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: 0,
                  border: `2px solid ${i === active ? 'var(--accent)' : 'transparent'}`,
                  borderRadius: '3px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '1',
                  position: 'relative',
                  opacity: i === active ? 1 : 0.55,
                  transition: 'opacity 0.2s, border-color 0.2s',
                  background: 'none',
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Address + info grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}
          className="location-grid"
        >
          {/* Address card */}
          <div style={{
            padding: '2rem',
            border: '1px solid var(--border-accent)',
            borderRadius: '2px',
            background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(196,255,80,0.03) 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GoogleLogo height={22} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>HUMBOLDT</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'ADDRESS', value: '1225 Crossman Ave' },
                { label: 'CITY',    value: 'Sunnyvale, CA' },
                { label: 'FLOOR',   value: 'Third floor' },
                { label: 'DATE',    value: 'May 23, 2026' },
                { label: 'HOURS',   value: '8:00 AM – 8:00 PM' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--text-muted)', minWidth: '68px' }}>{label}</span>
                  <span style={{ fontSize: '0.98rem', color: 'var(--text-primary)', fontWeight: 400 }}>{value}</span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=1225+Crossman+Ave+Sunnyvale+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', alignSelf: 'flex-start', fontSize: '0.82rem', padding: '0.6rem 1.4rem' }}
            >
              Open in Maps ↗
            </a>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/><line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.1"/><rect x="6" y="12" width="3" height="3" rx=".4" fill="currentColor" opacity=".7"/><rect x="10.5" y="12" width="3" height="3" rx=".4" fill="currentColor" opacity=".5"/></svg>
                ),
                title: 'Save the date',
                desc: 'Friday, May 23, 2026. Doors open at 8 AM — arrive early to check in and find your team.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.3" fill="none"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.1" fill="none"/></svg>
                ),
                title: 'Getting there',
                desc: 'Google Humboldt campus in Sunnyvale. Parking on-site. Caltrain and VTA bus routes nearby.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                ),
                title: 'What to bring',
                desc: "Laptop, charger, and ideas. Food and drinks provided all day. Bring your student ID for check-in.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ padding: '1.2rem 1.35rem', display: 'flex', gap: '0.95rem', alignItems: 'flex-start' }}
              >
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>{item.icon}</div>
                <div>
                  <p style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.3rem' }}>{item.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
