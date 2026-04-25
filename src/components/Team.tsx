export default function Team() {
  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            About
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Built by students,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>for students.</em>
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              maxWidth: '52ch',
              margin: '0 auto',
            }}
          >
            Synthesis Hacks is a student-run hackathon. We started it because we wanted the kind of event
            we wished existed when we were learning — beginner-friendly, well-organized, and actually fun.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {[
            {
              name: 'Bernard Freund',
              role: 'Organizer',
              handle: '@bernardfreund',
            },
            {
              name: 'Your Name',
              role: 'Co-organizer',
              handle: '@handle',
            },
          ].map((person) => (
            <div
              key={person.name}
              className="card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.25rem',
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  fontFamily: 'DM Mono, monospace',
                  fontWeight: 500,
                }}
              >
                {person.name[0]}
              </div>
              <p style={{ fontWeight: 500, fontSize: '0.97rem' }}>{person.name}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{person.role}</p>
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  opacity: 0.6,
                  marginTop: '0.1rem',
                }}
              >
                {person.handle}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--accent)', flexShrink: 0 }}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Questions? Reach us at{' '}
            <a
              href="mailto:team@synthesishacks.com"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'var(--border-accent)' }}
            >
              team@synthesishacks.com
            </a>
            {' '}or join the{' '}
            <a
              href="https://discord.gg/RPBJwNvs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'var(--border-accent)' }}
            >
              Discord
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
