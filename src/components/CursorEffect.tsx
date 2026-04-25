'use client';

import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.id = 'grid-glow';
    document.body.appendChild(glow);

    let mouseX = -999, mouseY = -999;
    let glowX = -999, glowY = -999;
    let rafId = 0;

    const tick = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.background = `radial-gradient(220px circle at ${glowX}px ${glowY}px, rgba(196,255,80,0.07) 0%, transparent 70%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      glow.remove();
    };
  }, []);

  return null;
}
