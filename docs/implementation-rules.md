# Implementation Rules

## Primary implementation strategy
- Start from the existing Astro template.
- Reuse existing sections, components, layouts, and patterns whenever possible.
- Do not rebuild sections from scratch unless the existing template structure cannot support the required content.

## Scope control
- V1 scope is the marketing site only.
- Do not add application features, account features, dashboards, or backend product logic.
- Do not introduce CMS, analytics, automation, or multilingual infrastructure in the first pass unless explicitly requested.

## Content handling rules
- The file `docs/content-source-of-truth.md` is the main content reference.
- Any source text marked as exact or verbatim must be preserved without paraphrase, summarization, compression, or reinterpretation.
- Content may be reorganized into sections for layout purposes, but the source wording must not be altered where verbatim preservation is required.
- If a section needs shorter UI copy, create a derived version only when explicitly allowed.

## Design rules
- Preserve the template's overall design language.
- Avoid style drift.
- Avoid mixing unrelated visual patterns.
- Keep the interface clean, calm, and content-first.
- Prefer typography, spacing, and hierarchy over decorative effects.
- Minimize animation and motion.

## Component rules
- Prefer editing existing components over creating new ones.
- Create new components only when:
  - no existing component fits the need, or
  - reuse would create worse structure or worse maintainability.
- Keep components small, readable, and easy to edit.
- Do not introduce unnecessary abstraction.

## Layout rules
- Home page is the highest-priority page.
- Optimize first for desktop clarity and then ensure strong mobile responsiveness.
- Keep section order aligned with `docs/page-spec-home.md` unless a clear UX improvement is approved.
- Do not overload pages with extra sections just because the template includes them.

## Performance rules
- Keep the site lightweight.
- Minimize client-side JavaScript.
- Avoid unnecessary interactive behavior.
- Reuse Astro-first patterns where possible.
- Do not add large dependencies unless clearly justified.

## SEO and AEO implementation rules
- Follow `docs/seo-aeo-rules.md`.
- Use semantic heading hierarchy.
- Keep page structure scannable and entity-clear.
- FAQ content must be easy to parse for both users and answer engines.
- Internal linking should be intentional, not excessive.

## File editing discipline
- Make targeted edits.
- Do not rename files, move folders, or restructure the project without a clear reason.
- Do not remove useful template capabilities unless they conflict with the new site architecture.
- When editing copy, keep content ownership clear between source files and UI files.

## What to avoid
- Do not overengineer.
- Do not convert the project into a custom design system exercise.
- Do not add visual complexity for the sake of originality.
- Do not create placeholder claims, fake proof, or invented product details.
- Do not rewrite core business language casually.

## Delivery standard
- Every change should make the site:
  - clearer,
  - more conversion-oriented,
  - more faithful to the product,
  - or easier to maintain.
- If a proposed change does not improve one of those, it should probably not be implemented.
