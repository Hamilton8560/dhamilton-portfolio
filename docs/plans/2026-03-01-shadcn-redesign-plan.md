# Portfolio Shadcn Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the portfolio site as a Next.js 15 + shadcn/ui app with neon lime accent, GSAP scroll animations, and a polished dark theme inspired by shubhporwal.me.

**Architecture:** Next.js 15 App Router with a single-page layout. All sections are client components (needed for GSAP). shadcn/ui provides Card, Button, Sheet, Badge primitives. GSAP + ScrollTrigger handles all scroll-driven animations. Data is static (no API).

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 4, shadcn/ui, GSAP, ScrollTrigger, Lucide React, Geist fonts

**Design doc:** `docs/plans/2026-03-01-shadcn-redesign-design.md`

---

## Task 1: Scaffold Next.js project and install dependencies

**Files:**
- Create: new Next.js project in `/Users/davidhamilton/portfolio-site` (replace existing Vite project)
- Modify: `package.json`, `tailwind.config.ts`, `components.json`

**Step 1: Preserve existing assets and data**

```bash
# Save assets and project data before wiping
mkdir -p /tmp/portfolio-backup
cp -r src/assets /tmp/portfolio-backup/
cp src/App.tsx /tmp/portfolio-backup/
```

**Step 2: Create fresh Next.js 15 project**

```bash
cd /Users/davidhamilton
# Remove old project files (keep .git and docs)
cd portfolio-site
# Store git and docs
cp -r .git /tmp/portfolio-backup/
cp -r docs /tmp/portfolio-backup/
cd ..
rm -rf portfolio-site
npx create-next-app@latest portfolio-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Select options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- src/ directory: Yes
- App Router: Yes
- Import alias: @/*

**Step 3: Restore git history and docs**

```bash
cd /Users/davidhamilton/portfolio-site
rm -rf .git
cp -r /tmp/portfolio-backup/.git .
cp -r /tmp/portfolio-backup/docs .
```

**Step 4: Initialize shadcn/ui**

```bash
cd /Users/davidhamilton/portfolio-site
npx shadcn@latest init
```

When prompted:
- Style: New York
- Base color: Zinc
- CSS variables: Yes

**Step 5: Install shadcn components we need**

```bash
npx shadcn@latest add button card badge sheet separator
```

**Step 6: Install GSAP**

```bash
npm install gsap @gsap/react
```

**Step 7: Copy assets back**

```bash
mkdir -p /Users/davidhamilton/portfolio-site/public/images
cp /tmp/portfolio-backup/assets/angeltrust.png public/images/
cp /tmp/portfolio-backup/assets/musclemapLOGO.png public/images/
```

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 + shadcn/ui + GSAP project"
```

---

## Task 2: Configure theme and global styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `src/app/layout.tsx`

**Step 1: Configure Tailwind with custom lime theme**

In `tailwind.config.ts`, extend the theme with:
- Custom colors for `lime-glow` (rgba(163, 230, 53, 0.4))
- Custom animation keyframes for `fadeInUp`, `glow-pulse`
- Custom `boxShadow` for `glow-sm`, `glow-md`, `glow-lg` using lime-400

**Step 2: Set up globals.css**

Override shadcn CSS variables in `:root` / `.dark` to use our zinc + lime palette:
- `--background`: 0 0% 4% (zinc-950)
- `--foreground`: 0 0% 98%
- `--primary`: 82 85% 55% (lime-400 in HSL)
- `--primary-foreground`: 0 0% 4%
- `--card`: 240 6% 10% (zinc-900)
- `--border`: 240 4% 16% (zinc-800)
- `--muted-foreground`: 240 4% 66% (zinc-400)

Add custom utility classes:
- `.text-glow-lime` — text-shadow with lime
- `.glow-border` — box-shadow lime glow on hover

**Step 3: Update layout.tsx**

- Set `<html className="dark">` (force dark mode)
- Import Geist Sans and Geist Mono fonts
- Set metadata: title "David Hamilton | Full Stack Developer", description
- Body: `bg-background text-foreground antialiased`

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure neon lime theme and global styles"
```

---

## Task 3: Create data files

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/socials.ts`

**Step 1: Create project data**

Migrate from old `App.tsx`. Each project:
```typescript
export interface Project {
  title: string
  description: string
  image: string
  demo: string
  github?: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: "Angel Trust - Legal Services Platform",
    description: "A comprehensive legal services platform specializing in wills and trusts...",
    image: "/images/angeltrust.png",
    demo: "https://angel-trust.netlify.app",
    technologies: ["React", "SEO Optimization", "Netlify", "Tailwind CSS", "Legal Document Generation", "Analytics Integration"]
  },
  {
    title: "Muscle Map",
    description: "An AI-powered fitness application...",
    image: "/images/musclemapLOGO.png",
    demo: "https://musclemap.net",
    technologies: ["Angular", "Firebase", "Stripe", "AI Integration", "TypeScript"]
  },
  {
    title: "Southern Strength Gym",
    description: "A fully functional gym website with integrated membership management...",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1280",
    demo: "https://southernstrengthgym.com",
    technologies: ["React", "Node.js", "Payment Processing", "Scheduling System", "Member Portal"]
  },
  {
    title: "Harvey SSG - Digital Programs",
    description: "A custom influencer platform for Southern Strength Gym...",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1280",
    demo: "https://harvey.southernstrengthgym.com",
    technologies: ["React", "Stripe", "Content Management", "User Authentication", "Analytics"]
  }
]
```

**Step 2: Create experience data**

```typescript
export interface Experience {
  title: string
  organization: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    title: "Infantry Machine Gunner",
    organization: "United States Marine Corps",
    period: "2008 - 2012",
    description: "Combat veteran with deployments to Afghanistan.",
    highlights: [
      "Led direct fire support operations during combat deployments",
      "Vehicle commander in high-stress environments",
      "Completed Mountain Warfare School and Machine Gun Leaders Course",
      "Developed problem-solving and decision-making skills in critical situations"
    ]
  }
]
```

**Step 3: Create skills data**

Three categories (Frontend, Backend, Database & DevOps) with skill arrays — migrate from old backgroundSections.

**Step 4: Create socials data**

```typescript
export const socials = {
  github: "https://github.com/Hamilton8560",
  linkedin: "https://linkedin.com/in/david-hamilton-277639217",
  email: "davidhamilton473@gmail.com",
  calendly: "https://calendly.com/davidhamilton473/el-salvador-consultation"
}
```

**Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add static data files for projects, experience, skills, socials"
```

---

## Task 4: Build GSAP animation utilities

**Files:**
- Create: `src/lib/gsap.ts`
- Create: `src/hooks/use-gsap-scroll.ts`

**Step 1: Create GSAP config module**

`src/lib/gsap.ts`:
- Import gsap, ScrollTrigger
- Register ScrollTrigger plugin (with SSR guard: `if (typeof window !== 'undefined')`)
- Export gsap and ScrollTrigger

**Step 2: Create scroll animation hook**

`src/hooks/use-gsap-scroll.ts`:
- `useGsapFadeInUp(ref, options?)` — fade + translateY on scroll into view
- `useGsapStagger(containerRef, childSelector, options?)` — stagger children on scroll
- All use `useGSAP` from `@gsap/react` for proper cleanup
- Default trigger: `start: "top 80%"`, `toggleActions: "play none none none"`

**Step 3: Commit**

```bash
git add src/lib/ src/hooks/
git commit -m "feat: add GSAP scroll animation utilities"
```

---

## Task 5: Build Navbar component

**Files:**
- Create: `src/components/navbar.tsx`

**Step 1: Build the Navbar**

Client component (`"use client"`).

Desktop:
- Fixed top, full width, z-50
- Transparent bg, adds `backdrop-blur-md bg-zinc-950/80` on scroll (use useState + useEffect scroll listener)
- Left: "David Hamilton" text link (scrolls to top)
- Right: nav links — About, Experience, Projects, Contact — smooth scroll to section IDs
- Links: `text-zinc-400 hover:text-lime-400 transition-colors`
- Bottom border: `border-b border-zinc-800/50` (visible only after scroll)

Mobile:
- Hamburger icon (Menu from lucide) triggers shadcn Sheet
- Sheet slides in from right with nav links stacked vertically
- Links close the sheet on click

**Step 2: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: add sticky navbar with mobile drawer"
```

---

## Task 6: Build Hero section

**Files:**
- Create: `src/components/hero.tsx`

**Step 1: Build the Hero**

Client component. Full viewport height (`min-h-screen`).

Content:
- `<h1>` "David Hamilton" — `text-6xl md:text-8xl font-black` with lime text-glow
- `<h2>` "Full Stack Developer" — `text-2xl md:text-4xl text-zinc-400`
- `<p>` tagline — `text-lg text-zinc-500`
- Social icons row: GitHub, LinkedIn, Mail — `text-zinc-500 hover:text-lime-400` with glow hover
- Two buttons:
  - "View My Work" — shadcn Button, lime bg: `bg-lime-400 text-zinc-950 hover:bg-lime-500 hover:shadow-glow-md`
  - "Book a Call" — shadcn Button variant outline: `border-lime-400 text-lime-400 hover:bg-lime-400/10`
- Scroll indicator: ChevronDown bouncing at bottom

Background:
- CSS dot grid pattern or radial gradient mesh with low opacity
- Optional: subtle radial gradient from center with lime tint at very low opacity

GSAP:
- On mount, stagger fade-in-up for h1 → h2 → tagline → socials → buttons (delay 0.15s between each)
- Parallax on the background layer (slower scroll speed)

**Step 2: Commit**

```bash
git add src/components/hero.tsx
git commit -m "feat: add hero section with GSAP stagger animations"
```

---

## Task 7: Build About / Tech Background section

**Files:**
- Create: `src/components/about.tsx`

**Step 1: Build the About section**

Client component. `id="about"`.

Layout:
- Section padding: `py-24 px-4`
- Section heading: "About Me" or "Technical Background" with lime underline accent
- Brief paragraph about yourself
- 3 skill cards in a grid (1-col mobile, 3-col desktop)

Each skill card (shadcn Card):
- Icon (Code2, Server, Tool from lucide) in lime-400
- Category title (bold white)
- Description (zinc-400)
- Tech badges: shadcn Badge components with `variant="secondary"` styled with zinc-800 bg, zinc-300 text
- Card hover: `border-lime-400/50 shadow-glow-sm` transition

GSAP:
- Heading fades in on scroll
- Cards stagger in from below (translateY: 40 → 0, opacity: 0 → 1)

**Step 2: Commit**

```bash
git add src/components/about.tsx
git commit -m "feat: add about/tech background section with skill cards"
```

---

## Task 8: Build Experience Timeline section

**Files:**
- Create: `src/components/experience.tsx`

**Step 1: Build the Timeline**

Client component. `id="experience"`.

Layout:
- Section heading: "Experience" with lime accent
- Vertical timeline:
  - Center line: `w-px bg-zinc-800` absolute positioned
  - Timeline nodes: `w-3 h-3 rounded-full bg-lime-400` with glow
  - Desktop: entries alternate left/right of center line
  - Mobile: all entries on right side, line on left

Each entry (shadcn Card):
- Period badge: `text-lime-400 font-mono text-sm`
- Title: bold white
- Organization: zinc-400
- Highlight bullets: zinc-400 text

GSAP:
- Timeline entries reveal sequentially on scroll
- Each card: opacity 0→1, translateY 30→0, with stagger

**Step 2: Commit**

```bash
git add src/components/experience.tsx
git commit -m "feat: add experience timeline with GSAP scroll reveals"
```

---

## Task 9: Build Projects section

**Files:**
- Create: `src/components/projects.tsx`

**Step 1: Build the Projects grid**

Client component. `id="projects"`.

Layout:
- Section heading: "Featured Projects" with lime accent underline
- 2-column grid (1-col mobile), `gap-8`

Each project card (shadcn Card):
- Top: project image in `aspect-video overflow-hidden rounded-t-lg`
  - Image hover: `scale-105` transition
- Body: title (white, font-semibold), description (zinc-400), tech badges (shadcn Badge)
- Footer: "Live Demo" link with ExternalLink icon, "GitHub" link with Github icon
  - Links: `text-lime-400 hover:text-lime-300`
- Card hover: `border-lime-400/30` border color transition

GSAP:
- Cards fade + slide up on scroll with stagger

**Step 2: Commit**

```bash
git add src/components/projects.tsx
git commit -m "feat: add featured projects section"
```

---

## Task 10: Build Contact section

**Files:**
- Create: `src/components/contact.tsx`

**Step 1: Build the Contact CTA**

Client component. `id="contact"`.

Layout:
- Centered text, `py-24 px-4`
- Heading: "Let's Work Together" — large bold white
- Subtext: "I'm currently available for freelance work and full-time opportunities." — zinc-400
- Two CTA buttons side by side (flex row, gap-4):
  - "Get in Touch" — shadcn Button, lime bg, links to `mailto:davidhamilton473@gmail.com`
  - "Book a Call" — shadcn Button variant outline, lime border, links to `https://calendly.com/davidhamilton473/el-salvador-consultation` (target _blank)
- Social icons row below: GitHub, LinkedIn, Email — same style as hero

GSAP:
- Fade in on scroll

**Step 2: Commit**

```bash
git add src/components/contact.tsx
git commit -m "feat: add contact section with Calendly CTA"
```

---

## Task 11: Build Footer

**Files:**
- Create: `src/components/footer.tsx`

**Step 1: Build Footer**

Simple server component (no animations needed).

- `bg-zinc-900 border-t border-zinc-800`
- `py-8 px-4 text-center`
- "© 2026 David Hamilton. Built with Next.js & shadcn/ui"
- `text-zinc-500 text-sm`

**Step 2: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: add footer"
```

---

## Task 12: Assemble page and polish

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx` (final metadata)

**Step 1: Compose the page**

`src/app/page.tsx`:
```tsx
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
```

**Step 2: Verify it builds**

```bash
cd /Users/davidhamilton/portfolio-site
npm run build
```

Fix any type errors or build issues.

**Step 3: Run dev server and visual check**

```bash
npm run dev
```

Open http://localhost:3000, verify:
- All sections render
- GSAP animations fire on scroll
- Mobile responsive (check at 375px width)
- Lime accent colors correct
- Links work (Calendly, email, GitHub, project demos)

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: assemble full page layout and verify build"
```

---

## Task 13: Final polish and cleanup

**Files:**
- Various touch-ups across components

**Step 1: Polish pass**

- Smooth scroll CSS: `html { scroll-behavior: smooth; scroll-padding-top: 5rem; }`
- Ensure consistent spacing between sections
- Verify all hover states and transitions feel smooth
- Check that GSAP ScrollTrigger refresh works after initial render
- Remove any unused files from the old Vite setup

**Step 2: Clean up temp backup**

```bash
rm -rf /tmp/portfolio-backup
```

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final polish and cleanup"
```
