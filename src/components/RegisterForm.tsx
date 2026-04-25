export default function RegisterForm() {
  return (
    <section id="register" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
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
            Claim your spot
          </h2>
        </div>
        <iframe
          src="https://synthesishacks.fillout.com/t/grGiZ8GF2rus"
          style={{ width: '100%', height: '600px', border: 'none', borderRadius: '12px' }}
          title="Sign up form"
        />
      </div>
    </section>
  );
}
