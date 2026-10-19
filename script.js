/**
 * MONICA — COMPUTER ENGINEERING PORTFOLIO
 * Reusable Global Component Loader, Multi-Page Navigation,
 * Interactive AutoCAD Simulation Engine & Architectural Modals
 */

(function () {
  'use strict';

  /* ==========================================================================
     0. REUSABLE GLOBAL HEADER & FOOTER COMPONENT LOADER
        Loads components/header.html & components/footer.html across all pages
        (index.html, about.html, projects.html) with file:// fallback support.
     ========================================================================== */
  const HEADER_COMPONENT_HTML = `
<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a href="index.html" class="brand-logo" aria-label="MONICA ERAN NONAN Home">
      <span class="logo-node-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="1.5" />
          <circle cx="19" cy="6" r="1.5" />
          <circle cx="5" cy="18" r="1.5" />
          <circle cx="19" cy="18" r="1.5" />
          <line x1="9.8" y1="10.1" x2="6.2" y2="7.1" />
          <line x1="14.2" y1="10.1" x2="17.8" y2="7.1" />
          <line x1="9.8" y1="13.9" x2="6.2" y2="16.9" />
          <line x1="14.2" y1="13.9" x2="17.8" y2="16.9" />
        </svg>
      </span>
      <span>MONICA ERAN NONAN</span>
    </a>

    <nav class="header-nav" aria-label="Primary Navigation">
      <a href="about.html" class="nav-link" data-page="about">ABOUT</a>
      <a href="projects.html" class="nav-link" data-page="projects">PROJECTS</a>
      <a href="skills.html" class="nav-link" data-page="skills">SKILLS</a>
      <a href="#contact" class="nav-link" data-page="contact">CONTACT</a>
    </nav>

    <div class="social-links" aria-label="Contact and Social Media Links">
      <a href="https://github.com/monicaerannonan" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="GitHub: https://github.com/monicaerannonan" title="GitHub: github.com/monicaerannonan">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/share/1Kgu9meFix/" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Facebook" title="Facebook: facebook.com/share/1Kgu9meFix/">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      </a>
      <a href="tel:09951904030" class="social-icon-link" aria-label="Phone: 09951904030" title="Phone: 09951904030">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
        </svg>
      </a>
      <a href="mailto:monicaerannonan@gmail.com" class="social-icon-link" aria-label="Email: monicaerannonan@gmail.com" title="Email: monicaerannonan@gmail.com">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
        </svg>
      </a>
    </div>
  </div>
</header>`;

  const FOOTER_COMPONENT_HTML = `
<footer class="site-footer">
  <div class="container footer-inner">
    <a href="index.html" class="brand-logo" aria-label="MONICA ERAN NONAN Home">
      <span class="logo-node-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="1.5" />
          <circle cx="19" cy="6" r="1.5" />
          <circle cx="5" cy="18" r="1.5" />
          <circle cx="19" cy="18" r="1.5" />
          <line x1="9.8" y1="10.1" x2="6.2" y2="7.1" />
          <line x1="14.2" y1="10.1" x2="17.8" y2="7.1" />
          <line x1="9.8" y1="13.9" x2="6.2" y2="16.9" />
          <line x1="14.2" y1="13.9" x2="17.8" y2="16.9" />
        </svg>
      </span>
      <span>MONICA ERAN NONAN</span>
    </a>

    <nav class="footer-nav" aria-label="Footer Navigation">
      <a href="index.html">Home</a>
      <span class="footer-pipe" aria-hidden="true">|</span>
      <a href="about.html">About</a>
      <span class="footer-pipe" aria-hidden="true">|</span>
      <a href="projects.html">Projects</a>
      <span class="footer-pipe" aria-hidden="true">|</span>
      <a href="skills.html">Skills</a>
      <span class="footer-pipe" aria-hidden="true">|</span>
      <a href="#contact">Contact</a>
    </nav>

    <div class="social-links" aria-label="Footer Contact and Social Media Links">
      <a href="https://github.com/monicaerannonan" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="GitHub: https://github.com/monicaerannonan" title="GitHub: github.com/monicaerannonan">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/share/1Kgu9meFix/" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Facebook" title="Facebook: facebook.com/share/1Kgu9meFix/">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      </a>
      <a href="tel:09951904030" class="social-icon-link" aria-label="Phone: 09951904030" title="Phone: 09951904030">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
        </svg>
      </a>
      <a href="mailto:monicaerannonan@gmail.com" class="social-icon-link" aria-label="Email: monicaerannonan@gmail.com" title="Email: monicaerannonan@gmail.com">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

<div class="modal-backdrop" id="infoModalBackdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal-panel">
    <div class="modal-header">
      <div>
        <span class="section-eyebrow" id="modalEyebrow">SYSTEM SPECIFICATION</span>
        <h3 class="project-title" id="modalTitle">PROJECT NEXUS</h3>
      </div>
      <button type="button" class="modal-close-btn" id="modalCloseBtn">ESC // CLOSE</button>
    </div>
    <div class="modal-body" id="modalBodyContent"></div>
  </div>
</div>`;

  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = HEADER_COMPONENT_HTML;
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_COMPONENT_HTML;
  }

  /* ==========================================================================
     1. STICKY HEADER & MULTI-PAGE NAVIGATION STATE
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.header-nav .nav-link');
  const contactSection = document.getElementById('contact');
  const activePageAttr = document.body.getAttribute('data-active-page') || 'home';

  function updateHeaderOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (siteHeader) {
      siteHeader.classList.toggle('is-scrolled', scrollY > 16);
    }

    let currentActiveKey = activePageAttr;
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top <= 240 && rect.bottom >= 160) {
        currentActiveKey = 'contact';
      }
    }

    navLinks.forEach((link) => {
      const pageKey = link.getAttribute('data-page');
      link.classList.toggle('is-active', pageKey === currentActiveKey);
    });
  }

  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  /* ==========================================================================
     2. MAIN CENTER PANEL: AUTOCAD DESIGN & TECHNICAL DRAFTING SHOWCASE
     ========================================================================== */
  const canvas = document.getElementById('heroSimulationCanvas');
  const videoEl = document.getElementById('heroEmbeddedVideo');
  const sceneTabs = document.querySelectorAll('.scene-tab');
  const flankPrev = document.getElementById('heroFlankPrev');
  const flankNext = document.getElementById('heroFlankNext');
  const togglePlayBtn = document.getElementById('togglePlayBtn');
  const playBtnIcon = document.getElementById('playBtnIcon');
  const playBtnText = document.getElementById('playBtnText');
  const simStatusLabel = document.getElementById('simStatusLabel');
  const hudSceneTitle = document.getElementById('hudSceneTitle');
  const hudMetricA = document.getElementById('hudMetricA');
  const hudMetricB = document.getElementById('hudMetricB');
  const hudSceneCaption = document.getElementById('hudSceneCaption');
  const videoTimelineBar = document.getElementById('videoTimelineBar');

  const SCENES = [
    {
      title: 'AUTOCAD 2D ORTHOGRAPHIC & FLOOR PLAN',
      metricA: 'CAD-CORE',
      metricB: '99.9%',
      caption: 'MODULE 01 / 03 - 2D DRAFTING'
    },
    {
      title: '3D WIREFRAME & PARAMETRIC MESH MODEL',
      metricA: 'CAD-CORE',
      metricB: '99.9%',
      caption: 'MODULE 02 / 03 - 3D MODELING'
    },
    {
      title: 'AUTOCAD DESIGN & TECHNICAL DRAFTING',
      metricA: 'CAD-CORE',
      metricB: '99.9%',
      caption: 'MODULE 03 / 03 - CAD DESIGNS'
    }
  ];

  // Default to the 3rd tab: 03 // AUTOCAD BLUEPRINTS
  let activeScene = 2;
  let isPlaying = true;
  let tick = 0;
  let sceneProgress = 340;
  const SCENE_DURATION_TICKS = 480;

  function setScene(index) {
    activeScene = (index + SCENES.length) % SCENES.length;
    sceneProgress = activeScene === 2 ? 340 : 220;

    sceneTabs.forEach((tab, idx) => {
      const isSelected = idx === activeScene;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    const meta = SCENES[activeScene];
    if (hudSceneTitle) hudSceneTitle.textContent = meta.title;
    if (hudMetricA) hudMetricA.textContent = meta.metricA;
    if (hudMetricB) hudMetricB.textContent = meta.metricB;
    if (hudSceneCaption) hudSceneCaption.textContent = meta.caption;
  }

  sceneTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-scene'), 10);
      if (!Number.isNaN(idx)) setScene(idx);
    });
  });

  if (flankPrev) {
    flankPrev.addEventListener('click', () => setScene(activeScene - 1));
    flankPrev.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setScene(activeScene - 1);
      }
    });
  }

  if (flankNext) {
    flankNext.addEventListener('click', () => setScene(activeScene + 1));
    flankNext.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setScene(activeScene + 1);
      }
    });
  }

  if (togglePlayBtn) {
    togglePlayBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (playBtnIcon) playBtnIcon.textContent = isPlaying ? 'II' : '▶';
      if (playBtnText) playBtnText.textContent = isPlaying ? 'PAUSE RENDER' : 'RESUME RENDER';
      if (simStatusLabel) {
        simStatusLabel.textContent = isPlaying ? 'SYS.RENDER // REAL-TIME' : 'SYS.RENDER // PAUSED';
      }
    });
  }

  if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(600, rect.width * dpr);
      canvas.height = Math.max(356, rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    try {
      if (videoEl && typeof canvas.captureStream === 'function') {
        const stream = canvas.captureStream(30);
        videoEl.srcObject = stream;
      }
    } catch (_) {
      // Fallback: canvas renders directly in viewport
    }

    // Subtle dark AutoCAD blueprint grid background + WCS coordinate axes
    function drawCadGrid(w, h) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(6, 20, 13, 0.70)';
      ctx.fillRect(0, 0, w, h);

      // Minor grid lines (16px)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.022)';
      ctx.lineWidth = 1;
      const minor = 16;
      for (let x = 0; x < w; x += minor) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += minor) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Major grid lines (64px)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      const major = 64;
      for (let x = 0; x < w; x += major) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += major) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    }

    // Helper: Draw a technical dimension line with arrowheads and centered label
    function drawDimensionLine(x1, y1, x2, y2, label, offsetNormal) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy) || 1;
      const nx = (-dy / len) * offsetNormal;
      const ny = (dx / len) * offsetNormal;

      const ax1 = x1 + nx;
      const ay1 = y1 + ny;
      const ax2 = x2 + nx;
      const ay2 = y2 + ny;

      ctx.save();
      // Extension lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(ax1, ay1);
      ctx.moveTo(x2, y2);
      ctx.lineTo(ax2, ay2);
      ctx.stroke();

      // Main dimension line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.beginPath();
      ctx.moveTo(ax1, ay1);
      ctx.lineTo(ax2, ay2);
      ctx.stroke();

      // Arrowheads
      const ux = dx / len;
      const uy = dy / len;
      const arrowSize = 5;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(ax1, ay1);
      ctx.lineTo(ax1 + ux * arrowSize - uy * 2.5, ay1 + uy * arrowSize + ux * 2.5);
      ctx.lineTo(ax1 + ux * arrowSize + uy * 2.5, ay1 + uy * arrowSize - ux * 2.5);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(ax2, ay2);
      ctx.lineTo(ax2 - ux * arrowSize - uy * 2.5, ay2 - uy * arrowSize + ux * 2.5);
      ctx.lineTo(ax2 - ux * arrowSize + uy * 2.5, ay2 - uy * arrowSize - ux * 2.5);
      ctx.closePath();
      ctx.fill();

      // Dimension Text Callout (seamless over the faint grid)
      const mx = (ax1 + ax2) * 0.5;
      const my = (ay1 + ay2) * 0.5;
      ctx.font = '8.5px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(label, mx, my - 5);
      ctx.restore();
    }

    // Helper: Draw 3D Projected Wireframe Turbine / Mechanical Housing Assembly
    function draw3DWireframeAssembly(cx, cy, radius, t, showLabels) {
      ctx.save();
      const rotY = t * 0.012;
      const rotX = 0.48 + Math.sin(t * 0.008) * 0.08;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      function project3D(x, y, z) {
        // Rotate around Y
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const fov = 420 / (420 + z2);
        return {
          x: cx + x1 * fov,
          y: cy + y2 * fov,
          z: z2
        };
      }

      // Draw 3D Coordinate Axes at center of model
      const origin = project3D(0, 0, 0);
      const axisX = project3D(radius * 1.15, 0, 0);
      const axisY = project3D(0, -radius * 1.15, 0);
      const axisZ = project3D(0, 0, radius * 1.15);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      [axisX, axisY, axisZ].forEach((ax) => {
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(ax.x, ax.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Multi-tier cylindrical/polygonal CAD wireframe layers
      const segments = 12;
      const layers = [
        { y: -radius * 0.55, r: radius * 0.62, bright: false },
        { y: -radius * 0.22, r: radius * 0.95, bright: true },
        { y: radius * 0.22, r: radius * 0.95, bright: true },
        { y: radius * 0.55, r: radius * 0.62, bright: false }
      ];

      const layerPoints = layers.map((layer) => {
        const pts = [];
        for (let i = 0; i < segments; i++) {
          const ang = (i / segments) * Math.PI * 2;
          pts.push(project3D(Math.cos(ang) * layer.r, layer.y, Math.sin(ang) * layer.r));
        }
        return pts;
      });

      // Inner core shaft rings
      const corePoints = [-radius * 0.68, radius * 0.68].map((ly) => {
        const pts = [];
        for (let i = 0; i < segments; i++) {
          const ang = (i / segments) * Math.PI * 2;
          pts.push(project3D(Math.cos(ang) * (radius * 0.28), ly, Math.sin(ang) * (radius * 0.28)));
        }
        return pts;
      });

      // Draw polygon rings for each layer
      layerPoints.forEach((pts, lIdx) => {
        ctx.strokeStyle = layers[lIdx].bright
          ? 'rgba(255, 255, 255, 0.88)'
          : 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = layers[lIdx].bright ? 1.5 : 1.1;
        ctx.beginPath();
        pts.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.stroke();
      });

      // Draw vertical & diagonal wireframe ribs connecting layers
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
      ctx.lineWidth = 1;
      for (let i = 0; i < segments; i++) {
        ctx.beginPath();
        for (let l = 0; l < layerPoints.length; l++) {
          const p = layerPoints[l][i];
          if (l === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();

        // Radial spokes from inner core to outer flange
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(corePoints[0][i].x, corePoints[0][i].y);
          ctx.lineTo(layerPoints[0][i].x, layerPoints[0][i].y);
          ctx.moveTo(corePoints[1][i].x, corePoints[1][i].y);
          ctx.lineTo(layerPoints[3][i].x, layerPoints[3][i].y);
          ctx.stroke();
        }
      }

      // Draw inner core shaft
      corePoints.forEach((pts) => {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        pts.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.stroke();
      });

      // Highlighted CAD Vertex Nodes
      ctx.fillStyle = '#ffffff';
      layerPoints[1].forEach((p, i) => {
        if (i % 2 === 0) {
          ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
        }
      });

      if (showLabels) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
        ctx.font = '8.5px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('ISO-3D WIREFRAME // MESH: 1,440 VTX', cx, cy + radius + 24);
      }
      ctx.restore();
    }

    // SCENE 2 (DEFAULT ACTIVE): 03 // AUTOCAD BLUEPRINTS
    // Combines an intricate 2D Orthographic Mechanical/Structural Blueprint Draft on the left
    // with a 3D Wireframe CAD Assembly & AutoCAD ViewCube on the right.
    function drawAutoCadBlueprintsScene(w, h, t) {
      const topBound = 86;
      const botBound = h - 68;
      const midY = (topBound + botBound) * 0.52;

      // 1. Left Side: Precision Orthographic Mechanical Flange & Section Blueprint
      const planCx = Math.max(155, w * 0.25);
      const planCy = midY;
      const outerR = Math.min(72, (botBound - topBound) * 0.36);

      ctx.save();
      // Centerlines (dash-dot)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
      ctx.lineWidth = 1;
      ctx.setLineDash([12, 4, 3, 4]);
      ctx.beginPath();
      ctx.moveTo(planCx - outerR - 24, planCy);
      ctx.lineTo(planCx + outerR + 24, planCy);
      ctx.moveTo(planCx, planCy - outerR - 24);
      ctx.lineTo(planCx, planCy + outerR + 24);
      ctx.stroke();

      // Pitch Circle Diameter (dashed)
      const pcdR = outerR * 0.76;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.arc(planCx, planCy, pcdR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Outer Flange Ring & Inner Machined Bores
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(planCx, planCy, outerR, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.78)';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.arc(planCx, planCy, outerR * 0.54, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(planCx, planCy, outerR * 0.28, 0, Math.PI * 2);
      ctx.stroke();

      // 8 Radial Mounting Bolt Holes & Webbing Ribs
      const holeCount = 8;
      for (let i = 0; i < holeCount; i++) {
        const ang = (i / holeCount) * Math.PI * 2;
        const hx = planCx + Math.cos(ang) * pcdR;
        const hy = planCy + Math.sin(ang) * pcdR;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(hx, hy, outerR * 0.085, 0, Math.PI * 2);
        ctx.stroke();

        // Radial stiffening rib
        const r1 = outerR * 0.28;
        const r2 = outerR * 0.54;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.moveTo(planCx + Math.cos(ang) * r1, planCy + Math.sin(ang) * r1);
        ctx.lineTo(planCx + Math.cos(ang) * r2, planCy + Math.sin(ang) * r2);
        ctx.stroke();
      }

      // Dimension Callouts on Plan View
      drawDimensionLine(
        planCx - outerR,
        planCy + outerR * 0.7,
        planCx + outerR,
        planCy + outerR * 0.7,
        'Ø164.00 ±0.02',
        30
      );

      // 2. Center: Cross-Sectional Elevation View (SECTION A-A)
      const secLeft = planCx + outerR + 42;
      const secW = 54;
      const secTop = planCy - outerR;
      const secH = outerR * 2;

      if (secLeft + secW < w * 0.58) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.6;
        // Stepped flange cross-section profile
        ctx.strokeRect(secLeft, secTop, secW * 0.42, secH);
        ctx.strokeRect(secLeft + secW * 0.42, secTop + secH * 0.22, secW * 0.58, secH * 0.56);

        // Internal bore lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(secLeft, planCy - outerR * 0.28);
        ctx.lineTo(secLeft + secW, planCy - outerR * 0.28);
        ctx.moveTo(secLeft, planCy + outerR * 0.28);
        ctx.lineTo(secLeft + secW, planCy + outerR * 0.28);
        ctx.stroke();
        ctx.setLineDash([]);

        // Diagonal 45° section hatch lines on top & bottom flange halves
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.lineWidth = 1;
        for (let hy = secTop + 6; hy < planCy - outerR * 0.3; hy += 7) {
          ctx.beginPath();
          ctx.moveTo(secLeft + 2, hy);
          ctx.lineTo(secLeft + secW * 0.4 - 2, hy + 8);
          ctx.stroke();
        }
        for (let hy = planCy + outerR * 0.32; hy < secTop + secH - 8; hy += 7) {
          ctx.beginPath();
          ctx.moveTo(secLeft + 2, hy);
          ctx.lineTo(secLeft + secW * 0.4 - 2, hy + 8);
          ctx.stroke();
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
        ctx.font = '8.5px "JetBrains Mono", monospace';
        ctx.fillText('SECTION A-A', secLeft - 4, secTop - 10);
      }

      // 3. Right Side: High-Contrast 3D Wireframe CAD Model
      const wireCx = w * 0.75;
      const wireCy = midY - 4;
      const wireR = Math.min(76, (botBound - topBound) * 0.38);
      draw3DWireframeAssembly(wireCx, wireCy, wireR, t, true);

      // 4. Sweeping AutoCAD Crosshair Cursor & OSNAP Marker
      const sweepAng = t * 0.022;
      const snapX = planCx + Math.cos(sweepAng) * pcdR;
      const snapY = planCy + Math.sin(sweepAng) * pcdR;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      ctx.moveTo(snapX - 18, snapY);
      ctx.lineTo(snapX + 18, snapY);
      ctx.moveTo(snapX, snapY - 18);
      ctx.lineTo(snapX, snapY + 18);
      ctx.stroke();

      // AutoCAD OSNAP Green/White Aperture Square
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.4;
      ctx.strokeRect(snapX - 4.5, snapY - 4.5, 9, 9);

      // Coordinate Readout Tag near Bottom-Left of Viewport
      ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
      ctx.font = '8.5px "JetBrains Mono", monospace';
      ctx.fillText(
        'WCS // X:159.27  Y:146.59  Z:0.00  |  OSNAP: CENTER  |  SCALE 1:1',
        32,
        botBound - 8
      );
      ctx.restore();
    }

    // SCENE 0: 01 // 2D DRAFTING (Complex Architectural & Engineering Floor/Layout Plan)
    function draw2DDraftingScene(w, h, t) {
      const left = 54;
      const right = w - 54;
      const top = 96;
      const bottom = h - 76;
      const planW = right - left;
      const planH = bottom - top;

      ctx.save();
      // Outer Structural Wall Double-Line Perimeter
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(left, top, planW, planH);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.lineWidth = 1;
      ctx.strokeRect(left + 5, top + 5, planW - 10, planH - 10);

      // Internal Architectural / Lab Bays & Partitions
      const col1 = left + planW * 0.34;
      const col2 = left + planW * 0.68;
      const rowMid = top + planH * 0.52;

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(col1, top);
      ctx.lineTo(col1, bottom);
      ctx.moveTo(col2, top);
      ctx.lineTo(col2, bottom);
      ctx.moveTo(left, rowMid);
      ctx.lineTo(col2, rowMid);
      ctx.stroke();

      // Architectural Door Swing Arcs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(col1, top + 42, 26, 0, Math.PI * 0.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(col2, rowMid + 36, 26, Math.PI * 0.5, Math.PI);
      ctx.stroke();

      // Technical Bay Annotations & Equipment Footprints
      ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
      ctx.font = '8.5px "JetBrains Mono", monospace';
      ctx.fillText('BAY A1 // SERVER & CONTROL RACK', left + 16, top + 24);
      ctx.fillText('BAY B1 // PROTOTYPE TESTBENCH', col1 + 16, top + 24);
      ctx.fillText('BAY C1 // AUTOCAD WORKSTATION', col2 + 16, top + 24);
      ctx.fillText('BAY A2 // POWER DISTRIBUTION', left + 16, rowMid + 24);

      // Dimension Line across top of Floor Plan
      drawDimensionLine(left, top, col1, top, '4,200 mm', -14);
      drawDimensionLine(col1, top, col2, top, '4,200 mm', -14);
      drawDimensionLine(col2, top, right, top, '3,850 mm', -14);

      // Animated Scanning Verification Line
      const scanX = left + ((t * 1.8) % planW);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(scanX, top);
      ctx.lineTo(scanX, bottom);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // SCENE 1: 02 // 3D MODELING (Full-Viewport High-Contrast 3D Wireframe & Surface Mesh)
    function draw3DModelingScene(w, h, t) {
      const cx = w * 0.5;
      const cy = (86 + (h - 68)) * 0.5;
      const radius = Math.min(96, (h - 160) * 0.44);
      draw3DWireframeAssembly(cx, cy, radius, t * 1.35, true);
    }

    function renderLoop() {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      if (isPlaying) {
        tick += 1;
        sceneProgress = (sceneProgress + 0.6) % SCENE_DURATION_TICKS;
      }

      if (videoTimelineBar) {
        const pct = Math.min(100, Math.max(18, (sceneProgress / SCENE_DURATION_TICKS) * 100));
        videoTimelineBar.style.width = pct.toFixed(1) + '%';
      }

      drawCadGrid(w, h);
      if (activeScene === 0) {
        draw2DDraftingScene(w, h, tick);
      } else if (activeScene === 1) {
        draw3DModelingScene(w, h, tick);
      } else {
        drawAutoCadBlueprintsScene(w, h, tick);
      }

      requestAnimationFrame(renderLoop);
    }

    requestAnimationFrame(renderLoop);
  }

  /* ==========================================================================
     3. EXPANDABLE "— VIEW ALL PROJECTS" ARCHIVE DRAWER
     ========================================================================== */
  const toggleAllProjectsBtn = document.getElementById('toggleAllProjectsBtn');
  const projectsArchiveDrawer = document.getElementById('projectsArchiveDrawer');

  if (toggleAllProjectsBtn && projectsArchiveDrawer) {
    toggleAllProjectsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = projectsArchiveDrawer.classList.toggle('is-open');
      projectsArchiveDrawer.setAttribute('aria-hidden', String(!isOpen));
      toggleAllProjectsBtn.setAttribute('aria-expanded', String(isOpen));
      toggleAllProjectsBtn.textContent = isOpen ? '— Show Featured Projects' : '— View All Projects';
    });
  }

  /* ==========================================================================
     4. INTERACTIVE ARCHITECTURAL MODALS (PROJECTS, ABOUT ME, GET IN TOUCH)
     ========================================================================== */
  const modalBackdrop = document.getElementById('infoModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTitle = document.getElementById('modalTitle');
  const modalBodyContent = document.getElementById('modalBodyContent');

  const PROJECT_SPECS = {
    powersupply: {
      eyebrow: 'PWR // HARDWARE BUILD SPECIFICATION',
      title: 'POWER SUPPLY 220V AC TO 12V DC',
      image: 'assets/IMG20250304184856.jpg',
      summary:
        'Custom-built linear regulated DC power supply housed in a matte-black enclosure. Steps down 220V AC mains via an iron-core 12V transformer, followed by bridge rectification, electrolytic capacitor filtering, heatsinked voltage regulation, and custom soldered PCB assembly.',
      specs: [
        { label: 'INPUT / OUTPUT', val: '220V AC Mains → 12V DC Regulated' },
        { label: 'TRANSFORMER', val: '12V Step-Down Laminated Iron-Core' },
        { label: 'STAGE TOPOLOGY', val: 'Bridge Rectifier + Filter Cap + Regulator' },
        { label: 'HARDWARE BUILD', val: 'Custom Enclosure, Heatsink & Soldered PCB' }
      ]
    },
    sevensegment: {
      eyebrow: 'LOGIC // CIRCUIT DESIGN SPECIFICATION',
      title: 'SEVEN SEGMENT DISPLAY',
      summary:
        'Digital logic and breadboard prototyping implementation driving a 7-segment LED numeric display using BCD-to-7-segment decoder integrated circuits, current-limiting resistor networks, and binary counter stages.',
      specs: [
        { label: 'DISCIPLINE', val: 'Digital Logic, Breadboarding & Circuit Design' },
        { label: 'LOGIC ARCHITECTURE', val: 'BCD Decoder & Combinational Truth Tables' },
        { label: 'DISPLAY MODULE', val: '7-Segment LED Array (Segments a–g + DP)' },
        { label: 'PROTOTYPING', val: 'Solderless Breadboard & DIP IC Routing' }
      ]
    }
  };

  function openModal(eyebrow, title, htmlContent) {
    if (!modalBackdrop) return;
    modalEyebrow.textContent = eyebrow;
    modalTitle.textContent = title;
    modalBodyContent.innerHTML = htmlContent;
    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Project Card Click Handlers (for hardware/circuit cards with data-project modal specs)
  document.querySelectorAll('.project-card[data-project]').forEach((card) => {
    const key = card.getAttribute('data-project');
    const triggerProjectModal = () => {
      const data = PROJECT_SPECS[key];
      if (!data) return;
      const imageHtml = data.image
        ? `<div style="margin-bottom:1.25rem;border:1px solid rgba(255,255,255,0.16);overflow:hidden;max-height:280px;">
             <img src="${data.image}" alt="${data.title}" style="width:100%;height:280px;object-fit:cover;display:block;filter:grayscale(100%) contrast(1.12);" />
           </div>`
        : '';
      const specsHtml = data.specs
        .map(
          (s) => `
          <div class="modal-spec-box">
            <div class="modal-spec-label">${s.label}</div>
            <div class="modal-spec-val">${s.val}</div>
          </div>`
        )
        .join('');

      openModal(
        data.eyebrow,
        data.title,
        `${imageHtml}
         <p>${data.summary}</p>
         <div class="modal-spec-grid">${specsHtml}</div>`
      );
    };

    card.addEventListener('click', triggerProjectModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerProjectModal();
      }
    });
  });

  // "— About Me" Modal Handler
  document.querySelectorAll('.js-open-about-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(
        'ENGINEER DOSSIER // ICCT COLLEGES',
        'MONICA — COMPUTER ENGINEERING',
        `<p>I'm a 4th-year Computer Engineering student at ICCT Colleges focused on software design, control systems, and scalable tech solutions. My work blends foundational engineering principles with modern development tools to build efficient and intentional systems.</p>
         <div class="modal-spec-grid">
           <div class="modal-spec-box">
             <div class="modal-spec-label">INSTITUTION</div>
             <div class="modal-spec-val">ICCT Colleges (BS CpE — 4th Year)</div>
           </div>
           <div class="modal-spec-box">
             <div class="modal-spec-label">CORE FOCUS</div>
             <div class="modal-spec-val">Software Design &amp; Control Systems</div>
           </div>
           <div class="modal-spec-box">
             <div class="modal-spec-label">ENGINEERING TOOLS</div>
             <div class="modal-spec-val">MATLAB, Simulink, Autodesk CAD</div>
           </div>
           <div class="modal-spec-box">
             <div class="modal-spec-label">DEV &amp; CLOUD STACK</div>
             <div class="modal-spec-val">Git/GitHub, Firebase, Systems Dev</div>
           </div>
         </div>`
      );
    });
  });

  // "— Get in Touch" Modal Handler (Shows all of Monica's direct contacts)
  document.querySelectorAll('.js-open-contact').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(
        'DIRECT CHANNELS // CONTACT INFORMATION',
        'GET IN TOUCH',
        `<p>Connect with Monica directly through any of the channels below:</p>
         <div class="modal-spec-grid">
           <a href="mailto:monicaerannonan@gmail.com" class="modal-spec-box" style="display:block;border-color:rgba(255,255,255,0.22);">
             <div class="modal-spec-label">EMAIL</div>
             <div class="modal-spec-val" style="word-break:break-all;">monicaerannonan@gmail.com</div>
           </a>
           <a href="tel:09951904030" class="modal-spec-box" style="display:block;border-color:rgba(255,255,255,0.22);">
             <div class="modal-spec-label">PHONE</div>
             <div class="modal-spec-val">09951904030</div>
           </a>
           <a href="https://www.facebook.com/share/1Kgu9meFix/" target="_blank" rel="noopener noreferrer" class="modal-spec-box" style="display:block;border-color:rgba(255,255,255,0.22);">
             <div class="modal-spec-label">FACEBOOK</div>
             <div class="modal-spec-val" style="word-break:break-all;font-size:0.86rem;">https://www.facebook.com/share/1Kgu9meFix/</div>
           </a>
           <a href="https://github.com/monicaerannonan" target="_blank" rel="noopener noreferrer" class="modal-spec-box" style="display:block;border-color:rgba(255,255,255,0.22);">
             <div class="modal-spec-label">GITHUB</div>
             <div class="modal-spec-val" style="word-break:break-all;font-size:0.86rem;">https://github.com/monicaerannonan</div>
           </a>
         </div>`
      );
    });
  });

  /* ==========================================================================
     5. ABOUT SECTION BACKGROUND VIDEO:
        BLACK-AND-WHITE BREADBOARD CIRCUIT, INTEGRATED CIRCUITS &
        7-SEGMENT DIGITAL DISPLAY COUNTING NUMBERS (0 - 9 LOOP)
     ========================================================================== */
  const bbCanvas = document.getElementById('aboutBreadboardCanvas');
  const bbVideo = document.getElementById('aboutBreadboardVideo');

  if (bbCanvas) {
    const bbCtx = bbCanvas.getContext('2d');
    const bgPhoto = new Image();
    let bgPhotoLoaded = false;
    bgPhoto.onload = () => {
      bgPhotoLoaded = true;
    };
    bgPhoto.src = 'assets/breadboard-bw.png';

    // Standard 7-segment truth table for digits 0-9: [a, b, c, d, e, f, g]
    const SEVEN_SEG_DIGITS = [
      [1, 1, 1, 1, 1, 1, 0], // 0
      [0, 1, 1, 0, 0, 0, 0], // 1
      [1, 1, 0, 1, 1, 0, 1], // 2
      [1, 1, 1, 1, 0, 0, 1], // 3
      [0, 1, 1, 0, 0, 1, 1], // 4
      [1, 0, 1, 1, 0, 1, 1], // 5
      [1, 0, 1, 1, 1, 1, 1], // 6
      [1, 1, 1, 0, 0, 0, 0], // 7
      [1, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 1, 0, 1, 1]  // 9
    ];

    function resizeBreadboardCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = bbCanvas.getBoundingClientRect();
      bbCanvas.width = Math.max(800, rect.width * dpr);
      bbCanvas.height = Math.max(500, rect.height * dpr);
      bbCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resizeBreadboardCanvas);
    resizeBreadboardCanvas();

    // Stream live breadboard + 7-segment counter canvas directly into <video id="aboutBreadboardVideo">
    try {
      if (bbVideo && typeof bbCanvas.captureStream === 'function') {
        const stream = bbCanvas.captureStream(30);
        bbVideo.srcObject = stream;
      }
    } catch (_) {
      // Canvas renders directly underneath overlay
    }

    // Helper to draw an individual horizontal or vertical 7-segment LED bar
    function drawSegmentBar(ctx, x, y, w, h, isHorizontal, isLit) {
      const bevel = Math.min(w, h) * 0.45;
      ctx.save();
      ctx.beginPath();
      if (isHorizontal) {
        ctx.moveTo(x + bevel, y);
        ctx.lineTo(x + w - bevel, y);
        ctx.lineTo(x + w, y + h / 2);
        ctx.lineTo(x + w - bevel, y + h);
        ctx.lineTo(x + bevel, y + h);
        ctx.lineTo(x, y + h / 2);
      } else {
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w, y + bevel);
        ctx.lineTo(x + w, y + h - bevel);
        ctx.lineTo(x + w / 2, y + h);
        ctx.lineTo(x, y + h - bevel);
        ctx.lineTo(x, y + bevel);
      }
      ctx.closePath();

      if (isLit) {
        ctx.shadowColor = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowBlur = 16;
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      }
      ctx.fill();
      ctx.restore();
    }

    // Draw a complete 7-segment digit at (dx, dy) with size (dw, dh)
    function drawSevenSegmentDigit(ctx, dx, dy, dw, dh, digit, dpLit) {
      const segs = SEVEN_SEG_DIGITS[digit % 10];
      const thick = Math.max(8, dw * 0.14);
      const pad = 4;
      const halfH = dh / 2;

      // a (top horizontal)
      drawSegmentBar(ctx, dx + thick * 0.6, dy, dw - thick * 1.2, thick, true, segs[0] === 1);
      // b (top-right vertical)
      drawSegmentBar(ctx, dx + dw - thick, dy + thick * 0.6, thick, halfH - thick * 0.8, false, segs[1] === 1);
      // c (bottom-right vertical)
      drawSegmentBar(ctx, dx + dw - thick, dy + halfH + pad * 0.5, thick, halfH - thick * 0.8, false, segs[2] === 1);
      // d (bottom horizontal)
      drawSegmentBar(ctx, dx + thick * 0.6, dy + dh - thick, dw - thick * 1.2, thick, true, segs[3] === 1);
      // e (bottom-left vertical)
      drawSegmentBar(ctx, dx, dy + halfH + pad * 0.5, thick, halfH - thick * 0.8, false, segs[4] === 1);
      // f (top-left vertical)
      drawSegmentBar(ctx, dx, dy + thick * 0.6, thick, halfH - thick * 0.8, false, segs[5] === 1);
      // g (middle horizontal)
      drawSegmentBar(ctx, dx + thick * 0.6, dy + halfH - thick / 2, dw - thick * 1.2, thick, true, segs[6] === 1);

      // Decimal point (DP)
      ctx.save();
      ctx.beginPath();
      ctx.arc(dx + dw + thick * 0.9, dy + dh - thick * 0.45, thick * 0.42, 0, Math.PI * 2);
      if (dpLit) {
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      }
      ctx.fill();
      ctx.restore();
    }

    // Draw a Dual-Inline Package (DIP) Integrated Circuit on the breadboard
    function drawDipIC(ctx, x, y, w, h, pinPairs, partNumber, subLabel, pulseActive) {
      ctx.save();
      // Metallic IC Legs (Top & Bottom)
      const pinSpacing = (w - 24) / Math.max(1, pinPairs - 1);
      for (let i = 0; i < pinPairs; i++) {
        const px = x + 12 + i * pinSpacing;
        ctx.fillStyle = 'rgba(210, 215, 224, 0.68)';
        // Top pin leg
        ctx.fillRect(px - 2.5, y - 9, 5, 9);
        // Bottom pin leg
        ctx.fillRect(px - 2.5, y + h, 5, 9);
      }

      // IC Matte-Black Epoxy Package Body
      ctx.fillStyle = '#111318';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
      ctx.lineWidth = 1.4;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      // Inner bevel
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
      ctx.strokeRect(x + 4, y + 4, w - 8, h - 8);

      // Half-moon orientation notch on left side
      ctx.beginPath();
      ctx.arc(x, y + h / 2, 7, -Math.PI / 2, Math.PI / 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
      ctx.stroke();

      // Pin 1 dot
      ctx.beginPath();
      ctx.arc(x + 14, y + h - 12, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = pulseActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)';
      ctx.fill();

      // Laser-etched IC Markings
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.fillText(partNumber, x + 16, y + h / 2 - 2);
      ctx.fillStyle = 'rgba(180, 188, 202, 0.55)';
      ctx.font = '8.5px "JetBrains Mono", monospace';
      ctx.fillText(subLabel, x + 16, y + h / 2 + 11);
      ctx.restore();
    }

    function renderBreadboardVideo(timestamp) {
      const rect = bbCanvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // 1. Base Layer: Monochrome Breadboard Macro Photo or Deep Evergreen Base
      bbCtx.fillStyle = '#06140d';
      bbCtx.fillRect(0, 0, w, h);

      if (bgPhotoLoaded) {
        bbCtx.save();
        bbCtx.globalAlpha = 0.42;
        const imgAspect = bgPhoto.width / bgPhoto.height;
        const viewAspect = w / h;
        let drawW = w;
        let drawH = h;
        let offX = 0;
        let offY = 0;
        if (viewAspect > imgAspect) {
          drawH = w / imgAspect;
          offY = (h - drawH) * 0.5;
        } else {
          drawW = h * imgAspect;
          offX = (w - drawW) * 0.5;
        }
        bbCtx.drawImage(bgPhoto, offX, offY, drawW, drawH);
        bbCtx.restore();
      }

      // 2. Calculate current counting number (0-9 loop, ~850ms per digit)
      const stepTime = 850;
      const totalCount = Math.floor(timestamp / stepTime);
      const onesDigit = totalCount % 10;
      const tensDigit = Math.floor(totalCount / 10) % 10;
      const clockPulse = (timestamp % stepTime) < (stepTime * 0.45);

      // 3. Position the Breadboard Assembly on the right half so left-aligned text is unobstructed
      const boardLeft = Math.max(w * 0.42, 340);
      const boardWidth = w - boardLeft + 40;
      const boardTop = h * 0.1;
      const boardHeight = h * 0.8;

      bbCtx.save();

      // Solderless Breadboard Base Plate
      bbCtx.fillStyle = 'rgba(15, 48, 33, 0.78)';
      bbCtx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      bbCtx.lineWidth = 1;
      bbCtx.fillRect(boardLeft, boardTop, boardWidth, boardHeight);
      bbCtx.strokeRect(boardLeft, boardTop, boardWidth, boardHeight);

      // Power Rail Lines (+5V & GND Bus Strips)
      bbCtx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      bbCtx.beginPath();
      bbCtx.moveTo(boardLeft + 20, boardTop + 26);
      bbCtx.lineTo(w - 20, boardTop + 26);
      bbCtx.moveTo(boardLeft + 20, boardTop + 40);
      bbCtx.lineTo(w - 20, boardTop + 40);
      bbCtx.moveTo(boardLeft + 20, boardTop + boardHeight - 40);
      bbCtx.lineTo(w - 20, boardTop + boardHeight - 40);
      bbCtx.moveTo(boardLeft + 20, boardTop + boardHeight - 26);
      bbCtx.lineTo(w - 20, boardTop + boardHeight - 26);
      bbCtx.stroke();

      // Central Breadboard Divider Trench
      const trenchY = boardTop + boardHeight * 0.5;
      bbCtx.fillStyle = 'rgba(6, 20, 13, 0.88)';
      bbCtx.fillRect(boardLeft + 16, trenchY - 12, boardWidth - 32, 24);

      // Breadboard Tie-Point Holes Matrix
      const holeSpacing = 14;
      bbCtx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      for (let gx = boardLeft + 28; gx < w - 24; gx += holeSpacing) {
        for (let gy = boardTop + 62; gy < boardTop + boardHeight - 58; gy += holeSpacing) {
          if (Math.abs(gy - trenchY) < 18) continue;
          bbCtx.fillRect(gx - 1.5, gy - 1.5, 3, 3);
        }
      }

      // 4. Draw Integrated Circuits (DIP ICs) straddling the central breadboard trench
      const ic1X = boardLeft + 36;
      const ic2X = ic1X + 148;
      const icY = trenchY - 26;

      drawDipIC(
        bbCtx,
        ic1X,
        icY,
        122,
        52,
        4,
        'NE555P // CLK',
        'TIMER OSC 1.17Hz',
        clockPulse
      );

      drawDipIC(
        bbCtx,
        ic2X,
        icY,
        164,
        52,
        7,
        'SN74LS47N',
        'BCD TO 7-SEG DEC',
        !clockPulse
      );

      // 5. Draw 4-Bit Binary BCD Indicator LEDs (Q3, Q2, Q1, Q0) for current onesDigit
      const bcdBaseX = ic2X + 18;
      const bcdBaseY = icY - 46;
      for (let bit = 3; bit >= 0; bit--) {
        const idx = 3 - bit;
        const bitOn = ((onesDigit >> bit) & 1) === 1;
        const lx = bcdBaseX + idx * 36;

        bbCtx.save();
        bbCtx.beginPath();
        bbCtx.arc(lx, bcdBaseY, 5, 0, Math.PI * 2);
        if (bitOn) {
          bbCtx.shadowColor = 'rgba(255, 255, 255, 0.95)';
          bbCtx.shadowBlur = 12;
          bbCtx.fillStyle = '#ffffff';
        } else {
          bbCtx.fillStyle = 'rgba(255, 255, 255, 0.14)';
        }
        bbCtx.fill();
        bbCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        bbCtx.stroke();
        bbCtx.restore();

        bbCtx.fillStyle = 'rgba(200, 208, 220, 0.65)';
        bbCtx.font = '8px "JetBrains Mono", monospace';
        bbCtx.fillText(`Q${bit}:${bitOn ? '1' : '0'}`, lx - 10, bcdBaseY - 10);
      }

      // 6. Draw 7-Segment Digital Display Module on the Right Side of the Breadboard
      const segModuleX = Math.min(ic2X + 195, w - 250);
      const segModuleY = trenchY - 105;
      const segModuleW = 206;
      const segModuleH = 210;

      // Jumper Wires connecting IC2 (SN74LS47N) to the 7-Segment Display Module
      for (let wire = 0; wire < 7; wire++) {
        const startX = ic2X + 24 + wire * 20;
        const startY = wire % 2 === 0 ? icY - 9 : icY + 61;
        const endX = segModuleX;
        const endY = segModuleY + 30 + wire * 24;

        bbCtx.strokeStyle =
          SEVEN_SEG_DIGITS[onesDigit][wire] === 1
            ? 'rgba(255, 255, 255, 0.52)'
            : 'rgba(255, 255, 255, 0.18)';
        bbCtx.lineWidth = 1.6;
        bbCtx.beginPath();
        bbCtx.moveTo(startX, startY);
        bbCtx.bezierCurveTo(
          startX + 35,
          startY + (wire % 2 === 0 ? -28 : 28),
          endX - 45,
          endY,
          endX,
          endY
        );
        bbCtx.stroke();
      }

      // 7-Segment Display Housing
      bbCtx.fillStyle = '#06140d';
      bbCtx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
      bbCtx.lineWidth = 1.6;
      bbCtx.fillRect(segModuleX, segModuleY, segModuleW, segModuleH);
      bbCtx.strokeRect(segModuleX, segModuleY, segModuleW, segModuleH);

      // Module Header Label
      bbCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      bbCtx.font = '8.5px "JetBrains Mono", monospace';
      bbCtx.fillText('7-SEG DIGITAL COUNTER // BCD', segModuleX + 14, segModuleY + 18);

      // Render Dual 7-Segment Digits (Tens + Ones Counting 00 -> 99 continuously)
      const digitW = 62;
      const digitH = 122;
      const digitTop = segModuleY + 38;

      drawSevenSegmentDigit(
        bbCtx,
        segModuleX + 20,
        digitTop,
        digitW,
        digitH,
        tensDigit,
        false
      );

      drawSevenSegmentDigit(
        bbCtx,
        segModuleX + 106,
        digitTop,
        digitW,
        digitH,
        onesDigit,
        clockPulse
      );

      // Digital Readout Footer inside Module
      bbCtx.fillStyle = 'rgba(255, 255, 255, 0.78)';
      bbCtx.font = '9px "JetBrains Mono", monospace';
      const binStr = onesDigit.toString(2).padStart(4, '0');
      bbCtx.fillText(
        `DEC: ${tensDigit}${onesDigit}   BCD: ${binStr}`,
        segModuleX + 16,
        segModuleY + segModuleH - 14
      );

      bbCtx.restore();

      requestAnimationFrame(renderBreadboardVideo);
    }

    requestAnimationFrame(renderBreadboardVideo);
  }

  /* ==========================================================================
     6. CONTINUOUS PROJECT CARD FUNCTIONAL DASHBOARD ANIMATIONS
        Continuous, looping live telemetry updates for:
        - 7-Segment Display counter (00 to 99 loop with BCD & bus lines)
        - SpO2 Arduino fluctuating oxygen (98% <-> 99%) & BPM
        - Power Supply HUD fluctuating voltage (12.0V <-> 11.9V)
        - Spirometer volume telemetry
     ========================================================================== */
  function initProjectCardAnimations() {
    // 1. Dual 7-Segment Live Counter (00 - 99 Continuous Loop)
    const sevenSegTens = document.getElementById('sevenSegTens');
    const sevenSegOnes = document.getElementById('sevenSegOnes');
    const liveCounterNumber = document.getElementById('liveCounterNumber');

    if (sevenSegTens && sevenSegOnes) {
      const SEVEN_SEG_TABLE = [
        [1, 1, 1, 1, 1, 1, 0], // 0
        [0, 1, 1, 0, 0, 0, 0], // 1
        [1, 1, 0, 1, 1, 0, 1], // 2
        [1, 1, 1, 1, 0, 0, 1], // 3
        [0, 1, 1, 0, 0, 1, 1], // 4
        [1, 0, 1, 1, 0, 1, 1], // 5
        [1, 0, 1, 1, 1, 1, 1], // 6
        [1, 1, 1, 0, 0, 0, 0], // 7
        [1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 0, 1, 1]  // 9
      ];

      const segLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      const tensEls = segLetters.map((letter) => document.getElementById(`tens_${letter}`));
      const onesEls = segLetters.map((letter) => document.getElementById(`ones_${letter}`));
      const bcdPins = [
        document.getElementById('bcdBitA0'),
        document.getElementById('bcdBitA1'),
        document.getElementById('bcdBitA2'),
        document.getElementById('bcdBitA3')
      ];
      const busLines = segLetters.map((letter) => document.getElementById(`segBusLine_${letter}`));

      let counterValue = 0;

      function updateSevenSegmentDisplay() {
        const tens = Math.floor(counterValue / 10);
        const ones = counterValue % 10;

        const tensCode = SEVEN_SEG_TABLE[tens] || SEVEN_SEG_TABLE[0];
        const onesCode = SEVEN_SEG_TABLE[ones] || SEVEN_SEG_TABLE[0];

        // Update Tens digit segments
        tensEls.forEach((el, idx) => {
          if (el) {
            el.classList.toggle('is-lit', tensCode[idx] === 1);
          }
        });

        // Update Ones digit segments
        onesEls.forEach((el, idx) => {
          if (el) {
            el.classList.toggle('is-lit', onesCode[idx] === 1);
          }
        });

        // Update Text Counter Display
        if (liveCounterNumber) {
          liveCounterNumber.textContent = String(counterValue).padStart(2, '0');
        }

        // Update BCD inputs for the ones digit (A0 = bit0, A1 = bit1, A2 = bit2, A3 = bit3)
        bcdPins.forEach((pin, idx) => {
          if (pin) {
            const isBitHigh = (ones & (1 << idx)) !== 0;
            pin.classList.toggle('is-active', isBitHigh);
          }
        });

        // Update Segment Bus Lines (highlighting active lines corresponding to ones digit)
        busLines.forEach((line, idx) => {
          if (line) {
            line.classList.toggle('is-active', onesCode[idx] === 1);
          }
        });

        counterValue = (counterValue + 1) % 100;
      }

      // Initial update and set interval (~625ms for ~1.6Hz clock)
      updateSevenSegmentDisplay();
      setInterval(updateSevenSegmentDisplay, 625);
    }

    // 2. SPO2 Fluctuating Numbers (98% <-> 99%) & Heart Rate Fluctuations
    const spo2Els = document.querySelectorAll('.js-fluctuate-spo2');
    const bpmEls = document.querySelectorAll('.js-fluctuate-bpm');

    if (spo2Els.length > 0 || bpmEls.length > 0) {
      const spo2Values = ['SpO2: 98%', 'SpO2: 99%', 'SpO2: 98%', 'SpO2: 99%', 'SpO2: 97%', 'SpO2: 99%'];
      const bpmValues = ['76 BPM', '77 BPM', '75 BPM', '78 BPM', '76 BPM', '77 BPM'];
      let spo2Idx = 0;

      setInterval(() => {
        spo2Idx = (spo2Idx + 1) % spo2Values.length;
        const currentSpo2 = spo2Values[spo2Idx];
        const currentBpm = bpmValues[spo2Idx];

        spo2Els.forEach((el) => {
          el.textContent = currentSpo2;
        });
        bpmEls.forEach((el) => {
          el.textContent = currentBpm;
        });
      }, 1900);
    }

    // 3. Power Supply Live Decimal Flickering (12.0V <-> 11.9V)
    const voltageEls = document.querySelectorAll('.js-flicker-voltage');
    if (voltageEls.length > 0) {
      const voltValues = [
        'V-OUT: 12.0V',
        'V-OUT: 12.0V',
        'V-OUT: 11.9V',
        'V-OUT: 12.0V',
        'V-OUT: 12.1V',
        'V-OUT: 11.9V',
        'V-OUT: 12.0V'
      ];
      let voltIdx = 0;

      setInterval(() => {
        voltIdx = (voltIdx + 1) % voltValues.length;
        const currentV = voltValues[voltIdx];
        voltageEls.forEach((el) => {
          el.textContent = currentV;
        });
      }, 1100);
    }

    // 4. Spirometer Telemetry Volume Fluctuation
    const volEls = document.querySelectorAll('.js-fluctuate-vol');
    if (volEls.length > 0) {
      const volValues = ['VOL: 1200mL', 'VOL: 1220mL', 'VOL: 1190mL', 'VOL: 1250mL', 'VOL: 1180mL'];
      let volIdx = 0;

      setInterval(() => {
        volIdx = (volIdx + 1) % volValues.length;
        volEls.forEach((el) => {
          el.textContent = volValues[volIdx];
        });
      }, 2300);
    }

    // 5. Basic Electronics Digital Multimeter Live Fluctuation
    const dmmVoltEls = document.querySelectorAll('.js-dmm-volt');
    const dmmFreqEls = document.querySelectorAll('.js-dmm-freq');
    if (dmmVoltEls.length > 0 || dmmFreqEls.length > 0) {
      const dmmVolts = ['5.02 V', '5.01 V', '5.03 V', '5.00 V', '4.99 V', '5.02 V'];
      const dmmFreqs = ['1.002 kHz', '1.001 kHz', '1.003 kHz', '1.000 kHz', '1.002 kHz'];
      let dmmIdx = 0;

      setInterval(() => {
        dmmIdx = (dmmIdx + 1) % dmmVolts.length;
        dmmVoltEls.forEach((el) => {
          el.textContent = dmmVolts[dmmIdx];
        });
        dmmFreqEls.forEach((el) => {
          el.textContent = dmmFreqs[dmmIdx % dmmFreqs.length];
        });
      }, 1250);
    }

    // 6. Microsoft Office Cascading Spreadsheet Rapid Binary & Numeric Cycling
    const sheetBinEls = document.querySelectorAll(
      '.js-cell-bin1, .js-cell-bin2, .js-cell-bin3, .js-cell-bin4, .js-cell-bin5, .js-cell-bin6'
    );
    const sheetNumEls = document.querySelectorAll(
      '.js-cell-num1, .js-cell-num4, .js-cell-num7, .js-cell-num10, .js-cell-num13, .js-cell-num16'
    );

    if (sheetBinEls.length > 0) {
      const binaryPool = [
        '01101001', '11000011', '00110110', '10101100', '11110000', '01010110',
        '10011001', '11100100', '00011101', '01110010', '10110111', '11011000'
      ];
      let binOffset = 0;

      setInterval(() => {
        binOffset = (binOffset + 1) % binaryPool.length;
        sheetBinEls.forEach((el, i) => {
          el.textContent = binaryPool[(binOffset + i) % binaryPool.length];
        });
      }, 450);
    }

    if (sheetNumEls.length > 0) {
      const numFluctuations = [
        ['12.04', '05.01', '03.32', '01.80', '00.99', '24.00'],
        ['12.06', '05.03', '03.30', '01.82', '01.02', '24.05'],
        ['11.98', '04.98', '03.35', '01.79', '00.97', '23.95'],
        ['12.01', '05.00', '03.31', '01.81', '01.00', '24.02']
      ];
      let numIdx = 0;

      setInterval(() => {
        numIdx = (numIdx + 1) % numFluctuations.length;
        const currentNums = numFluctuations[numIdx];
        sheetNumEls.forEach((el, i) => {
          if (currentNums[i]) el.textContent = currentNums[i];
        });
      }, 700);
    }
  }

  // Initialize project card live animations
  initProjectCardAnimations();
})();

