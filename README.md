# AN Session Details Panel Demo

Standalone Vite + React + TypeScript demo of an observability **session details** sidebar. Hardcoded exemplar session (Reliability + Throughput impacts). No backend, no private design-system packages.

## Live URL (permanent)

**https://an-session-details-demo.vercel.app**

Embed-ready:

- https://an-session-details-demo.vercel.app/?embed=1
- https://an-session-details-demo.vercel.app/?embed=1&theme=dark

Repo: https://github.com/ranakrishna26/an-session-details-demo

## Run locally

```bash
npm install
npm run dev
```

## Framer embed

Design frame: **1106 × 718.5** (panel centered; scales to fit while keeping that aspect).

In Framer, size the Embed to **1106 × 718.5** (or any size with the same ratio).

```html
<iframe
  src="https://an-session-details-demo.vercel.app/?embed=1"
  title="AN Session Details"
  style="border:0;width:100%;height:100%;display:block;background:#f5f5f5;"
  loading="lazy"
></iframe>
```

## What you can try

1. Metadata block (session ID, site, duration, times)
2. Impact types with soft-red / soft-yellow chips
3. Correlated KPIs (Connectivity + Signal)
4. Close panel / Show session details again
5. Light / dark theme toggle
6. Scroll when the viewport is short

## Project layout

```
src/
  demoData.ts
  SessionDetailsDemo.tsx
  components/ImpactIssueIcons.tsx
  styles/tokens.css
  styles/sessionDetails.css
  App.tsx
```
