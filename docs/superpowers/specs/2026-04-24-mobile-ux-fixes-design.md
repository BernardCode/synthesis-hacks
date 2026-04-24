# Mobile UX Fixes — Design Spec

**Date:** 2026-04-24  
**Status:** Approved

## Problem

The site has several mobile UX issues: nav links overflow on small screens, emoji arrows render inconsistently, anchor links jump under the fixed navbar, interactive carousels have no swipe support, and the custom cursor causes problems on touch devices.

## Scope

Seven targeted fixes across six files. No new features, no layout redesigns — only production-quality mobile polish.

---

## 1. Navbar — Simplified Mobile Layout

**File:** `src/components/Navbar.tsx`

On screens ≤ 768px, hide the nav links (Schedule, FAQ, Sponsors) and the Contact button. Show only:
- Logo (left)
- "Register" CTA button (right) — links to `https://synthesishacks.fillout.com/t/grGiZ8GF2rus`, styled like the existing Contact pill but labelled "Register"

Implementation: use a `useWindowWidth` hook or inline media query via a `useMediaQuery` hook that reads `window.innerWidth` on mount + resize. Apply conditional rendering in JSX. No CSS-only approach since the component is already fully inline-styled.

---

## 2. Emoji Arrows → SVG

**Files:** `src/components/Hero.tsx`, `src/components/Location.tsx`

Replace the `↗` unicode character with a small inline SVG (14×14, northeast arrow). Same visual intent, cross-platform consistent rendering.

SVG shape: two-line northeast arrow (`M3 11 L11 3 M4 3 L11 3 L11 10`).

Affected locations:
- Hero: inside the `btn-primary` anchor ("Pre-register now ↗")
- Location: inside the "Open in Maps ↗" anchor

---

## 3. Anchor Scroll Offset

**File:** `src/app/globals.css`

Add `scroll-padding-top: 80px` to the `html` rule (already has `scroll-behavior: smooth`). This fixes all anchor links (#schedule, #faq, #register, #sponsors) jumping behind the 76px fixed navbar. 80px gives 4px of breathing room.

---

## 4. HowItWorks — Touch Swipe

**File:** `src/components/HowItWorks.tsx`

Add touch event handlers to the `.step-stage` div:
- `onTouchStart`: record `touch.clientX` as `touchStartX`
- `onTouchEnd`: compute delta; if `|delta| > 50px`, call `goToStep(current ± 1)`

Swipe left → next step. Swipe right → previous step. Store start position in a `useRef` to avoid re-renders.

---

## 5. Location Carousel — Touch Swipe + Mobile Pause

**File:** `src/components/Location.tsx`

Add touch swipe to the photo carousel frame div:
- `onTouchStart`: record `touch.clientX`, set `paused = true`
- `onTouchEnd`: compute delta; if `|delta| > 50px`, advance/retreat; set `paused = false`

Keep the existing `onMouseEnter`/`onMouseLeave` pause handlers on the outer wrapper — desktop hover-pause stays intact. Touch simply adds a parallel pause path for mobile.

---

## 6. CursorEffect — Disable on Touch Devices

**File:** `src/components/CursorEffect.tsx`

At component mount, check `window.matchMedia('(pointer: coarse)').matches`. If true (touch device), return `null` immediately — no DOM nodes, no event listeners. This prevents the custom cursor from appearing or interfering on mobile.

---

## 7. Agenda Timeline — Tighten Mobile Layout

**File:** `src/app/globals.css`

At `max-width: 480px`, add:
```css
/* Agenda timeline container */
.agenda-timeline-mobile {
  padding-left: 2.5rem !important;
}
/* Time column */
.agenda-time {
  min-width: 54px !important;
  font-size: 0.72rem !important;
}
```

The timeline `paddingLeft` is set inline in `Agenda.tsx` (`3.5rem`). To override it at mobile without touching the component, either:
- Add a CSS class `agenda-timeline` to the container div and override in globals.css, or
- Apply responsive inline logic using the same `useMediaQuery` hook introduced for Navbar.

Preferred: add className `agenda-timeline` to the `ref={timelineRef}` div and override via globals.css media query. Keeps the component clean.

---

## Implementation Order

1. `globals.css` — scroll-padding-top (one line, no risk)
2. `globals.css` — agenda timeline mobile class
3. `Navbar.tsx` — simplified mobile layout
4. `Hero.tsx` — SVG arrow
5. `Location.tsx` — SVG arrow + touch swipe
6. `HowItWorks.tsx` — touch swipe
7. `CursorEffect.tsx` — touch device guard

---

## Out of Scope

- Hamburger/drawer menu (user chose option C)
- Hero magnetic button touch support (benign no-op on mobile)
- HUD stats row (already uses `clamp()`, acceptable on mobile)
- Any new animations or layout changes not listed above
