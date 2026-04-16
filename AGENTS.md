# AGENTS.md

## Project
PersianSaze marketing website rebuild using the existing `mainline-astro-template` repository as the base template.

This project is a **marketing site**, not the product application. The application is separate.

## Primary goal
Build a clear, credible, conversion-focused marketing website that:
- explains what PersianSaze does
- communicates the value proposition clearly
- captures leads
- supports strong SEO and AEO

## Business context
PersianSaze helps suppliers sell better into active construction projects by giving them access to live project data, execution tools, and training.

Do not position PersianSaze as:
- just a contact database
- just a CRM
- just an SMS platform
- just a project directory

Position it as a structured system for smarter sales to builders.

## Source of truth
Before changing copy, structure, or page content, use these documents in this order:
1. `docs/content-source-of-truth.md`
2. `docs/page-spec-home.md`
3. `docs/site-architecture.md`
4. `docs/project-overview.md`
5. `docs/seo-aeo-rules.md`
6. `docs/implementation-rules.md`

If there is a conflict, prefer the more specific document.

## Critical content rule
The raw homepage source text transferred from the founder's text file is intentionally preserved.

Do **not** rewrite, paraphrase, shorten, "improve," translate, normalize, or reinterpret preserved source copy unless explicitly instructed.

If content needs adaptation for UI placement, keep the original wording intact and only change formatting or layout.

## Template policy
Use the existing Astro template as the foundation.

Default behavior:
- reuse existing layout patterns
- reuse existing components where possible
- adapt the template instead of rebuilding from scratch
- remove irrelevant sections cleanly
- avoid unnecessary new abstractions

Do not create a brand new design system unless explicitly instructed.

## Scope for current phase
Current phase is focused on:
- homepage structure
- homepage copy integration
- PersianSaze branding replacement
- navigation structure
- basic lead capture paths
- SEO/AEO-friendly page structure

Out of scope for now unless explicitly requested:
- CMS integration
- analytics setup
- backend systems
- multilingual system
- full blog rollout
- advanced animations
- major UI experimentation

## Design direction
Preferred aesthetic:
- calm
- minimal
- polished
- high-trust
- content-first
- Anthropic-style restraint

Avoid:
- noisy SaaS clichés
- excessive gradients
- aggressive startup language
- visually busy sections
- meaningless motion
- overdesigned cards

## Implementation style
Prioritize:
- clarity
- simplicity
- maintainability
- fast loading
- semantic HTML
- clean information hierarchy

Keep pages lean.
Prefer simple sections over complex interactions.
Minimize client-side JavaScript unless necessary.

## SEO and AEO expectations
Implementation should support:
- clear heading hierarchy
- strong semantic structure
- crawlable content
- entity clarity
- FAQ-ready structure
- internal linking opportunities
- metadata support
- clean URL architecture

Do not hide important copy inside tabs, carousels, or heavy interaction patterns when static content would work better.

## Editing rules
When making changes:
- make the smallest correct change
- preserve template quality
- preserve responsiveness
- do not introduce style drift
- do not rename files or move structure unnecessarily
- do not remove reusable template capabilities unless they are clearly irrelevant

## Homepage priority
Homepage is the first priority page.

Treat homepage work as the main implementation track before expanding into secondary pages.

## Output expectations
When completing a task:
- explain what changed
- list touched files
- call out assumptions
- flag any unresolved ambiguity

## When uncertain
If requirements are unclear, do not invent product claims.
Use the provided docs and preserve the source language faithfully.
