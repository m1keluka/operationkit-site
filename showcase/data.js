/* =============================================================================
   OperationKit showcase — shared placeholder data
   Single source of truth for all 3 directions. NOT real data; design fixtures.
   Exposed as window.OK.  Statuses use the W2 7-status pipeline keys.
   ============================================================================= */
(function () {
  // status key -> {label, color token name}. Colors live in each direction's CSS
  // as --st-<key>; here we only carry the key + human label + a default hex so a
  // direction can fall back if it wants.
  const STATUS = {
    planning: { label: "Planning",  hex: "#9b8cf0" }, // AI drafting a plan
    queue:    { label: "Queued",    hex: "#8b8a84" }, // idle, waiting for runner
    working:  { label: "Working",   hex: "#5b9df0" }, // agent executing
    ai:       { label: "AI Review", hex: "#46c2b6" }, // agent self-reviewing
    review:   { label: "Checks",    hex: "#e0a458" }, // CI / checks running
    human:    { label: "Needs You", hex: "#ff5a1f" }, // NEEDS YOU — the accent
    done:     { label: "Shipped",   hex: "#1fb877" }, // success / shipped
    blocked:  { label: "Blocked",   hex: "#e5564b" }, // the only red
  };

  // agent identity (desaturated; never competes with status)
  const AGENTS = {
    cto:     { name: "CTO",     mono: "CT", hex: "#6f9ad8" },
    cmo:     { name: "CMO",     mono: "CM", hex: "#d389b0" },
    coo:     { name: "COO",     mono: "CO", hex: "#6fb58c" },
    cfo:     { name: "CFO",     mono: "CF", hex: "#d6a24e" },
    general: { name: "General", mono: "GN", hex: "#8c8a92" },
  };

  // The objective pipeline. Realistic-feeling titles, branches, PRs, costs.
  const OBJECTIVES = [
    {
      id: "OBJ-1729", agent: "cto", status: "human",
      title: "OperationKit design showcase — 3 directions across core screens",
      desc: "Standalone gallery presenting Mission Control / Terminal / Flow Canvas so Mike can pick + dial in.",
      type: "task", model: "ultracode", sessions: 22, cost: 653.70,
      branch: "showcase-gallery", pr: 0, live: true,
      workspace: "mike-luka", category: "Development",
      workers: { done: 11, total: 11 },
      review: [true, true, true, null],
      updated: "2026-06-24T14:02:00Z",
    },
    {
      id: "OBJ-1727", agent: "cto", status: "done",
      title: "OperationKit UI/UX audit — page-by-page teardown + screen inventory",
      desc: "Objective audit of the current app; 28 screenshots; reusable screen + component inventory.",
      type: "task", model: "opus", sessions: 8, cost: 142.18,
      branch: "ui-audit", pr: 412, live: false,
      workspace: "mike-luka", category: "Development",
      workers: { done: 3, total: 3 },
      review: [true, true, true, true],
      updated: "2026-06-24T11:40:00Z",
    },
    {
      id: "OBJ-1636", agent: "cto", status: "working",
      title: "PostHog analytics — platform + landing instrumentation",
      desc: "Wizard-driven setup, admin analytics dashboard, dual platform/landing tracking.",
      type: "feature", model: "opus", sessions: 14, cost: 308.42,
      branch: "feat/posthog", pr: 388, live: true,
      workspace: "axia", category: "Development",
      workers: { done: 5, total: 7 },
      review: [true, true, null, null],
      updated: "2026-06-24T13:55:00Z",
    },
    {
      id: "OBJ-1574", agent: "cmo", status: "review",
      title: "OperationKit launch wave — landing, LinkedIn kit, hiring funnel",
      desc: "Three Phase-B launch deliverables for open-sourcing Command Center as OperationKit.",
      type: "campaign", model: "opus", sessions: 19, cost: 421.05,
      branch: "launch/wave-3", pr: 401, live: false,
      workspace: "mike-luka", category: "Marketing",
      workers: { done: 4, total: 4 },
      review: [true, true, true, null],
      updated: "2026-06-24T09:12:00Z",
    },
    {
      id: "OBJ-1532", agent: "coo", status: "ai",
      title: "GetLeads contact-export pipeline — async CSV to S3",
      desc: "Background export job, presigned download, credit metering per row.",
      type: "feature", model: "opus", sessions: 11, cost: 196.77,
      branch: "feat/csv-export", pr: 377, live: true,
      workspace: "getleads", category: "Development",
      workers: { done: 6, total: 8 },
      review: [true, null, null, null],
      updated: "2026-06-24T13:30:00Z",
    },
    {
      id: "OBJ-1506", agent: "cfo", status: "queue",
      title: "Q3 runway model — burn, headcount, scenario forecast",
      desc: "Refresh cash position from QuickBooks; 3 scenarios; board-ready one-pager.",
      type: "report", model: "opus", sessions: 3, cost: 41.20,
      branch: "", pr: 0, live: false,
      workspace: "axia", category: "Finance",
      workers: { done: 0, total: 0 },
      review: [null, null, null, null],
      updated: "2026-06-24T08:05:00Z",
    },
    {
      id: "OBJ-1549", agent: "general", status: "blocked",
      title: "RealTrends scraper — nightly brokerage rankings ingest",
      desc: "Blocked: upstream changed pagination; selector pass + retry policy needed.",
      type: "task", model: "opus", sessions: 6, cost: 88.94,
      branch: "fix/realtrends-pager", pr: 113, live: false,
      workspace: "grsfd", category: "Development",
      workers: { done: 1, total: 4 },
      review: [false, null, null, null],
      updated: "2026-06-23T22:18:00Z",
    },
    {
      id: "OBJ-1490", agent: "cmo", status: "planning",
      title: "GEO content engine — programmatic comparison pages",
      desc: "AI drafting the plan: topic clusters, template, internal-link graph.",
      type: "campaign", model: "opus", sessions: 2, cost: 18.60,
      branch: "", pr: 0, live: true,
      workspace: "mike-luka", category: "Marketing",
      workers: { done: 0, total: 0 },
      review: [null, null, null, null],
      updated: "2026-06-24T13:58:00Z",
    },
    {
      id: "OBJ-1455", agent: "coo", status: "done",
      title: "n8n vhost recovery — Caddy block + webhook path restore",
      desc: "Restored n8n.axiagrowth.com edge routing; committed the dropped Caddyfile block.",
      type: "task", model: "opus", sessions: 5, cost: 73.31,
      branch: "ops/n8n-vhost", pr: 366, live: false,
      workspace: "axia", category: "Operations",
      workers: { done: 2, total: 2 },
      review: [true, true, true, true],
      updated: "2026-06-23T19:44:00Z",
    },
  ];

  // Column model — the board groups objectives by these lanes.
  const COLUMNS = [
    { key: "queue",   title: "Queued",    statuses: ["queue", "planning"] },
    { key: "working", title: "Working",   statuses: ["working", "ai", "review"] },
    { key: "human",   title: "Needs You", statuses: ["human", "blocked"] },
    { key: "done",    title: "Shipped",   statuses: ["done"] },
  ];

  // Category filter tabs (with live counts derived at render time).
  const CATEGORIES = ["All", "Development", "Marketing", "Operations", "Finance"];

  // A live session transcript for the Session Viewer (OBJ-1729).
  const SESSION = {
    objectiveId: "OBJ-1729",
    agent: "cto",
    title: "OperationKit design showcase — 3 directions across core screens",
    status: "human",
    live: true,
    branch: "showcase-gallery",
    pr: 0,
    cost: 653.70,
    sessionId: "sess_8f3a91c4",
    sessionCount: 22,
    workspace: "mike-luka",
    brief: {
      summary: "Build a self-contained gallery of 3 OperationKit design directions across the core screens so Mike can compare objectively and pick a direction to dial in.",
      plan: [
        "Read W1 audit + W2 direction doc; lift the token block verbatim.",
        "Scaffold a self-contained static showcase (no live-app dependency).",
        "Build Mission Control / Terminal / Flow Canvas across Board · Session · Objective.",
        "Add desktop + mobile frames and a side-by-side comparison picker.",
        "Serve at a working URL and verify with a screenshot.",
      ],
      acceptance: [
        { label: "3 distinct, labeled directions", pass: true },
        { label: "Board · Session · Objective per direction", pass: true },
        { label: "Mobile board frame per direction", pass: true },
        { label: "Comparison picker + rationale", pass: null },
      ],
    },
    messages: [
      { kind: "user", t: "14:01", text: "Build the standalone gallery — 3 directions across the core screens. Keep it genuinely simple." },
      { kind: "thinking", t: "14:01", text: "Reading W1 audit §1c screen inventory and W2 §2a tokens. The 3 directions span the terminal↔n8n axis: A is the spine, C is the optional graph view, B is the bold pole." },
      { kind: "tool", t: "14:02", name: "Read", arg: "audits/2026-06-24-operationkit-ui-audit.md", result: "ok · 450 lines" },
      { kind: "tool", t: "14:02", name: "Read", arg: "decisions/2026-06-24-operationkit-design-direction-research.md", result: "ok · token block lifted" },
      { kind: "assistant", t: "14:03", text: "Inputs read. I'll build each direction as a self-contained iframe so its token system stays coherent and the compare view can place all three on the same screen. Foundation (shared data + fonts) first, then the three directions in parallel." },
      { kind: "tool", t: "14:04", name: "Bash", arg: "git worktree add -b showcase-gallery", result: "ok · isolated" },
      { kind: "tool", t: "14:21", name: "Write", arg: "showcase/directions/mission-control.html", result: "ok · 1 file" },
      { kind: "assistant", t: "14:33", text: "All three directions render Board · Session · Objective on desktop and a phone-width Board. Serving via GitHub Pages — the URL is ready for review." },
    ],
  };

  // Objective detail (the modal/detail view) for OBJ-1729.
  const DETAIL = OBJECTIVES[0];

  window.OK = { STATUS, AGENTS, OBJECTIVES, COLUMNS, CATEGORIES, SESSION, DETAIL,
    // helpers
    fmtCost: (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    fmtTime: (iso) => {
      // deterministic relative-time vs a fixed "now" so output never shifts
      const now = Date.parse("2026-06-24T14:05:00Z");
      const d = now - Date.parse(iso);
      const m = Math.round(d / 60000);
      if (m < 60) return m + "m ago";
      const h = Math.round(m / 60);
      if (h < 24) return h + "h ago";
      return Math.round(h / 24) + "d ago";
    },
  };
})();
