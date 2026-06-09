'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const allPhotos = [
  { src: '/hackathon/morningsetup_3977.jpg', alt: 'Morning setup before the event' },
  { src: '/hackathon/welcometosynthesishacks_4028.jpg', alt: 'Welcome to Synthesis Hacks' },
  { src: '/hackathon/synthesisteam_grouppic_3990.jpg', alt: 'The Synthesis team' },
  { src: '/hackathon/speakerwideshot_4141.jpg', alt: 'Speaker addressing the room' },
  { src: '/hackathon/speaker_4135.jpg', alt: 'Speaker session' },
  { src: '/hackathon/letthehackbegin_4156.jpg', alt: 'Let the hacking begin' },
  { src: '/hackathon/groupwideshot_4065.jpg', alt: 'Wide shot of participants working' },
  { src: '/hackathon/participation_4105.jpg', alt: 'Participants engaged in hacking' },
  { src: '/hackathon/duoworking_4290.jpg', alt: 'Team working together' },
  { src: '/hackathon/posingtogether_4204.jpg', alt: 'Teams posing together' },
  { src: '/hackathon/gettingpizza_4253.jpg', alt: 'Pizza break' },
  { src: '/hackathon/groupposing_4327.jpg', alt: 'Group posing' },
  { src: '/hackathon/biggroup_4331.jpg', alt: 'Large group of participants' },
  { src: '/hackathon/prizes_4155.jpg', alt: 'Prize table' },
  { src: '/hackathon/announcingwinners_4344.jpg', alt: 'Announcing winners' },
  { src: '/hackathon/winners_4348.jpg', alt: 'Winners of Synthesis Hacks' },
  { src: '/hackathon/group_photo_4373.jpg', alt: 'Full group photo' },
];

const PHOTO_H = 248;
const PHOTO_W = 372;
const GAP = 6;

const rows: { photos: typeof allPhotos; dir: 'left' | 'right'; speed: number }[] = [
  { photos: allPhotos.slice(0, 6),  dir: 'left',  speed: 38 },
  { photos: allPhotos.slice(6, 12), dir: 'right', speed: 48 },
  { photos: allPhotos.slice(12),    dir: 'left',  speed: 32 },
];

export default function Photos() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      requestAnimationFrame(() => setLightboxVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setLightboxVisible(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowLeft')  setLightbox(i => ((i ?? 0) - 1 + allPhotos.length) % allPhotos.length);
      if (e.key === 'ArrowRight') setLightbox(i => ((i ?? 0) + 1) % allPhotos.length);
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const openLightbox = (src: string) => {
    setLightbox(allPhotos.findIndex(p => p.src === src));
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setTimeout(() => setLightbox(null), 320);
  };

  return (
    <section
      id="photos"
      ref={sectionRef}
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* ── Section header ───────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem 3.5rem',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <span className="badge-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Photos · May 23, 2026
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            From the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>event</em>
          </h2>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div
            className="font-mono"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 6rem)',
              fontWeight: 500,
              color: 'var(--accent)',
              lineHeight: 1,
              opacity: 0.12,
              letterSpacing: '-0.04em',
              userSelect: 'none',
            }}
          >
            17
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '0.35rem 0 0', textAlign: 'right' }}>
            Photography by{' '}
            <a
              href="https://junescreativestudio.mypixieset.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(240,237,230,0.25)',
                transition: 'border-color 0.2s',
              }}
            >
              June&apos;s Creative Studio
            </a>
          </p>
        </div>
      </div>

      {/* ── Marquee strips ───────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
        {rows.map((row, ri) => {
          const doubled = [...row.photos, ...row.photos];
          const trackW = doubled.length * (PHOTO_W + GAP);

          return (
            <div
              key={ri}
              className="marquee-row-wrap"
              style={{
                overflow: 'hidden',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 1s ease ${ri * 0.14}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${ri * 0.14}s`,
              }}
            >
              <div
                className={`marquee-track marquee-${row.dir}`}
                style={{
                  display: 'flex',
                  gap: GAP,
                  width: trackW,
                  willChange: 'transform',
                  animationName: row.dir === 'left' ? 'mq-left' : 'mq-right',
                  animationDuration: `${row.speed}s`,
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
              >
                {doubled.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(photo.src)}
                    className="photo-btn"
                    aria-label={`View: ${photo.alt}`}
                    style={{
                      flexShrink: 0,
                      width: PHOTO_W,
                      height: PHOTO_H,
                      position: 'relative',
                      overflow: 'hidden',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      background: 'var(--bg-card)',
                      display: 'block',
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="372px"
                      style={{ objectFit: 'cover', display: 'block' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(13,13,20,0.96)',
            backdropFilter: 'blur(20px)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.32s ease',
          }}
        >
          {/* Photo frame */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(90vw, 1080px)',
              aspectRatio: '3/2',
              transform: lightboxVisible ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(24px)',
              transition: 'transform 0.38s cubic-bezier(0.16,1,0.3,1)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
            }}
          >
            <Image
              src={allPhotos[lightbox].src}
              alt={allPhotos[lightbox].alt}
              fill
              sizes="90vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Counter badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(13,13,20,0.7)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                padding: '0.3rem 0.75rem',
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                color: 'var(--text-muted)',
                userSelect: 'none',
              }}
            >
              {lightbox + 1} / {allPhotos.length}
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => ((i ?? 0) - 1 + allPhotos.length) % allPhotos.length); }}
            aria-label="Previous photo"
            className="lb-nav lb-nav-prev"
            style={{
              position: 'fixed',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(13,13,20,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
            }}
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => ((i ?? 0) + 1) % allPhotos.length); }}
            aria-label="Next photo"
            className="lb-nav lb-nav-next"
            style={{
              position: 'fixed',
              right: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(13,13,20,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
            }}
          >
            →
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(13,13,20,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-muted)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'color 0.2s, background 0.2s',
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── CSS ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes mq-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes mq-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        /* Pause whole row on hover */
        .marquee-row-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Photo hover: scale + brighten */
        .photo-btn img {
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94),
                      filter 0.4s ease;
        }
        .photo-btn:hover img {
          transform: scale(1.07);
          filter: brightness(1.12) saturate(1.08);
        }

        /* Subtle green tint on hover */
        .photo-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(196,255,80,0);
          transition: background 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }
        .photo-btn:hover::after {
          background: rgba(196,255,80,0.055);
        }

        /* Lightbox nav hover */
        .lb-nav:hover {
          background: rgba(196,255,80,0.1) !important;
          border-color: rgba(196,255,80,0.3) !important;
          color: var(--accent) !important;
        }
        .lb-nav-prev:hover { transform: translateY(-50%) translateX(-3px) !important; }
        .lb-nav-next:hover { transform: translateY(-50%) translateX(3px) !important; }
      `}</style>
    </section>
  );
}
