# Product Requirements Document (PRD)
## Krishna Patel — Developer Portfolio Website

| | |
|---|---|
| **Document owner** | Krishna Patel |
| **Status** | Draft v1.0 |
| **Reference design** | Friend's portfolio (`rmnportfolio.vercel.app`) |
| **Primary source content** | Krishna Patel Resume (attached) |
| **Target launch** | TBD |

---

## 1. Purpose & Background

Krishna needs a personal portfolio website to support his job search for **Software Development, Backend Engineering, and AI/ML roles**. He has seen a friend's portfolio (screenshots attached) and wants his own site built in a **similar visual style and information architecture**, but populated with his own, real, resume-backed content.

This PRD defines every page, section, component, piece of content, and technical requirement needed to design and build that site. It also flags where the reference design's content (research papers, open-source PRs, published papers) does **not** exist in Krishna's resume, and proposes how to adapt those sections honestly rather than fabricate credentials.

> ⚠️ **Integrity constraint (non-negotiable):** The reference portfolio includes a NeurIPS submission, published journal papers, and merged/open PRs to LangChain, LangGraph, OpenAI SDK, LiteLLM, and Microsoft AutoGen. Krishna's resume contains **no research publications and no public open-source contribution history**. This PRD does **not** propose copying those claims. Section 6 below defines how the "Research" and "Open Source" concepts are either removed, renamed, or replaced with truthful equivalents (certifications, hackathons, leadership).

---

## 2. Goals & Success Metrics

### 2.1 Goals
- G1: Present Krishna as a credible, hire-ready Software Developer / Backend / AI-ML engineer within 5 seconds of landing on the page.
- G2: Make it effortless for a recruiter to (a) skim experience, (b) see real project work, (c) download a resume, (d) contact him — all without leaving the page.
- G3: Match the polished, dark, "engineer's terminal" aesthetic of the reference site — sticky nav, monospace accents, pill badges, card-based layout.
- G4: Be fully responsive (mobile recruiters browsing on phones are common) and fast (sub-2s load).
- G5: Be truthful — every claim on the site must trace back to the resume or a verifiable artifact (GitHub repo, live demo link).

### 2.2 Success Metrics (post-launch, informal)
- Time-to-contact: recruiter can find email/phone/LinkedIn in under 10 seconds.
- Resume download completion from the Contact/Hero section.
- Positive feedback on clarity/design when shared in applications or on LinkedIn.
- Site loads and renders correctly on Chrome, Safari, and mobile Safari/Chrome.

---

## 3. Target Audience

| Persona | What they want | Where they'll look first |
|---|---|---|
| **Recruiter / HR screener** | 10-second scan: role fit, years of experience, contact info | Hero, nav, Contact |
| **Hiring manager / tech lead** | Depth: real projects, stack, ownership of production systems | Experience, Projects, Stack |
| **Peer engineer (referral)** | Technical credibility, code quality signals | Projects, Stack, GitHub links |

---

## 4. Design Reference Analysis (from screenshots)

The reference site establishes this pattern, which Krishna's site should **structurally mirror**:

- **Global**
  - Dark background (near-black), single accent color used sparingly (their site: burnt orange `#F5842A`-ish; Krishna's existing draft uses cyan `#22D3EE` — **pick one accent, see Section 8**).
  - Sticky top navigation bar with logo/initials mark on the left, section links center/right, a filled "Hire Me" CTA button on the far right.
  - Monospace font used for nav links, labels, tags, and terminal-style UI; a display sans-serif/grotesk font used for large headings; a body sans-serif for paragraph copy.
  - Section eyebrow labels in the accent color, uppercase, small, e.g. `// SHIPPED WORK`.
  - Big, bold, all-caps or large-weight section titles.
  - Card components everywhere: dark panel background, 1px subtle border, rounded corners (~8px), hover states (border brightens, slight lift).
  - Status/metric badges as small pill tags (e.g. `<3s E2E latency`, `95% noise reduction`) directly under card descriptions, plus a second row of plain tech-stack tags.
  - "Status" pill badges on cards (`Live & Open Source`, `Live in Production`, `Open PR`, `Closed PR`, `Shipped`, `Published Paper`, `Preprint`, `Under Review`) — color-coded (green = live/shipped, orange = in progress/open).

- **Hero section**
  - Small green pulsing-dot availability pill: *"Available for hire — zero notice period"*.
  - Large name in big bold caps/display type.
  - One-line rotating/typed role title with blinking cursor.
  - 2–3 sentence positioning statement, with 1–2 bolded phrases.
  - Two CTA buttons: primary (filled, accent) "View Work", secondary (outlined) "Get In Touch".
  - Row of icon links: GitHub · LinkedIn · Email · Resume (separated by `|`).
  - Right side: professional headshot photo in a bordered/cropped frame with corner-bracket decoration.

- **Work / Projects section**
  - Eyebrow + big title + one-line subtitle.
  - Stacked full-width cards, each with:
    - Project name + status pill (top-left)
    - GitHub icon button (top-right)
    - Bold one-line outcome statement
    - Optional "used at [Company]" attribution line in accent color
    - 2–3 sentence description
    - Row of **metric pill badges** (quantified impact)
    - Row of **plain tech tags**

- **Open Source section** (reference-specific — see Section 6 for Krishna's adaptation)
  - Same card pattern, one card per PR/contribution: repo name, status pill (`Open PR` / `Closed PR`), fork icon + `org/repo` path, one-line fix title in accent color, description of the technical fix, metric tags, tech tags.

- **Research section** (reference-specific — see Section 6)
  - List of publication cards: icon (trophy/document), venue badge (`NeurIPS 2026`, `IF: 9.15`, `Preprint`), title, one-line abstract, external link icon.

- **Stack section**
  - Eyebrow + title + subtitle.
  - 3-column (2-column tablet, 1-column mobile) grid of category cards: icon + uppercase label header, then wrapped pill tags of tools, grouped by category (AI/ML, Speech/NLP, Languages, Backend/Infra, Cloud/DevOps, Tools/MLOps).

- **About section**
  - Eyebrow + title.
  - Left column (wider): 3 short paragraphs of narrative bio, with bolded key nouns and one accent-colored phrase.
  - Right column: stacked "fact cards" — short bold title + one-line supporting description (4 cards: e.g. "Ships fast", "Production over demos", "Research-grounded", "Cost-conscious").

- **Contact section**
  - Eyebrow + title + subtitle stating what roles they're open to + availability.
  - 2x2 grid of contact-method cards (icon + label + value, whole card clickable): Email, GitHub, LinkedIn, Phone.
  - Wide highlighted "availability" card: location/remote note + big CTA button ("Say Hello") + secondary resume-download buttons (they even split into "AI/ML Resume" and "SDE Resume" — two tailored resumes).

- **Footer**
  - "Built by [Name]" on the left, social icon row on the right.

---

## 5. Sitemap & Navigation

Single-page site with anchor-linked sections, sticky nav (mirrors reference exactly):

```
Home (#hero)
 ├── Experience   (#experience)
 ├── Projects     (#projects)
 ├── Stack        (#stack)
 ├── About        (#about)
 └── Contact      (#contact)
[Hire Me] → scrolls to #contact
```

**Note on nav:** The reference site has 6 nav items (Work, Open Source, Research, Stack, About, Contact) because it has 6 truthful sections. Krishna's resume supports **5 sections** (Experience, Projects, Stack, About, Contact). Do not add empty/padded nav items — recruiters notice thin content immediately. See Section 6 for the recommended alternative to "Open Source" / "Research."

Active-link highlighting on scroll (accent color + underline/glow), same as reference (`IntersectionObserver` or scroll-position logic already implemented in the existing draft).

---

## 6. Content Mapping — Resume → Sections

This is the core deliverable: every section's real content, pulled directly from Krishna's resume, with no invented claims.

### 6.1 Hero
| Field | Content |
|---|---|
| Availability pill | "Available for hire — Open to work" *(only say "zero notice period" if actually true — confirm before using that exact phrase)* |
| Name | Krishna Patel |
| Rotating role line | "Software Developer" / "Backend Engineer" / "AI/ML Enthusiast" / "Node.js · Python · TypeScript" |
| Positioning statement | "I build backend services and AI-native systems — Node.js/TypeScript APIs, Python automation, and agent orchestration pipelines that ship to production, not just demos." |
| Primary CTA | "View Projects" → `#projects` |
| Secondary CTA | "Get In Touch" → `#contact` |
| Social row | GitHub: `github.com/krishnapatel9` · LinkedIn: `linkedin.com/in/krishna-patel` · Email: `krishna.patel092004@gmail.com` · Resume (PDF download) |
| Photo | Professional headshot (to be supplied by Krishna — reference site uses one; current draft uses a terminal graphic instead, which is also acceptable if no headshot is available) |

### 6.2 Experience (replaces reference's implicit work-history framing)
Two roles, most recent first:

**AI/ML Intern — MyOnsiteHealthcare (Onsite)** · Jan 2026 – Jun 2026
- Implemented GitLab CI/CD pipelines using self-hosted runners, SSH-based deployments, and secure environment variable management to automate build, test, and release workflows.
- Developed scalable programmatic SEO workflows addressing content quality, pagination, and search ranking optimization across large-scale web properties.
- Implemented AI agent orchestration, Keycloak SSO/RBAC, Vault-based secret management, and real-time data integration for a production-scale enterprise operations platform.

**AI/ML Intern — Joflee (Remote)** · Jul 2025 – Dec 2025
- Applied machine learning techniques to real-world projects — model development, testing, optimization, and building data pipelines for preprocessing and feature engineering.
- Conducted experiments using TensorFlow, PyTorch, and Scikit-learn; collaborated cross-functionally to integrate ML components into end-to-end systems with version control and code review.

### 6.3 Projects (maps directly to reference's "Work / Featured Projects")
Use the reference's card pattern — status pill, description, metric badges, tech tags. Krishna's real projects and *honest* metric badges (only using numbers actually in his resume/known facts — no invented latency/cost figures):

**1. Compliance Document Tracker**
- Status pill: `Shipped` (or `Live` if actually deployed — confirm hosting URL)
- Description: Full-stack compliance document management system with secure JWT authentication, PDF uploads, and RESTful APIs. Includes relational database modeling, SQL-based dashboard analytics, automated email reminders via cron jobs, and Dockerized deployment with full API documentation.
- Tech tags: React, Node.js, Express, PostgreSQL, Prisma, Docker, JWT
- GitHub link → `github.com/krishnapatel9`

**2. AI Multimodal Video Captioning Tool**
- Status pill: `Shipped`
- Description: Full-stack Gradio app integrating Whisper (speech-to-text), BLIP (image captioning), and YOLOv8 (object detection) with HuggingFace LLMs to generate transcripts, styled captions, and scene descriptions from video. Computes audio SNR, blur score, and readability metrics to assess output reliability and auto-generate subtitles.
- Tech tags: Python, Gradio, Whisper, BLIP, YOLOv8, HuggingFace
- GitHub link

**3. AI-Powered Productivity Chrome Extension**
- Status pill: `Shipped`
- Description: Chrome extension leveraging the Perplexity AI API to generate intelligent video summaries with timestamp-linked highlights for YouTube content. Adds multi-quality video downloading and enhanced playback controls via browser extension APIs.
- Tech tags: JavaScript, Perplexity AI API, Chrome Extension APIs
- GitHub link

> **Action item for Krishna:** For each project, provide (a) the real GitHub repo URL, (b) a live demo URL if one exists, (c) any real quantifiable metric (users, requests/sec, latency, cost) so the metric-badge row can be filled honestly. If no metric exists, omit the metric-badge row for that card rather than inventing one — this differs from the reference but preserves credibility.

### 6.4 Stack (maps directly to reference's "Stack" section — 6-category grid works as-is)
| Category | Items (from resume) |
|---|---|
| Languages | TypeScript, JavaScript (Node.js), Python, Java, C, SQL |
| Backend / APIs / Integrations | REST APIs, FastAPI, Express, WebSockets, third-party & enterprise system integrations, automation workflows |
| AI Development | AI agent orchestration, GenAI & conversational-AI workflows, RAG, Vector Databases (Chroma), HuggingFace, PyTorch |
| Databases | PostgreSQL, MySQL, MongoDB, Redis |
| Cloud / DevOps | AWS, Docker, Git, CI/CD (GitLab pipelines, self-hosted runners), Keycloak SSO/RBAC, Vault |
| Certifications | AWS Academy Cloud Foundations, Database & SQL (Infosys), ChatGPT Prompt Engineering for Developers (DeepLearning.AI), Problem Solving (HackerRank) |

### 6.5 About Me
Narrative paragraphs (adapted from resume, no invented facts):
> "Final-year Computer Science student at Parul University (CPI 8.21, graduating 2026), working at the intersection of **backend engineering and AI-native development**."
>
> "I've shipped GitLab CI/CD pipelines with self-hosted runners in production, built AI agent orchestration for an enterprise operations platform, and developed multimodal AI tools combining speech, vision, and language models end-to-end."
>
> "I lean on AI coding assistants to prototype fast without cutting corners — comfortable picking up new tools quickly in cross-functional, fast-paced teams."

Education box: **Parul University, Vadodara** — B.Tech, Computer Science Engineering · CPI 8.21 · 2022–2026

Fact cards (4, mirroring reference's format, truthful to Krishna):
1. **Production experience** — "Built CI/CD pipelines, SSO, and agent orchestration for a live enterprise healthcare operations platform, not a demo."
2. **AI-native workflow** — "Uses AI coding assistants to prototype quickly while keeping code quality and scalability intact."
3. **Full-stack range** — "Comfortable from Node.js/TypeScript APIs down to Python ML pipelines and infra automation."
4. **Leadership** — "Anchor at CDC (Career Development Cell), Technical Team at PU AI Society, Finance Team at PU Projections '24; competed in PUCodeHackathon 2.0."

### 6.6 "Open Source" and "Research" — recommended adaptation
Krishna's resume has **no research publications** and **no documented open-source PR history**. Three honest options, in order of recommendation:

- **Option A (recommended): Remove both sections entirely.** Nav becomes Experience · Projects · Stack · About · Contact (5 items), matching the current draft site already built for Krishna. Cleanest, zero risk of misrepresentation.
- **Option B: Replace "Open Source" with a "Leadership & Activities" section**, using the reference's card layout (status pill → repurposed as a role/date pill) to show: CDC Anchor role, PU AI Society technical team, PU Projections '24 finance team, PUCodeHackathon 2.0 participation.
- **Option C:** If Krishna does have real GitHub activity (public repos, stars, contributions) even without merged PRs to major libraries, a lightweight "GitHub Activity" section could show repo cards for `krishnapatel9`'s own repos (the three Projects above) instead of duplicating them — but this risks feeling redundant with Projects, so Option A or B is preferred.

**Decision needed from Krishna before design starts.** This PRD proceeds assuming **Option A** for the primary build, with Option B as a nice-to-have if leadership content should be surfaced more prominently than as one About fact-card.

### 6.7 Contact
| Field | Content |
|---|---|
| Section subtitle | "Open to Software Development, Backend Engineering, and AI/ML roles. Let's build something reliable." |
| Email card | krishna.patel092004@gmail.com (mailto: link) |
| GitHub card | github.com/krishnapatel9 |
| LinkedIn card | linkedin.com/in/krishna-patel |
| Phone card | +91-9773039990 (tel: link) |
| Availability banner | "India — Open to Remote / Onsite" · "Comfortable across timezones and fast-paced, cross-functional teams." |
| Primary CTA | "Say Hello" → mailto |
| Resume button(s) | Single "Download Resume" button (Krishna has one resume, unlike the reference's split AI/ML vs SDE resumes — add a second button only if Krishna produces a second tailored resume) |

### 6.8 Footer
- Left: "Built by **Krishna Patel**"
- Right: GitHub · LinkedIn · Email icon links

---

## 7. Functional Requirements

| ID | Requirement |
|---|---|
| F1 | Sticky nav bar, becomes semi-transparent + blurred on scroll |
| F2 | Smooth scroll to anchor sections on nav-link / CTA click |
| F3 | Active nav-link highlight tracks current section in viewport |
| F4 | Hero role line: typewriter animation cycling through role strings, blinking cursor |
| F5 | Availability pill: pulsing dot animation (CSS) |
| F6 | All project/stack/contact cards: hover state (border color shift, subtle translateY lift) |
| F7 | All external links (`GitHub`, `LinkedIn`) open in new tab (`target="_blank" rel="noopener"`) |
| F8 | Email/phone contact cards use `mailto:` / `tel:` links |
| F9 | Resume button triggers a direct PDF download (not just a link to view) |
| F10 | Fully responsive: desktop (≥1024px), tablet (640–1023px), mobile (<640px) — nav collapses appropriately (reference currently just hides nav links under 800px; recommend adding a mobile hamburger menu as an improvement) |
| F11 | Respect `prefers-reduced-motion` — disable typewriter/pulse animations for users who request reduced motion |
| F12 | Page must degrade gracefully with JavaScript disabled (core content still readable; only animations lost) |

---

## 8. Visual Design System

Krishna already has a working dark "terminal" themed draft (see attached HTML). Recommendation: **keep and refine that existing direction** rather than copy the reference's orange theme 1:1, since it's already built, on-brand, and visually distinct from the friend's site (avoids the two portfolios looking identical if ever seen side by side).

| Token | Value (current draft) |
|---|---|
| Background | `#0A0E11` |
| Panel / card background | `#10151A` |
| Panel border | `#1E262D` |
| Primary text | `#E8EDF0` |
| Secondary text | `#8B98A3` |
| Faint text | `#556069` |
| Accent (primary) | `#22D3EE` (cyan) |
| Accent glow | `rgba(34,211,238,0.12)` |
| Success / status green | `#4ADE80` |
| Display font | Space Grotesk (600–700 weight) |
| Body font | Inter (400–600 weight) |
| Monospace / UI font | JetBrains Mono |

**Alternative:** If Krishna prefers to match the reference's warmer orange-on-black look instead, swap `--accent` to an orange (`#F5842A`-range) and adjust `--accent-glow`/status-green pairing accordingly — this is a single-variable change given the existing CSS custom-property setup.

---

## 9. Technical Requirements

- **Stack:** Static single-page site (plain HTML/CSS/JS, as already built) is sufficient — no backend needed since there's no dynamic data. A React/Next.js rebuild is optional if Krishna wants component reuse or a contact form with server-side email handling.
- **Hosting:** Vercel (free tier), matching reference's `*.vercel.app` deployment pattern. Custom domain optional.
- **Assets:** Resume PDF hosted alongside the site for direct download; headshot photo (if used) optimized (WebP, <200KB).
- **Fonts:** Loaded via Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`), as in current draft.
- **Performance targets:** Lighthouse Performance ≥ 90, First Contentful Paint < 1.5s, total page weight < 1.5MB (excluding resume PDF).
- **SEO:** `<title>`, meta description, Open Graph tags (name, role, headshot/preview image) for LinkedIn link-preview quality.
- **Accessibility:** Sufficient color contrast for text on dark background (verify `--text-dim` and `--text-faint` meet WCAG AA against `--bg`), semantic HTML landmarks, alt text on the headshot image, focus states on all interactive elements (buttons/links currently only have hover states — add visible `:focus-visible` outlines).
- **Analytics (optional):** Lightweight page-view tracking (e.g., Vercel Analytics or Plausible) to know if recruiters are actually visiting.

---

## 10. Open Questions for Krishna (blockers before final build)

1. **Headshot photo** — do you have one to use, or keep the current terminal-graphic hero visual?
2. **Open Source / Research sections** — confirm Option A (remove), B (replace with Leadership section), or C, per Section 6.6.
3. **Live URLs** — which projects (if any) are actually deployed/live vs. code-only on GitHub? Needed for accurate status pills (`Live` vs `Shipped`).
4. **Metrics** — any real numbers (users, requests handled, uptime, latency, workload reduction %) you can attach to the MyOnsiteHealthcare or Joflee work, or to any project? Only include what's verifiable.
5. **Second resume** — do you want a single general resume, or split AI/ML vs. SDE-focused resumes like the reference (two buttons)?
6. **Domain** — deploy to a free `*.vercel.app` subdomain, or purchase a custom domain (e.g., `krishnapatel.dev`)?
7. **Accent color** — keep cyan (current draft) or switch to warm orange (closer to reference)?

---

## 11. Out of Scope (v1)

- Blog / articles section
- CMS or admin panel for editing content without touching code
- Contact form with backend email delivery (mailto link is sufficient for v1)
- Multi-language support
- Dark/light theme toggle

---

## 12. Appendix — Component Inventory Checklist

- [ ] Sticky nav w/ scroll-active state + Hire Me CTA
- [ ] Hero: availability pill, name, typewriter role line, positioning copy, 2 CTAs, social row, hero visual
- [ ] Experience: 2 timeline entries (date column + role/company/bullets)
- [ ] Projects: 3 project cards (status pill, description, tags)
- [ ] Stack: 6 category cards in responsive grid
- [ ] About: 3-paragraph bio + education box + 4 fact cards
- [ ] Contact: 4 contact-method cards + availability banner w/ CTA + resume button(s)
- [ ] Footer: name + social icons
- [ ] Global: responsive breakpoints, reduced-motion support, focus states, meta/OG tags
