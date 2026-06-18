import React, { useState, useEffect, useCallback } from "react";

/* ============================================================
   Icons — small inline SVG components (no external dependency)
   ============================================================ */

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );
}

function IconSpider(props) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <ellipse cx="50" cy="22" rx="7" ry="6" />
      <rect x="47" y="27" width="6" height="5" />
      <ellipse cx="50" cy="42" rx="10" ry="12" />
      <ellipse cx="50" cy="64" rx="13" ry="18" />
      <path d="M41,36 L6,18 L8,14 L43,32" />
      <path d="M40,42 L4,36 L4,31 L40,38" />
      <path d="M40,50 L8,52 L6,48 L40,46" />
      <path d="M41,57 L14,72 L11,68 L40,53" />
      <path d="M59,36 L94,18 L92,14 L57,32" />
      <path d="M60,42 L96,36 L96,31 L60,38" />
      <path d="M60,50 L92,52 L94,48 L60,46" />
      <path d="M59,57 L86,72 L89,68 L60,53" />
    </svg>
  );
}

function IconArrowUp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5,12 12,5 19,12" />
    </svg>
  );
}

function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconSun(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4.5" /><line x1="12" y1="19.5" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.86" y2="5.86" /><line x1="18.14" y1="18.14" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4.5" y2="12" /><line x1="19.5" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.86" y2="18.14" /><line x1="18.14" y1="5.86" x2="19.78" y2="4.22" />
    </svg>
  );
}

function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 14.4A8.5 8.5 0 119.6 3.5a7 7 0 1010.9 10.9z" />
    </svg>
  );
}

/* ── Brand tech-stack icons ── */

function IconNextJS(props) {
  return (
    <svg viewBox="0 0 180 180" {...props}>
      <mask id="nj-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="white" />
      </mask>
      <g mask="url(#nj-mask)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a89.93 89.93 0 009.509-7.325z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </g>
    </svg>
  );
}

function IconTypeScript(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#3178c6" />
      <path fill="#fff" d="M22 63h23v8H22zm45.5-8c-8.3 0-14 4-14 11 0 6.6 4.2 9.9 13 12.4 6 1.7 8 3.1 8 5.5 0 2.7-2.4 4.3-6.4 4.3-4.6 0-8.1-1.6-11-4.9l-6 5.7c4.2 4.8 9.8 7.2 16.8 7.2 9.5 0 15.9-4.7 15.9-12 0-6.8-4-10.2-13.5-12.8-5.8-1.6-7.8-2.8-7.8-5.2 0-2.1 2-3.6 5.6-3.6 3.7 0 6.5 1.4 9 4l5.6-5.7c-3.5-4-8.3-5.9-15.2-5.9z" />
    </svg>
  );
}

function IconReact(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#20232a" />
      <g fill="none" stroke="#61dafb" strokeWidth="6">
        <ellipse cx="64" cy="64" rx="40" ry="15" />
        <ellipse cx="64" cy="64" rx="40" ry="15" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="40" ry="15" transform="rotate(120 64 64)" />
      </g>
      <circle cx="64" cy="64" r="7" fill="#61dafb" />
    </svg>
  );
}


function IconJavaScript(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#f7df1e" />
      <path fill="#323330" d="M60 96c0 7-4 10.5-10 10.5-5.5 0-8.5-2.7-10-6.7l7-4c1 2 1.7 3.7 4 3.7 2 0 3-1 3-4V56h6v40zm20-1c1.3 2.7 3 4.7 6 4.7 2.3 0 4-1.2 4-3 0-2-1.7-2.7-4.5-3.8l-1.7-.7c-4.5-1.8-7.5-4-7.5-8.7 0-4.3 3.3-7.5 8.5-7.5 3.7 0 6.3 1.3 8.2 4.7l-6.5 4c-1-1.7-2-2.3-3.7-2.3-1.7 0-2.7.8-2.7 2.3 0 1.7 1 2.3 3.5 3.3l1.7.7c5.3 2.3 8.3 4.5 8.3 9.3 0 5.3-4.2 8-9.8 8-5.5 0-9-2.7-10.7-6.2l6.4-3.8z" />
    </svg>
  );
}


function IconTailwind(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#0f172a" />
      <path d="M64 28c-14 0-22 7-26 21 4-5.5 8.5-7.5 13.5-6 3 .75 5 2.9 7.3 5.2C62.6 52.2 67 57 78 57c14 0 22-7 26-21-4 5.5-8.5 7.5-13.5 6-3-.75-5-2.9-7.3-5.2C79.4 32.8 75 28 64 28zM38 57c-14 0-22 7-26 21 4-5.5 8.5-7.5 13.5-6 3 .75 5 2.9 7.3 5.2C36.6 81.2 41 86 52 86c14 0 22-7 26-21-4 5.5-8.5 7.5-13.5 6-3-.75-5-2.9-7.3-5.2C53.4 61.8 49 57 38 57z" fill="#38bdf8" />
    </svg>
  );
}

function IconNodeJS(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#215732" />
      <path d="M64 20L20 45v38l44 25 44-25V45L64 20z" fill="none" stroke="#8dc63f" strokeWidth="5" />
      <text x="64" y="75" fontSize="28" textAnchor="middle" fill="#8dc63f" fontFamily="monospace" fontWeight="bold">node</text>
    </svg>
  );
}

function IconExpress(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#1a1a1a" />
      <text x="64" y="72" fontSize="26" textAnchor="middle" fill="white" fontFamily="monospace" fontWeight="500">express</text>
    </svg>
  );
}

function IconSocketIO(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#010101" />
      <circle cx="64" cy="64" r="30" fill="none" stroke="white" strokeWidth="6" />
      <path d="M44 64 Q64 44 84 64 Q64 84 44 64z" fill="white" />
    </svg>
  );
}

function IconMongoDB(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#13aa52" />
      <path d="M64 18c0 0-26 28-26 52 0 14.4 11.7 26 26 26s26-11.6 26-26C90 46 64 18 64 18z" fill="white" />
      <rect x="61" y="86" width="6" height="20" fill="white" />
    </svg>
  );
}

function IconPostgres(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#336791" />
      <path fill="white" d="M64 28c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32zm-12 18h8v6h-8zm16 0h8v6h-8zm-18 14h28v4H50zm4 8h20v4H54z" />
    </svg>
  );
}

function IconRedis(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#dc382d" />
      <text x="64" y="78" fontSize="34" textAnchor="middle" fill="white" fontFamily="monospace" fontWeight="bold">Redis</text>
    </svg>
  );
}

function IconSupabase(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#1C1C1C"/>
      <path d="M13.5 3L5 15.5H12.5L11 21L19 8.5H11.5L13.5 3Z" fill="#3ECF8E"/>
    </svg>
  );
}

function IconRazorpay(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#072654"/>
      <path d="M72 22H48L38 52H62L50 90H74L86 52H62L72 22Z" fill="#3395FF"/>
    </svg>
  );
}

function IconSentry(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#1A1625"/>
      <path d="M64 20L30 100H50L64 60L78 100H98L64 20Z" fill="#F69332"/>
      <path d="M44 95H84" stroke="#F69332" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

function IconUpstash(props) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="6" fill="#0a0a0a"/>
      <path d="M36 80V50L64 32L92 50V80H74V58L64 52L54 58V80H36Z" fill="#00C98D"/>
    </svg>
  );
}



/* ============================================================
   Content
   ============================================================ */

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
];

const PROJECTS = [
  {
    id: "rareease",
    title: "Rareease",
    thumbBg: "#000",
    thumbContent: (
      <img
        src="data:image/jpeg;base64,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"
        alt="Rareease storefront"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
      />
    ),
    desc: "Production-grade luxury streetwear e-commerce — Razorpay payments, COD fraud guards, Shiprocket fulfilment, server-side price validation, idempotent webhooks, Redis rate limiting, and a full admin panel.",
    tech: [
      { kind: "svg", Icon: IconNextJS, title: "Next.js 14" },
      { kind: "svg", Icon: IconTypeScript, title: "TypeScript" },
      { kind: "svg", Icon: IconSupabase, title: "Supabase" },
      { kind: "svg", Icon: IconRazorpay, title: "Razorpay" },
      { kind: "svg", Icon: IconSentry, title: "Sentry" },
      { kind: "svg", Icon: IconUpstash, title: "Upstash Redis" },
    ],
    github: "https://github.com/lakshmeeshpatelk/rareease-production-grade",
    live: "https://rareease.com/",
  },
  {
    id: "marketpulse",
    title: "MarketPulse",
    thumbBg: "#0d1117",
    thumbContent: (
      <svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" style={{display:"block",width:"100%",height:"100%"}}>
  <rect width="680" height="360" fill="#0d1117"/>
  <rect x="0" y="0" width="680" height="36" fill="#161b22"/>
  <text x="20" y="23" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#58a6ff" letterSpacing="1">MarketPulse</text>
  <rect x="260" y="10" width="60" height="16" rx="3" fill="#1f2937"/>
  <text x="290" y="22" fontFamily="monospace" fontSize="10" fill="#6b7280" textAnchor="middle">Indices</text>
  <rect x="328" y="10" width="50" height="16" rx="3" fill="#1f2937"/>
  <text x="353" y="22" fontFamily="monospace" fontSize="10" fill="#6b7280" textAnchor="middle">Crypto</text>
  <rect x="386" y="10" width="40" height="16" rx="3" fill="#1f2937"/>
  <text x="406" y="22" fontFamily="monospace" fontSize="10" fill="#6b7280" textAnchor="middle">Forex</text>
  <rect x="12" y="44" width="420" height="190" rx="6" fill="#161b22" stroke="#21262d" strokeWidth="0.5"/>
  <text x="24" y="62" fontFamily="monospace" fontSize="11" fill="#8b949e">S&amp;P 500</text>
  <text x="90" y="62" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#f0f6fc">4,521.36</text>
  <text x="175" y="62" fontFamily="monospace" fontSize="11" fill="#3fb950">+1.24%</text>
  <line x1="24" y1="80" x2="420" y2="80" stroke="#21262d" strokeWidth="0.5"/>
  <line x1="24" y1="105" x2="420" y2="105" stroke="#21262d" strokeWidth="0.5"/>
  <line x1="24" y1="130" x2="420" y2="130" stroke="#21262d" strokeWidth="0.5"/>
  <line x1="24" y1="155" x2="420" y2="155" stroke="#21262d" strokeWidth="0.5"/>
  <line x1="24" y1="180" x2="420" y2="180" stroke="#21262d" strokeWidth="0.5"/>
  <defs>
    <linearGradient id="cf" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#3fb950" stopOpacity="0.25"/>
      <stop offset="100%" stopColor="#3fb950" stopOpacity="0"/>
    </linearGradient>
    <clipPath id="cc"><rect x="24" y="72" width="388" height="140"/></clipPath>
  </defs>
  <g clipPath="url(#cc)">
    <path d="M24,185 L60,178 L90,182 L115,170 L135,165 L155,168 L175,155 L195,158 L215,145 L235,150 L255,138 L275,130 L295,135 L315,120 L335,115 L355,108 L375,100 L395,95 L412,88 L412,212 L24,212Z" fill="url(#cf)"/>
    <path d="M24,185 L60,178 L90,182 L115,170 L135,165 L155,168 L175,155 L195,158 L215,145 L235,150 L255,138 L275,130 L295,135 L315,120 L335,115 L355,108 L375,100 L395,95 L412,88" fill="none" stroke="#3fb950" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="355" cy="108" r="4" fill="#3fb950" stroke="#0d1117" strokeWidth="1.5"/>
    <line x1="355" y1="72" x2="355" y2="212" stroke="#3fb950" strokeWidth="0.5" strokeDasharray="3,3"/>
  </g>
  <rect x="340" y="82" width="80" height="36" rx="4" fill="#1f2937" stroke="#30363d" strokeWidth="0.5"/>
  <text x="380" y="97" fontFamily="monospace" fontSize="9" fill="#8b949e" textAnchor="middle">14:20</text>
  <text x="380" y="110" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0f6fc" textAnchor="middle">4,538.90</text>
  <rect x="440" y="44" width="228" height="190" rx="6" fill="#161b22" stroke="#21262d" strokeWidth="0.5"/>
  <text x="452" y="62" fontFamily="monospace" fontSize="11" fontWeight="600" fill="#8b949e">Watchlist</text>
  <rect x="448" y="68" width="212" height="28" rx="3" fill="#1c2128"/>
  <text x="456" y="83" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#f0f6fc">AAPL</text>
  <text x="655" y="83" fontFamily="monospace" fontSize="11" fill="#f0f6fc" textAnchor="end">182.63</text>
  <text x="655" y="93" fontFamily="monospace" fontSize="8" fill="#3fb950" textAnchor="end">+0.84%</text>
  <rect x="448" y="100" width="212" height="28" rx="3" fill="#0d1117"/>
  <text x="456" y="115" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#f0f6fc">TSLA</text>
  <text x="655" y="115" fontFamily="monospace" fontSize="11" fill="#f0f6fc" textAnchor="end">248.50</text>
  <text x="655" y="125" fontFamily="monospace" fontSize="8" fill="#f85149" textAnchor="end">-1.32%</text>
  <rect x="448" y="132" width="212" height="28" rx="3" fill="#1c2128"/>
  <text x="456" y="147" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#f0f6fc">NVDA</text>
  <text x="655" y="147" fontFamily="monospace" fontSize="11" fill="#f0f6fc" textAnchor="end">875.40</text>
  <text x="655" y="157" fontFamily="monospace" fontSize="8" fill="#3fb950" textAnchor="end">+3.21%</text>
  <rect x="448" y="164" width="212" height="28" rx="3" fill="#0d1117"/>
  <text x="456" y="179" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#f0f6fc">MSFT</text>
  <text x="655" y="179" fontFamily="monospace" fontSize="11" fill="#f0f6fc" textAnchor="end">415.32</text>
  <text x="655" y="189" fontFamily="monospace" fontSize="8" fill="#3fb950" textAnchor="end">+0.56%</text>
  <rect x="12" y="242" width="198" height="106" rx="6" fill="#161b22" stroke="#21262d" strokeWidth="0.5"/>
  <rect x="20" y="252" width="80" height="14" rx="3" fill="#1d2d3e"/>
  <text x="24" y="263" fontFamily="monospace" fontSize="9" fill="#58a6ff">✦ AI Daily Digest</text>
  <text x="20" y="283" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#f0f6fc">Market outlook</text>
  <text x="20" y="296" fontFamily="monospace" fontSize="9" fill="#8b949e">Tech sector leads gains as</text>
  <text x="20" y="308" fontFamily="monospace" fontSize="9" fill="#8b949e">Fed signals rate pause.</text>
  <rect x="440" y="242" width="228" height="106" rx="6" fill="#161b22" stroke="#21262d" strokeWidth="0.5"/>
  <text x="452" y="260" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#8b949e">Top movers</text>
  <text x="452" y="278" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0f6fc">NVDA</text>
  <polyline points="490,288 500,284 510,280 520,282 530,275 540,270 550,265 560,260" fill="none" stroke="#3fb950" strokeWidth="1.2" strokeLinecap="round"/>
  <text x="655" y="278" fontFamily="monospace" fontSize="10" fill="#3fb950" textAnchor="end">+3.21%</text>
  <text x="452" y="304" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0f6fc">META</text>
  <polyline points="490,312 500,310 510,314 520,316 530,312 540,308 550,305 560,302" fill="none" stroke="#3fb950" strokeWidth="1.2" strokeLinecap="round"/>
  <text x="655" y="304" fontFamily="monospace" fontSize="10" fill="#3fb950" textAnchor="end">+1.87%</text>
  <text x="452" y="330" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f0f6fc">TSLA</text>
  <polyline points="490,336 500,334 510,338 520,342 530,344 540,348 550,346 560,350" fill="none" stroke="#f85149" strokeWidth="1.2" strokeLinecap="round"/>
  <text x="655" y="330" fontFamily="monospace" fontSize="10" fill="#f85149" textAnchor="end">-1.32%</text>
  <rect x="0" y="346" width="680" height="14" fill="#0d1117"/>
  <circle cx="16" cy="353" r="3" fill="#3fb950"/>
  <text x="24" y="357" fontFamily="monospace" fontSize="8" fill="#484f58">LIVE · NYSE · NASDAQ · CRYPTO</text>
</svg>
    ),
        desc: "Full-stack AI-augmented stock market app — real-time prices, personalised watchlists, price alerts, and AI-generated daily market digests powered by event-driven background workflows.",
    tech: [
      { kind: "svg", Icon: IconNextJS, title: "Next.js" },
      { kind: "svg", Icon: IconTypeScript, title: "TypeScript" },
      { kind: "svg", Icon: IconPostgres, title: "PostgreSQL" },
      { kind: "svg", Icon: IconRedis, title: "Redis" },
    ],
    github: "https://github.com/lakshmeeshpatelk/marketpulse-app",
    live: "https://example.com",
  },
  {
    id: "subvault",
    title: "SubVault",
    thumbBg: "linear-gradient(135deg,#0a0f0a 0%,#0f160f 100%)",
    thumbContent: (
      <svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" style={{display:"block",width:"100%",height:"100%"}}>
        {/* Background */}
        <rect width="680" height="360" fill="#080c08"/>
        {/* Top bar */}
        <rect x="0" y="0" width="680" height="36" fill="#0d120d"/>
        <circle cx="16" cy="18" r="4" fill="#22c55e"/>
        <text x="26" y="23" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#22c55e" letterSpacing="1">SubVault</text>
        <text x="110" y="23" fontFamily="monospace" fontSize="10" fill="#3a4a3a">API · v1.4.2</text>
        <rect x="580" y="10" width="88" height="16" rx="3" fill="#0f1f0f"/>
        <circle cx="592" cy="18" r="3" fill="#22c55e"/>
        <text x="600" y="23" fontFamily="monospace" fontSize="9" fill="#22c55e">RUNNING</text>

        {/* Left panel — subscriptions list */}
        <rect x="12" y="44" width="310" height="220" rx="6" fill="#0d120d" stroke="#1a2a1a" strokeWidth="0.5"/>
        <text x="24" y="62" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#4a7a4a">SUBSCRIPTIONS</text>
        <text x="280" y="62" fontFamily="monospace" fontSize="9" fill="#3a4a3a" textAnchor="end">3 active · 1 expiring</text>

        {/* Sub row 1 */}
        <rect x="18" y="68" width="298" height="38" rx="4" fill="#111811"/>
        <rect x="18" y="68" width="3" height="38" rx="1" fill="#22c55e"/>
        <text x="30" y="83" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#e8f5e8">Netflix Premium</text>
        <text x="30" y="96" fontFamily="monospace" fontSize="9" fill="#4a6a4a">Renews 28 Jun · ₹649/mo</text>
        <rect x="278" y="74" width="32" height="14" rx="3" fill="#0f2a0f"/>
        <text x="294" y="84" fontFamily="monospace" fontSize="8" fill="#22c55e" textAnchor="middle">ACTIVE</text>

        {/* Sub row 2 */}
        <rect x="18" y="110" width="298" height="38" rx="4" fill="#111811"/>
        <rect x="18" y="110" width="3" height="38" rx="1" fill="#f59e0b"/>
        <text x="30" y="125" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#e8f5e8">Spotify Family</text>
        <text x="30" y="138" fontFamily="monospace" fontSize="9" fill="#4a6a4a">Renews 02 Jul · ₹179/mo</text>
        <rect x="270" y="116" width="40" height="14" rx="3" fill="#2a1a00"/>
        <text x="290" y="126" fontFamily="monospace" fontSize="8" fill="#f59e0b" textAnchor="middle">3 DAYS</text>

        {/* Sub row 3 */}
        <rect x="18" y="152" width="298" height="38" rx="4" fill="#111811"/>
        <rect x="18" y="152" width="3" height="38" rx="1" fill="#22c55e"/>
        <text x="30" y="167" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#e8f5e8">GitHub Copilot</text>
        <text x="30" y="180" fontFamily="monospace" fontSize="9" fill="#4a6a4a">Renews 15 Jul · $10/mo</text>
        <rect x="278" y="158" width="32" height="14" rx="3" fill="#0f2a0f"/>
        <text x="294" y="168" fontFamily="monospace" fontSize="8" fill="#22c55e" textAnchor="middle">ACTIVE</text>

        {/* Sub row 4 */}
        <rect x="18" y="194" width="298" height="38" rx="4" fill="#111811"/>
        <rect x="18" y="194" width="3" height="38" rx="1" fill="#ef4444"/>
        <text x="30" y="209" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#e8f5e8">AWS Starter</text>
        <text x="30" y="222" fontFamily="monospace" fontSize="9" fill="#4a6a4a">Expired 10 Jun · $29/mo</text>
        <rect x="272" y="200" width="38" height="14" rx="3" fill="#2a0808"/>
        <text x="291" y="210" fontFamily="monospace" fontSize="8" fill="#ef4444" textAnchor="middle">EXPIRED</text>

        {/* Left panel — monthly spend */}
        <rect x="12" y="272" width="310" height="76" rx="6" fill="#0d120d" stroke="#1a2a1a" strokeWidth="0.5"/>
        <text x="24" y="290" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#4a7a4a">MONTHLY SPEND</text>
        <text x="24" y="314" fontFamily="monospace" fontSize="22" fontWeight="700" fill="#e8f5e8">₹1,457</text>
        <text x="24" y="332" fontFamily="monospace" fontSize="9" fill="#4a5a4a">across 4 services · saved ₹340 vs last month</text>
        <polyline points="220,330 235,322 250,318 265,320 280,310 295,305 310,298" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Right panel — API endpoints */}
        <rect x="330" y="44" width="338" height="148" rx="6" fill="#0d120d" stroke="#1a2a1a" strokeWidth="0.5"/>
        <text x="342" y="62" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#4a7a4a">API ROUTES</text>

        {/* Endpoint rows */}
        <rect x="338" y="68" width="322" height="20" rx="3" fill="#111811"/>
        <rect x="338" y="68" width="32" height="20" rx="3" fill="#1a3a0d"/>
        <text x="354" y="81" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#22c55e" textAnchor="middle">GET</text>
        <text x="378" y="81" fontFamily="monospace" fontSize="9" fill="#8ab58a">/api/v1/subscriptions</text>
        <text x="656" y="81" fontFamily="monospace" fontSize="9" fill="#4a6a4a" textAnchor="end">200 OK</text>

        <rect x="338" y="92" width="322" height="20" rx="3" fill="#0d120d"/>
        <rect x="338" y="92" width="36" height="20" rx="3" fill="#1a2a00"/>
        <text x="356" y="105" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#84cc16" textAnchor="middle">POST</text>
        <text x="382" y="105" fontFamily="monospace" fontSize="9" fill="#8ab58a">/api/v1/subscriptions</text>
        <text x="656" y="105" fontFamily="monospace" fontSize="9" fill="#4a6a4a" textAnchor="end">201 Created</text>

        <rect x="338" y="116" width="322" height="20" rx="3" fill="#111811"/>
        <rect x="338" y="116" width="36" height="20" rx="3" fill="#1a1a00"/>
        <text x="356" y="129" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#eab308" textAnchor="middle">PUT</text>
        <text x="382" y="129" fontFamily="monospace" fontSize="9" fill="#8ab58a">/api/v1/subscriptions/:id</text>
        <text x="656" y="129" fontFamily="monospace" fontSize="9" fill="#4a6a4a" textAnchor="end">200 OK</text>

        <rect x="338" y="140" width="322" height="20" rx="3" fill="#0d120d"/>
        <rect x="338" y="140" width="40" height="20" rx="3" fill="#2a0808"/>
        <text x="358" y="153" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#ef4444" textAnchor="middle">DEL</text>
        <text x="386" y="153" fontFamily="monospace" fontSize="9" fill="#8ab58a">/api/v1/subscriptions/:id</text>
        <text x="656" y="153" fontFamily="monospace" fontSize="9" fill="#4a6a4a" textAnchor="end">204 No Content</text>

        {/* Right panel — reminder log */}
        <rect x="330" y="200" width="338" height="148" rx="6" fill="#0d120d" stroke="#1a2a1a" strokeWidth="0.5"/>
        <text x="342" y="218" fontFamily="monospace" fontSize="10" fontWeight="600" fill="#4a7a4a">REMINDER LOG</text>

        <text x="342" y="238" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:00</text>
        <rect x="376" y="228" width="8" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="390" y="237" fontFamily="monospace" fontSize="9" fill="#6a8a6a">cron fired · checked 4 subs</text>

        <text x="342" y="256" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:01</text>
        <rect x="376" y="246" width="8" height="8" rx="2" fill="#f59e0b" opacity="0.8"/>
        <text x="390" y="255" fontFamily="monospace" fontSize="9" fill="#6a8a6a">⚠  Spotify renews in 3 days</text>

        <text x="342" y="274" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:01</text>
        <rect x="376" y="264" width="8" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="390" y="273" fontFamily="monospace" fontSize="9" fill="#6a8a6a">email queued → user_3821</text>

        <text x="342" y="292" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:02</text>
        <rect x="376" y="282" width="8" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="390" y="291" fontFamily="monospace" fontSize="9" fill="#6a8a6a">JWT auth · rate-limited /login</text>

        <text x="342" y="310" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:03</text>
        <rect x="376" y="300" width="8" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="390" y="309" fontFamily="monospace" fontSize="9" fill="#6a8a6a">MongoDB indexed query · 4ms</text>

        <text x="342" y="328" fontFamily="monospace" fontSize="9" fill="#3a5a3a">06:04</text>
        <rect x="376" y="318" width="8" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="390" y="327" fontFamily="monospace" fontSize="9" fill="#6a8a6a">health check passed · uptime 99.9%</text>

        {/* Bottom status bar */}
        <rect x="0" y="348" width="680" height="12" fill="#0a0f0a"/>
        <circle cx="16" cy="354" r="3" fill="#22c55e"/>
        <text x="24" y="358" fontFamily="monospace" fontSize="8" fill="#3a5a3a">NODE · EXPRESS · MONGODB · JWT · NODEMAILER</text>
      </svg>
    ),
    desc: "Backend API for full subscription lifecycle management — user accounts, subscription CRUD, renewal reminders, and security hardening. Built for scalability and designed to plug cleanly into any frontend or mobile client.",
    tech: [
      { kind: "svg", Icon: IconNodeJS, title: "Node.js" },
      { kind: "svg", Icon: IconExpress, title: "Express" },
      { kind: "svg", Icon: IconMongoDB, title: "MongoDB" },
    ],
    github: "https://github.com/lakshmeeshpatelk/subvault-api",
    live: "https://example.com",
  },
  {
    id: "ripplechat",
    title: "Ripple Chat",
    thumbBg: "#07080f",
    thumbContent: (
      <svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" style={{display:"block",width:"100%",height:"100%"}}>
        {/* Background */}
        <rect width="680" height="360" fill="#07080f"/>

        {/* Top bar */}
        <rect x="0" y="0" width="680" height="36" fill="#0c0d18"/>
        <circle cx="16" cy="18" r="5" fill="#7c3aed"/>
        <circle cx="16" cy="18" r="5" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4"/>
        <text x="28" y="23" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#a78bfa" letterSpacing="1">RippleChat</text>
        <text x="126" y="23" fontFamily="monospace" fontSize="9" fill="#2e3058">WebSocket · real-time</text>
        <circle cx="640" cy="18" r="4" fill="#22c55e"/>
        <text x="648" y="23" fontFamily="monospace" fontSize="9" fill="#22c55e">WS</text>

        {/* Sidebar */}
        <rect x="0" y="36" width="180" height="324" fill="#0a0b15"/>
        <rect x="0" y="36" width="180" height="324" fill="none" stroke="#1a1b2e" strokeWidth="0.5"/>

        {/* Sidebar header */}
        <text x="12" y="57" fontFamily="monospace" fontSize="9" fontWeight="600" fill="#4a4a7a">ROOMS</text>

        {/* Room rows */}
        <rect x="6" y="64" width="168" height="28" rx="5" fill="#13142a"/>
        <rect x="6" y="64" width="3" height="28" rx="1" fill="#7c3aed"/>
        <text x="18" y="78" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#e0e0ff"># general</text>
        <text x="18" y="89" fontFamily="monospace" fontSize="8" fill="#4a4a7a">4 online</text>
        <rect x="152" y="68" width="16" height="16" rx="3" fill="#7c3aed"/>
        <text x="160" y="79" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">3</text>

        <rect x="6" y="96" width="168" height="28" rx="5" fill="none"/>
        <text x="18" y="110" fontFamily="monospace" fontSize="11" fill="#5a5a8a"># design</text>
        <text x="18" y="121" fontFamily="monospace" fontSize="8" fill="#2e2e5a">2 online</text>

        <rect x="6" y="128" width="168" height="28" rx="5" fill="none"/>
        <text x="18" y="142" fontFamily="monospace" fontSize="11" fill="#5a5a8a"># backend</text>
        <text x="18" y="153" fontFamily="monospace" fontSize="8" fill="#2e2e5a">1 online</text>

        <rect x="6" y="160" width="168" height="28" rx="5" fill="none"/>
        <text x="18" y="174" fontFamily="monospace" fontSize="11" fill="#5a5a8a"># random</text>
        <text x="18" y="185" fontFamily="monospace" fontSize="8" fill="#2e2e5a">6 online</text>

        {/* Sidebar divider */}
        <line x1="12" y1="205" x2="168" y2="205" stroke="#1a1b2e" strokeWidth="0.5"/>
        <text x="12" y="220" fontFamily="monospace" fontSize="9" fontWeight="600" fill="#4a4a7a">ONLINE — 4</text>

        {/* Users */}
        <circle cx="22" cy="238" r="7" fill="#7c3aed"/>
        <text x="22" y="242" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">L</text>
        <circle cx="37" cy="244" r="4" fill="#22c55e" stroke="#0a0b15" strokeWidth="1.5"/>
        <text x="36" y="248" fontFamily="monospace" fontSize="9" fill="#c0c0e0">laksh</text>

        <circle cx="22" cy="260" r="7" fill="#0ea5e9"/>
        <text x="22" y="264" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">A</text>
        <circle cx="37" cy="266" r="4" fill="#22c55e" stroke="#0a0b15" strokeWidth="1.5"/>
        <text x="36" y="270" fontFamily="monospace" fontSize="9" fill="#c0c0e0">alex_k</text>

        <circle cx="22" cy="282" r="7" fill="#f59e0b"/>
        <text x="22" y="286" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">S</text>
        <circle cx="37" cy="288" r="4" fill="#22c55e" stroke="#0a0b15" strokeWidth="1.5"/>
        <text x="36" y="292" fontFamily="monospace" fontSize="9" fill="#c0c0e0">sara_m</text>

        <circle cx="22" cy="304" r="7" fill="#ec4899"/>
        <text x="22" y="308" fontFamily="monospace" fontSize="7" fill="#fff" textAnchor="middle">J</text>
        <circle cx="37" cy="310" r="4" fill="#6b7280" stroke="#0a0b15" strokeWidth="1.5"/>
        <text x="36" y="314" fontFamily="monospace" fontSize="9" fill="#5a5a8a">jay_r</text>

        {/* Main chat area */}
        <rect x="180" y="36" width="500" height="324" fill="#07080f"/>

        {/* Chat header */}
        <rect x="180" y="36" width="500" height="40" fill="#0c0d18"/>
        <text x="196" y="55" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#e0e0ff"># general</text>
        <text x="196" y="69" fontFamily="monospace" fontSize="9" fill="#4a4a7a">4 members · no accounts needed · just join</text>
        <rect x="628" y="46" width="44" height="16" rx="3" fill="#0f2a0f"/>
        <circle cx="636" cy="54" r="3" fill="#22c55e"/>
        <text x="648" y="57" fontFamily="monospace" fontSize="8" fill="#22c55e">LIVE</text>

        {/* System message */}
        <text x="340" y="98" fontFamily="monospace" fontSize="9" fill="#3a3a5a" textAnchor="middle">— laksh joined #general —</text>

        {/* Message 1 — alex_k */}
        <circle cx="198" cy="120" r="10" fill="#0ea5e9"/>
        <text x="198" y="124" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">A</text>
        <text x="214" y="115" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#0ea5e9">alex_k</text>
        <text x="276" y="115" fontFamily="monospace" fontSize="8" fill="#2e2e5a">10:42 AM</text>
        <text x="214" y="130" fontFamily="monospace" fontSize="10" fill="#c8c8f0">hey everyone! anyone working on something cool?</text>

        {/* Message 2 — sara_m */}
        <circle cx="198" cy="158" r="10" fill="#f59e0b"/>
        <text x="198" y="162" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">S</text>
        <text x="214" y="153" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#f59e0b">sara_m</text>
        <text x="276" y="153" fontFamily="monospace" fontSize="8" fill="#2e2e5a">10:43 AM</text>
        <text x="214" y="168" fontFamily="monospace" fontSize="10" fill="#c8c8f0">just shipped a design system update 🎨</text>

        {/* Message 3 — laksh (self) */}
        <rect x="190" y="185" width="460" height="34" rx="6" fill="#13142a"/>
        <circle cx="202" cy="202" r="10" fill="#7c3aed"/>
        <text x="202" y="206" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">L</text>
        <text x="218" y="197" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#a78bfa">laksh</text>
        <text x="270" y="197" fontFamily="monospace" fontSize="8" fill="#2e2e5a">10:43 AM</text>
        <text x="218" y="212" fontFamily="monospace" fontSize="10" fill="#c8c8f0">building RippleChat — this very app 😄</text>

        {/* Message 4 — alex_k reply */}
        <circle cx="198" cy="238" r="10" fill="#0ea5e9"/>
        <text x="198" y="242" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">A</text>
        <text x="214" y="233" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#0ea5e9">alex_k</text>
        <text x="276" y="233" fontFamily="monospace" fontSize="8" fill="#2e2e5a">10:44 AM</text>
        <text x="214" y="248" fontFamily="monospace" fontSize="10" fill="#c8c8f0">lol meta. Socket.io is so satisfying when it just works</text>

        {/* Typing indicator */}
        <circle cx="198" cy="273" r="10" fill="#f59e0b"/>
        <text x="198" y="277" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">S</text>
        <text x="214" y="272" fontFamily="monospace" fontSize="10" fill="#7a7ab0">sara_m is typing</text>
        <circle cx="265" cy="272" r="2.5" fill="#7c3aed" opacity="1"><animate attributeName="opacity" values="1;0.2;1" dur="1s" begin="0s" repeatCount="indefinite"/></circle>
        <circle cx="274" cy="272" r="2.5" fill="#7c3aed" opacity="0.6"><animate attributeName="opacity" values="1;0.2;1" dur="1s" begin="0.2s" repeatCount="indefinite"/></circle>
        <circle cx="283" cy="272" r="2.5" fill="#7c3aed" opacity="0.2"><animate attributeName="opacity" values="1;0.2;1" dur="1s" begin="0.4s" repeatCount="indefinite"/></circle>

        {/* Message input */}
        <rect x="190" y="295" width="460" height="38" rx="8" fill="#0c0d18" stroke="#1a1b2e" strokeWidth="1"/>
        <text x="206" y="318" fontFamily="monospace" fontSize="10" fill="#3a3a6a">Message #general...</text>
        <rect x="622" y="303" width="22" height="22" rx="5" fill="#7c3aed"/>
        <path d="M628 314 L636 314 M632 310 L636 314 L632 318" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

        {/* Bottom status */}
        <rect x="0" y="348" width="680" height="12" fill="#0a0a14"/>
        <circle cx="16" cy="354" r="3" fill="#7c3aed"/>
        <text x="24" y="358" fontFamily="monospace" fontSize="8" fill="#3a3a6a">REACT · NODE.JS · EXPRESS · SOCKET.IO · NO AUTH REQUIRED</text>
      </svg>
    ),
    desc: "Full-stack real-time messaging app — users enter a name and room to instantly join a shared chat session, with messages broadcast live to everyone in the room via WebSockets. No accounts, no setup, just open and chat.",
    tech: [
      { kind: "svg", Icon: IconReact, title: "React" },
      { kind: "svg", Icon: IconNodeJS, title: "Node.js" },
      { kind: "svg", Icon: IconExpress, title: "Express" },
      { kind: "svg", Icon: IconSocketIO, title: "Socket.io" },
    ],
    github: "https://github.com/lakshmeeshpatelk/ripplechat",
    live: "https://example.com",
  },
];

const TECH_STACK = [
  { Icon: IconNextJS, label: "Next.js" },
  { Icon: IconTypeScript, label: "TypeScript" },
  { Icon: IconReact, label: "React" },
  { Icon: IconJavaScript, label: "JavaScript" },
  { Icon: IconTailwind, label: "Tailwind CSS" },
  { Icon: IconNodeJS, label: "Node.js" },
  { Icon: IconExpress, label: "Express" },
  { Icon: IconSocketIO, label: "Socket.io" },
  { Icon: IconMongoDB, label: "MongoDB" },
  { Icon: IconPostgres, label: "PostgreSQL" },
  { Icon: IconRedis, label: "Redis" },
  { Icon: IconSupabase, label: "Supabase" },
];

const CONTACT_OPTIONS = [
  { emoji: "💡", title: "Want to bounce ideas?", desc: "Let's jump on a quick call and explore what's possible." },
  { emoji: "🚀", title: "Looking to build something?", desc: "Let's connect, brainstorm, and turn your ideas into something real." },
];

function formatTime(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/* ============================================================
   Styles
   ============================================================ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap');

.portfolio-page, .portfolio-page *, .portfolio-page *::before, .portfolio-page *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}

.portfolio-page {
display: flex;
  flex-direction: column;
  align-items: center;
  --bg:#000;
  --surface:#0a0a0a;
  --surface2:#111;
  --border:#1f1f1f;
  --border2:#2a2a2a;
  --text:#ededed;
  --muted:#888;
  --muted2:#555;
  --green:#22c55e;
  --invert:#000;
  --nav-bg: rgba(0,0,0,0.88);
  --drawer-bg: rgba(0,0,0,0.97);
  --mono:'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  --sans:'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  width: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  transition: background .2s, color .2s;
}

.portfolio-page[data-theme="light"] {
  --bg:#fafafa; --surface:#fff; --surface2:#f2f2f2;
  --border:#e6e6e6; --border2:#d6d6d6;
  --text:#171717; --muted:#666; --muted2:#999;
  --green:#16a34a; --invert:#fff;
  --nav-bg: rgba(250,250,250,0.88);
  --drawer-bg: rgba(250,250,250,0.97);
}

.portfolio-page ::selection { background:#333; color:#fff; }
.portfolio-page :where(a) { color: inherit; text-decoration: none; }
.portfolio-page img { display:block; max-width:100%; }
.portfolio-page ::-webkit-scrollbar { width:4px; height:4px; }
.portfolio-page ::-webkit-scrollbar-track { background: var(--bg); }
.portfolio-page ::-webkit-scrollbar-thumb { background:#222; border-radius:2px; }

.pf-page { max-width:680px; margin:0 auto; padding:0 1.25rem; width:100%; }

/* nav */
.pf-nav { position: sticky; top:0; z-index:200; background: var(--nav-bg); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom:1px solid var(--border); transition: background .2s; }
.pf-nav-inner { max-width:680px; margin:0 auto; padding:0 1.25rem; height:52px; display:flex; align-items:center; justify-content:space-between; gap:1rem; }
.pf-nav-left { font-family: var(--mono); font-size:12px; color: var(--muted); display:flex; align-items:center; gap:8px; min-width:0; flex-shrink:0; }
.pf-nav-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; background: var(--green); box-shadow:0 0 6px var(--green); animation: pf-pulse 2s infinite; }
@keyframes pf-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
.pf-nav-links { display:flex; gap:1.25rem; flex-shrink:0; }
.pf-nav-links a { font-size:13px; color: var(--muted); transition: color .15s; white-space:nowrap; }
.pf-nav-links a:hover { color: var(--text); }
.pf-nav-right { display:flex; align-items:center; gap:.85rem; flex-shrink:0; }
.pf-theme-toggle { display:flex; align-items:center; justify-content:center; background:none; border:1px solid var(--border2); border-radius:7px; cursor:pointer; padding:6px; color: var(--muted); flex-shrink:0; transition: all .15s; }
.pf-theme-toggle:hover { color: var(--text); border-color: var(--border2); background: var(--surface2); }
.pf-theme-toggle svg { display:block; }
.pf-nav-menu-btn { display:none; background:none; border:none; cursor:pointer; padding:6px; color: var(--muted); flex-shrink:0; }
.pf-nav-menu-btn svg { display:block; }
.pf-nav-drawer { display:none; position: fixed; inset: 52px 0 0 0; z-index:190; background: var(--drawer-bg); flex-direction: column; align-items:center; justify-content:center; gap:2.5rem; }
.pf-nav-drawer.open { display:flex; }
.pf-nav-drawer a { font-size:1.25rem; color: var(--muted); transition: color .15s; }
.pf-nav-drawer a:hover { color: var(--text); }

/* hero */
.pf-hero { padding: 3rem 0 2rem; }
.pf-hero-avatar { width:68px; height:68px; border-radius:50%; overflow:hidden; border:1px solid var(--border2); margin-bottom:1.4rem; background: var(--surface2); display:flex; align-items:center; justify-content:center; font-size:26px; }
.pf-hero h1 { font-size:1.45rem; font-weight:600; margin-bottom:2px; letter-spacing:-.02em; }
.pf-hero-role { font-size:13px; color: var(--muted); margin-bottom:1.1rem; }
.pf-hero-bio { font-size:15px; color: var(--muted); line-height:1.75; margin-bottom:1.4rem; width:100%; }
.pf-hero-bio strong { color: var(--text); font-weight:500; }
.pf-hero-subtext { font-size:13px; color: var(--muted); margin-bottom:.6rem; }
.pf-hero-cta-row { display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:.7rem; }
.pf-hero-or { font-size:12px; color: var(--muted2); display:flex; align-items:center; }
.pf-hero-link { display:inline-flex; align-items:center; gap:6px; font-size:13px; padding:7px 14px; border:1px solid var(--border2); border-radius:8px; color: var(--muted); transition: all .15s; white-space:nowrap; }
.pf-hero-link:hover { border-color:#444; color: var(--text); background: var(--surface2); }
.pf-hero-link svg { flex-shrink:0; }
.pf-hero-link.primary { background: var(--text); color: var(--invert); border-color: var(--text); font-weight:500; }
.pf-hero-link.primary:hover { background: var(--muted); border-color: var(--muted); }

/* section */
.pf-section { padding: 2.25rem 0; border-top:1px solid var(--border); }
.pf-section-title { font-size:1.1rem; font-weight:600; letter-spacing:-.02em; margin-bottom:1.4rem; }

/* ── NEW project cards ── */
.pf-projects-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem; }

.pf-project-card {
  border:1px solid var(--border);
  border-radius:14px;
  overflow:hidden;
  background: var(--surface);
  display:flex;
  flex-direction:column;
  transition: border-color .2s, transform .2s, box-shadow .2s;
  cursor: pointer;
}
.pf-project-card:hover {
  border-color: var(--border2);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
}

/* thumbnail */
.pf-project-thumb {
  width:100%;
  height:160px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom:1px solid var(--border);
  overflow:hidden;
  position: relative;
}

/* card body */
.pf-project-body { padding:.85rem 1rem 1rem; display:flex; flex-direction:column; flex:1; gap:.55rem; }

/* title row: name left, icons right */
.pf-project-header {
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:.5rem;
}
.pf-project-name { font-size:15px; font-weight:600; letter-spacing:-.01em; }
.pf-project-icon-links { display:flex; gap:6px; flex-shrink:0; }
.pf-project-icon-btn {
  display:flex; align-items:center; justify-content:center;
  width:28px; height:28px;
  border:1px solid var(--border2);
  border-radius:7px;
  color: var(--muted);
  background: var(--surface2);
  transition: all .15s;
  flex-shrink:0;
}
.pf-project-icon-btn:hover { color: var(--text); border-color:#444; background: var(--border); }
.pf-project-icon-btn svg { display:block; flex-shrink:0; }

.pf-project-desc { font-size:12.5px; color: var(--muted); line-height:1.6; flex:1; }

/* footer: status left, tech icons right */
.pf-project-footer {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:.5rem;
  flex-wrap:wrap;
  margin-top:auto;
  padding-top:.5rem;
}
.pf-project-status {
  display:inline-flex; align-items:center; gap:5px;
  font-family: var(--mono); font-size:11px; color: var(--green);
  padding:3px 8px; border:1px solid #1a3a1a; border-radius:20px; background:#0a1f0a;
  flex-shrink:0;
}
.pf-project-status::before { content:''; width:5px; height:5px; border-radius:50%; background: var(--green); box-shadow:0 0 4px var(--green); }

.pf-project-tech { display:flex; gap:4px; flex-wrap:wrap; justify-content:flex-end; }
.pf-tech-icon {
  width:24px; height:24px; border-radius:5px;
  background: var(--surface2); border:1px solid var(--border);
  display:flex; align-items:center; justify-content:center;
  overflow:hidden; flex-shrink:0;
  transition: transform .15s;
}
.pf-tech-icon:hover { transform: scale(1.1); }
.pf-tech-icon svg { width:24px; height:24px; display:block; border-radius:4px; }

.pf-view-all { display:inline-flex; align-items:center; gap:6px; font-size:13px; color: var(--muted); margin-top:1rem; transition: color .15s; font-family: var(--mono); background:none; border:none; cursor:pointer; }
.pf-view-all:hover { color: var(--text); }

/* ── NEW tech stack grid with icons ── */
.pf-stack-subtitle { font-size:13px; color: var(--muted); margin-bottom:1.25rem; }
.pf-tech-grid { display:flex; flex-wrap:wrap; gap:7px; }
.pf-tech-item {
  display:inline-flex; align-items:center; gap:7px;
  font-size:12.5px; color: var(--muted);
  padding:5px 11px 5px 7px;
  border:1px solid var(--border);
  border-radius:8px;
  background: var(--surface);
  transition: all .15s;
}
.pf-tech-item:hover { border-color: var(--border2); color: var(--text); background: var(--surface2); }
.pf-tech-item-icon { width:18px; height:18px; border-radius:3px; overflow:hidden; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
.pf-tech-item-icon svg { width:18px; height:18px; display:block; border-radius:3px; }

/* contact */
.pf-contact-eyebrow { font-size:11px; font-family: var(--mono); color: var(--muted2); letter-spacing:.08em; text-transform: uppercase; margin-bottom:1rem; }
.pf-contact-title { font-size:1.1rem; max-width:460px; font-weight:500; line-height:1.4; color: var(--muted); }
.pf-contact-grid { display:grid; grid-template-columns: repeat(2,1fr); gap:10px; margin: 1.5rem 0 2rem; }
.pf-contact-option { padding:.9rem; border:1px solid var(--border); border-radius:10px; background: var(--surface); transition: border-color .2s; }
.pf-contact-option:hover { border-color: var(--border2); }
.pf-contact-option-icon { font-size:20px; margin-bottom:.45rem; }
.pf-contact-option-title { font-size:13px; font-weight:600; margin-bottom:3px; }
.pf-contact-option-desc { font-size:12px; color: var(--muted); line-height:1.5; }
.pf-contact-cta { border-top:1px solid var(--border); padding-top:1.4rem; text-align:center; }
.pf-contact-cta h3 { font-size:15px; font-weight:600; margin-bottom:.35rem; }
.pf-contact-cta p { font-size:13px; color: var(--muted); margin-bottom:1.2rem; }
.pf-book-call-btn { display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:500; padding:10px 20px; background: var(--text); color: var(--invert); border-radius:8px; transition: background .15s; }
.pf-book-call-btn:hover { background: var(--muted); }

/* footer */
.pf-footer-quote { font-size:12px; font-style:italic; color: var(--muted2); text-align:center; padding:1.4rem 0 2rem; border-top:1px solid var(--border); margin-top:1rem; }

/* back to top */
.pf-back-top { position:fixed; bottom:1.5rem; right:1.5rem; z-index:300; width:38px; height:38px; border-radius:50%; background: var(--text); border:1px solid var(--text); color: var(--invert); cursor:pointer; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transform: translateY(10px); transition: opacity .2s, transform .2s, background .15s; }
.pf-back-top.visible { opacity:1; pointer-events:auto; transform: translateY(0); }
.pf-back-top:hover { background: var(--muted); border-color: var(--muted); }
.pf-back-top svg { display:block; flex-shrink:0; }

@media (max-width:600px) {
  .pf-nav-links { display:none; }
  .pf-nav-menu-btn { display:flex; align-items:center; justify-content:center; }
  .pf-hero { padding:2.25rem 0 1.5rem; }
  .pf-hero h1 { font-size:1.3rem; }
  .pf-hero-bio { font-size:14px; }
  .pf-hero-cta-row { gap:6px; }
  .pf-hero-link { font-size:12px; padding:6px 12px; }
  .pf-contact-grid { grid-template-columns:1fr; }
  .pf-projects-grid { grid-template-columns:1fr; }
  .pf-project-footer { flex-direction:row; }
  .pf-section { padding:1.75rem 0; }
  .pf-section-title { font-size:1rem; }
  .pf-tech-item { font-size:11.5px; padding:4px 9px 4px 6px; }
}

@media (max-width:380px) {
  .pf-page { padding:0 1rem; }
  .pf-nav-inner { padding:0 1rem; }
  .pf-hero h1 { font-size:1.2rem; }
  .pf-hero-bio { font-size:13px; }
  .pf-hero-avatar { width:58px; height:58px; font-size:22px; }
  .pf-project-thumb { height:130px; }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-page *, .portfolio-page *::before, .portfolio-page *::after {
    transition: none !important; animation: none !important;
  }
}
`;

/* ============================================================
   Main component
   ============================================================ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--:--");
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    return "dark";
  });

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const scrollTo = useCallback((id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="portfolio-page" data-theme={theme}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="pf-nav">
        <div className="pf-nav-inner">
          <div className="pf-nav-left">
            <span className="pf-nav-dot" />
            <span>{time}</span>
          </div>
          <div className="pf-nav-right">
            <div className="pf-nav-links">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => scrollTo(l.href.replace("#", ""), e)}>{l.label}</a>
              ))}
            </div>
            <button className="pf-theme-toggle" aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
              {theme === "dark" ? <IconSun width={15} height={15} /> : <IconMoon width={14} height={14} />}
            </button>
            <button className="pf-nav-menu-btn" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <IconClose width={20} height={20} /> : <IconMenu width={20} height={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`pf-nav-drawer${menuOpen ? " open" : ""}`}>
        <a href="#home" onClick={(e) => { scrollTo("home", e); closeMenu(); }}>Home</a>
        <a href="#projects" onClick={(e) => { scrollTo("projects", e); closeMenu(); }}>Projects</a>
        <a href="#contact" onClick={(e) => { scrollTo("contact", e); closeMenu(); }}>Contact</a>
      </div>

      <div className="pf-page" id="home">
        {/* HERO */}
        <div className="pf-hero">
          <div className="pf-hero-avatar" style={{ background: "#c00", borderColor: "#900" }}>
            <IconSpider width={40} height={40} style={{ color: "#fff" }} />
          </div>
          <h1>Lakshmeesh</h1>
          <div className="pf-hero-role">Full-Stack Engineer</div>
          <p className="pf-hero-bio">
            Hi, I'm <strong>Lakshmeesh</strong> — a full-stack engineer &amp; passionate builder.
            <br />
            I build full stack web apps and cool things with tech.
          </p>
          <div className="pf-hero-cta-row">
            <a className="pf-hero-link primary" href="https://github.com/lakshmeeshpatelk" target="_blank" rel="noreferrer">
              <IconGitHub width={14} height={14} />
              GitHub
            </a>
          </div>
          <p className="pf-hero-subtext">got an idea worth building? let's chat</p>
          <div className="pf-hero-cta-row">
            <a className="pf-hero-link" href="/cv.pdf" download="Lakshmeesh_CV.pdf">
              <IconDownload width={14} height={14} />
              Download CV
            </a>
            <div className="pf-hero-or">OR</div>
            <a className="pf-hero-link" href="https://mail.google.com/mail/?view=cm&to=lakshmeesh121@gmail.com" target="_blank" rel="noreferrer">
              <IconMail width={14} height={14} />
              Email me
            </a>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="pf-section" id="projects">
          <div className="pf-section-title">Projects</div>
          <div className="pf-projects-grid">
            {PROJECTS.map((p) => (
              <div className="pf-project-card" key={p.id}>
                {/* Thumbnail */}
                <div className="pf-project-thumb" style={{ background: p.thumbBg }}>
                  {p.thumbContent}
                </div>

                {/* Body */}
                <div className="pf-project-body">
                  {/* Header: name + icon links */}
                  <div className="pf-project-header">
                    <div className="pf-project-name">{p.title}</div>
                    <div className="pf-project-icon-links">
                      {p.live && p.live !== "https://example.com" && (
                        <a className="pf-project-icon-btn" href={p.live} target="_blank" rel="noreferrer" title="Live site">
                          <IconGlobe width={14} height={14} />
                        </a>
                      )}
                      {p.github && p.github !== "https://github.com" && (
                        <a className="pf-project-icon-btn" href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                          <IconGitHub width={14} height={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pf-project-desc">{p.desc}</div>

                  {/* Footer: status + tech icons */}
                  <div className="pf-project-footer">
                    <span className="pf-project-status">Running</span>
                    <div className="pf-project-tech">
                      {p.tech.map((t, i) => (
                        <div className="pf-tech-icon" title={t.title} key={i}>
                          <t.Icon width={24} height={24} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="pf-view-all" href="#">
            View All
            <IconArrowRight width={13} height={13} />
          </a>
        </div>

        {/* TECH STACK */}
        <div className="pf-section" id="stack">
          <div className="pf-section-title">Tech Stack</div>
          <p className="pf-stack-subtitle">the tech arsenal behind my builds!</p>
          <div className="pf-tech-grid">
            {TECH_STACK.map((t) => (
              <div className="pf-tech-item" key={t.label}>
                <div className="pf-tech-item-icon">
                  <t.Icon width={18} height={18} />
                </div>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="pf-section" id="contact">
          <div className="pf-contact-eyebrow">Start here</div>
          <div className="pf-section-title pf-contact-title">
            Let's hop on a quick call and see if we've got the right chemistry.
          </div>
          <div className="pf-contact-grid">
            {CONTACT_OPTIONS.map((c) => (
              <div className="pf-contact-option" key={c.title}>
                <div className="pf-contact-option-icon">{c.emoji}</div>
                <div className="pf-contact-option-title">{c.title}</div>
                <div className="pf-contact-option-desc">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="pf-contact-cta">
            <h3>Ready to chat?</h3>
            <p>Schedule a free 30-minute strategy call to refine your idea and kick things off.</p>
            <a className="pf-book-call-btn" href="https://cal.com/lakshmeesh-patel-k/30min" target="_blank" rel="noreferrer">
              <IconCalendar width={15} height={15} />
              Book a Free Call
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div className="pf-footer-quote">"The hardest choices require the strongest wills."</div>
      </div>

      {/* BACK TO TOP */}
      <button
        className={`pf-back-top${showTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconArrowUp width={16} height={16} />
      </button>
    </div>
  );
}
