'use client';

export default function Location() {
  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Venue
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0',
            }}
          >
            Google Humbolt,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Sunnyvale.</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="location-grid"
        >
          {/* Address card */}
          <div
            style={{
              padding: '2rem',
              border: '1px solid var(--border-accent)',
              borderRadius: '2px',
              background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(196,255,80,0.03) 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Pin icon */}
            <div style={{ color: 'var(--accent)' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <circle cx="20" cy="16" r="2.5" fill="currentColor" />
                <path d="M20 24 C20 24 10 32 10 36" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.3" />
                <path d="M20 24 C20 24 30 32 30 36" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.3" />
                <path d="M13 23 Q20 31 27 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'BUILDING', value: 'Google Humbolt' },
                { label: 'ADDRESS', value: '1225 Crossman Ave' },
                { label: 'CITY', value: 'Sunnyvale, CA' },
                { label: 'FLOOR', value: 'Third floor' },
                { label: 'DATE', value: 'May 23, 2026' },
                { label: 'HOURS', value: '8:00 AM – 8:00 PM' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.56rem',
                      letterSpacing: '0.18em',
                      color: 'var(--text-muted)',
                      minWidth: '64px',
                      opacity: 0.65,
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=1225+Crossman+Ave+Sunnyvale+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', marginTop: '0.5rem', alignSelf: 'flex-start', fontSize: '0.82rem', padding: '0.6rem 1.4rem' }}
            >
              Open in Maps ↗
            </a>
          </div>

          {/* Info panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.1" />
                    <line x1="7" y1="1" x2="7" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <line x1="17" y1="1" x2="17" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <rect x="6" y="12" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.7" />
                    <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
                    <rect x="15" y="12" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
                  </svg>
                ),
                title: 'Save the date',
                desc: 'Friday, May 23, 2026. Doors open at 8 AM — arrive early to check in and find your team.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.1" fill="none" />
                  </svg>
                ),
                title: 'Getting there',
                desc: 'Located at the Google Humbolt campus in Sunnyvale. Parking is available on-site. Transit options nearby.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'What to bring',
                desc: 'Your laptop, charger, and ideas. Food and drinks are provided. Don\'t forget your student ID for check-in.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ padding: '1.35rem 1.5rem', display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}
              >
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>{item.icon}</div>
                <div>
                  <p style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
