# W6 Landing + Docs — Visual Walkthrough
**Date:** 2026-08-28  
**Objective:** 709063

## Screenshots

### Landing — 1440px (`landing-1440.png`)
Dark mode, 1440x900. Shows new hero: "Your data. Your agents. Any model." headline, 
status pill listing "Grok · Claude · OpenAI", primary CTA "Read the setup guide" 
pointing to /docs/, and hero chips: "own your data", "own agent + skill files", 
"Grok · Claude · OpenAI", "teams + workspaces", "mobile", "objectives board".

### Landing — 390px (`landing-390.png`)
Dark mode, 390x844 (iPhone 14 size). Chips stack vertically, CTAs stack to full-width 
buttons. No overflow. Nav collapses correctly.

### Docs — 1440px (`docs-1440.png`)
Setup guide with two-column layout: sidebar nav + article content. Covers prerequisites,
.env config (7 vars with required/optional tags), docker compose up, Claude auth, 
health checks, seed user admin/changeme, first objective. Ports accurate: 3002/4000.

### Docs — 390px (`docs-390.png`)
Single-column layout on mobile. Sidebar moves above content. Prereq grid collapses 
to 1 column. All code blocks scroll horizontally. 

## CTA verification
Playwright test: click `.btn-primary` from landing.  
Result URL: `https://m1keluka.github.io/operationkit-site/docs/`  
Console errors: none

## Stop-slop
- Em dashes in landing HTML: 0
- Ban-list words (leverage, synergy, etc.): 0
- Em dashes in docs prose: 0 (one in a `<pre>` shell comment is acceptable)

## Feel check
`feel-check.sh` on site dir: **0 candidate findings**  
`prefers-reduced-motion` guarded in landing script and CSS.
