import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode, CSSProperties } from 'react';

/* Reticle - concentric angular squares with corner brackets */
function ExposureSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="16.5" y="16.5" width="7" height="7" fill="currentColor" opacity="0.9" />
      <rect x="11" y="11" width="18" height="18" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.5" />
      <rect x="4" y="4" width="32" height="32" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.22" />
      <polyline points="4,10 4,4 10,4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="30,4 36,4 36,10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="36,30 36,36 30,36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <polyline points="10,36 4,36 4,30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  );
}

/* Directed graph - source node feeds two intermediaries into a destination */
function PipelineSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="6" cy="20" r="3" fill="currentColor" />
      <circle cx="20" cy="11" r="2.4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
      <circle cx="20" cy="29" r="2.4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
      <circle cx="34" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="34" cy="20" r="1.4" fill="currentColor" opacity="0.6" />
      <path d="M8.9 18.7 L17.6 13.2" stroke="currentColor" strokeWidth="0.95" opacity="0.45" strokeLinecap="round" />
      <path d="M8.9 21.3 L17.6 26.8" stroke="currentColor" strokeWidth="0.95" opacity="0.45" strokeLinecap="round" />
      <path d="M22.4 12 L31 18.4" stroke="currentColor" strokeWidth="0.95" opacity="0.55" strokeLinecap="round" />
      <path d="M22.4 28 L31 21.6" stroke="currentColor" strokeWidth="0.95" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

/* Ascending line chart - bottom-left to top-right with a terminal upward arrow */
function ImpactSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline
        points="4,34 11,26 19,19 27,13 35,6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="34" r="1.8" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="26" r="1.8" fill="currentColor" opacity="0.52" />
      <circle cx="19" cy="19" r="1.8" fill="currentColor" opacity="0.68" />
      <circle cx="27" cy="13" r="1.8" fill="currentColor" opacity="0.84" />
      <circle cx="35" cy="6" r="2.4" fill="currentColor" />
      <path d="M32 3.5 L35 0.5 L38 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="36.5" x2="38" y2="36.5" stroke="currentColor" strokeWidth="0.7" opacity="0.18" />
    </svg>
  );
}

const benefits: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ExposureSVG />,
    title: 'On the t-shirt',
    desc: 'Your logo on the shirt every attendee wears, on the website, and at the venue.',
  },
  {
    icon: <PipelineSVG />,
    title: 'In the room',
    desc: 'Send mentors, run a 30-minute workshop, or just sit at a table and answer questions.',
  },
  {
    icon: <ImpactSVG />,
    title: 'Pay it forward',
    desc: 'Free events change who gets to start building. We\'re keeping this open to everyone.',
  },
];

const tiers = [
  {
    name: 'Venue Sponsor',
    price: '$10,000+',
    benefits: [
      'Venue hosting',
      'Logo on t-shirts and website',
      'Dedicated workshop slot',
      'Social media mentions',
      'Booth space',
      'Mentor opportunities'
    ]
  },
  {
    name: 'Gold Sponsor',
    price: '$5,000',
    benefits: [
      'Logo on t-shirts and website',
      'Workshop slot',
      'Social media mentions',
      'Booth space',
      'Mentor opportunities'
    ]
  },
  {
    name: 'Silver Sponsor',
    price: '$2,500',
    benefits: [
      'Logo on website',
      'Social media mentions',
      'Booth space',
      'Mentor opportunities'
    ]
  },
  {
    name: 'Bronze Sponsor',
    price: '$1,000',
    benefits: [
      'Logo on website',
      'Social media mentions',
      'Mentor opportunities'
    ]
  }
];

export default function Prospectus() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              Sponsorship Prospectus
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Partner with Synthesis Hacks
            </h1>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '60ch',
                margin: '0 auto',
              }}
            >
              Help us create an unforgettable hackathon experience for high school students.
              Your support makes innovation accessible to the next generation of builders.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              About Synthesis Hacks
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Synthesis Hacks is a free hackathon designed specifically for high school students.
                  We believe that everyone should have the opportunity to learn coding and build amazing projects,
                  regardless of their background or experience level.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem' }}>The Event</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  May 23-24, 2026 at Google Humboldt in Sunnyvale, CA.
                  200+ high school students, 24-hour coding, workshops, prizes, and mentorship.
                  Beginners welcome - we provide team matching and learning resources.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem' }}>Impact</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Free events like ours open doors for students who might not otherwise have access
                  to coding education. Your sponsorship directly supports diversity in tech and
                  helps build the next generation of innovators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{ padding: '4rem 1.5rem', background: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              What We Offer Sponsors
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="card"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers Section */}
        <section style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              Sponsorship Tiers
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="card"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem' }}>{tier.name}</h3>
                    <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)' }}>{tier.price}</p>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                          <circle cx="8" cy="8" r="6" fill="var(--accent)" opacity="0.2" />
                          <path d="M6 8 L7.5 9.5 L10.5 6.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: '4rem 1.5rem', background: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Ready to Partner?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We&apos;d love to discuss how your organization can support Synthesis Hacks.
              Contact us to learn more about sponsorship opportunities.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href="mailto:sponsors@synthesishacks.com"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                Email us about sponsoring
              </a>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'DM Mono, monospace',
                }}
              >
                sponsors@synthesishacks.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}