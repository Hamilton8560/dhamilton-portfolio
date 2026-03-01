# Portfolio Site Redesign — shadcn/ui + Neon Lime

**Date:** 2026-03-01
**Status:** Approved

## Summary

Full redesign of davidhamilton portfolio from Vite+React to Next.js 15 + shadcn/ui + GSAP. Dark theme with neon lime (#a3e635) accent. Inspired by shubhporwal.me.

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React (already in use, shadcn default)
- **Fonts:** Geist Sans + Geist Mono (Next.js default, pairs well with shadcn)

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0a0a0a (zinc-950) | Page background |
| Surface | #18181b (zinc-900) | Cards, navbar blur |
| Border | #27272a (zinc-800) | Dividers, card borders |
| Muted text | #a1a1aa (zinc-400) | Body text, subtitles |
| Primary | #a3e635 (lime-400) | Accent, headings, CTAs, glow |
| Primary hover | #84cc16 (lime-500) | Hover states |
| White | #ffffff | Headings, emphasis |

Glow effects use lime-400 at varying opacities for box-shadow and text-shadow.

## Typography

- **Headings:** Geist Sans, bold/black weight
- **Body:** Geist Sans, regular
- **Code/badges:** Geist Mono

## Page Sections

### 1. Navbar (sticky)
- Transparent → backdrop-blur on scroll
- Left: Name/logo
- Right: About, Experience, Projects, Contact links
- Links highlight lime on hover/active
- Mobile: shadcn Sheet (slide-in drawer) with hamburger trigger

### 2. Hero (full viewport)
- "David Hamilton" — large bold, lime gradient glow
- "Full Stack Developer" — zinc-400 subtitle
- Tagline: "Building exceptional digital experiences that make an impact"
- Social icons (GitHub, LinkedIn, Email) — lime hover glow
- Two CTAs: "View My Work" (lime solid/outline) + "Book a Call" (secondary, links to Calendly)
- Animated background (dot grid or gradient mesh)
- GSAP: staggered fade-in-up on load, parallax on background

### 3. About / Tech Background
- Two-column: text left, visual/graphic right (stacked on mobile)
- Brief personal summary
- Three skill cards (Frontend, Backend, Database & DevOps) — shadcn Card
- Cards: zinc-900 bg, lime border-glow on hover, tech stack badges inside
- GSAP: stagger in from below on scroll

### 4. Experience Timeline
- Vertical timeline, center-aligned (alternating left/right desktop, linear mobile)
- Timeline line: zinc-800, nodes: lime-400
- Entries:
  - Marine Corps Combat Veteran (2008-2012) — Infantry Machine Gunner, key achievements
  - Professional experience entries as needed
- Each entry: shadcn Card with date badge, title, bullet points
- GSAP: sequential reveal on scroll

### 5. Featured Projects
- Section heading with lime accent underline
- 2-column grid (1-col mobile)
- Project cards: image top, title, description, tech badges, demo + GitHub links
- Cards: zinc-900 bg, lime border on hover, image scale on hover
- GSAP: fade + slide up on scroll
- Projects: Angel Trust, Muscle Map, Southern Strength Gym, Harvey SSG

### 6. Contact / CTA
- Centered layout
- "Let's Work Together" heading
- Availability message
- Two CTAs side by side: "Get in Touch" (mailto) + "Book a Call" (Calendly: https://calendly.com/davidhamilton473/el-salvador-consultation)
- Social links row
- GSAP: fade in on scroll

### 7. Footer
- Minimal: name, copyright, "Built with Next.js & shadcn/ui"
- zinc-900 background

## Assets to Migrate

- `angeltrust.png`
- `musclemapLOGO.png`
- Project data (titles, descriptions, tech stacks, URLs)
- External image URLs for Southern Strength Gym and Harvey SSG

## Key Decisions

- **Calendly** integrated as secondary CTA in Hero and primary CTA in Contact section
- **No dark/light toggle** — dark-only design (the neon lime aesthetic doesn't work well on light backgrounds)
- **GSAP only** — no Framer Motion, single animation library
- **App Router** — using Next.js app directory structure
