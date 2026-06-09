'use client';

import { useState, useEffect } from 'react';
import { LogoMark } from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(13,13,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <LogoMark size={44} />
          </a>

          {isMobile ? (
            /* Mobile: Register CTA only */
            <span
              aria-disabled="true"
              style={{
                background: 'var(--bg-card-hover)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent)',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Closed
            </span>
          ) : (
            /* Desktop: nav links + Contact */
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              {[
                { label: 'Photos', href: '#photos' },
                { label: 'Schedule', href: '#schedule' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sponsors', href: '#sponsors' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:team@synthesishacks.com"
                style={{
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  padding: '0.4rem 0.9rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                  fontFamily: 'DM Mono, monospace',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,255,80,0.18)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-dim)')}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
