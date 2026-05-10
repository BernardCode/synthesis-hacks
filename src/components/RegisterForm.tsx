export default function RegisterForm() {
  return (
    <section id="register" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Registration
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
            Applications are closed
          </h2>
        </div>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '1.75rem',
          }}
        >
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            We&apos;re no longer accepting new applications for Synthesis Hacks 2026.
            Accepted participants should keep an eye on email and Discord for event updates.
          </p>
          <a
            href="mailto:team@synthesishacks.com"
            className="btn-primary"
            style={{ textDecoration: 'none', fontSize: '0.95rem', padding: '0.7rem 1.4rem' }}
          >
            Contact the team
          </a>
        </div>
      </div>
    </section>
  );
}
