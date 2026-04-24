# Hack Club Listing Card Background — Design Spec

**Date:** 2026-04-24  
**Status:** Approved

## Output

Static PNG: `public/hackclub-card-bg.png`  
Dimensions: 1200×630px (matches existing OG image, works with Hack Club's `background-size: cover`)

## Visual Design

- **Background:** `#0d0d14` (site base colour)
- **Grid:** subtle CSS grid lines at 50px intervals, `rgba(255,255,255,0.025)` — same as site hero
- **Glows:** two lime radial glows — large (700px) top-right at 7% opacity, smaller (450px) bottom-left at 4% opacity. Lime only (`#c4ff50`), no coral.
- **Wireframe cube:** large (320px), positioned centre-right. Static snapshot at `rotateX(20deg) rotateY(45deg)`. Face borders `rgba(196,255,80,0.35)`. Face fill: faint lime grid (same as site cube). No solid fill.
- **No text. No logo.**

## Implementation

Generate via an HTML file (`public/_card-gen.html`) opened in Playwright at 1200×630, screenshotted, saved to `public/hackclub-card-bg.png`, then the HTML file is deleted.

Using full CSS 3D transforms (not satori) for pixel-perfect cube rendering.
