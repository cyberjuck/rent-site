// ===== Big words: outline on hover, per visual line =====
// Each line becomes: <span class="ln"><span class="ln-o">…words…</span><span class="ln-f">same text</span></span>
//   .ln-o — the text itself; turns into a 1.5px INSIDE outline (SVG filter) while active
//   .ln-f — solid fill layer on top; its mask slides away with a soft gradient edge
// The line is active only while the pointer is over the letters (ink box of a word),
// re-checked on scroll too, so it reacts when the page moves under a still mouse.
(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const SEL = ".hero .t, .manifesto .t, .drugstore .t, .insta .t, .ty-hero .t";
  const els = [...document.querySelectorAll(SEL)];
  if (!els.length) return;

  // inner-stroke filter: glyph minus glyph eroded by 1.5px = 1.5px ring inside the letter
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "0"); svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.innerHTML = '<filter id="ring" x="-5%" y="-30%" width="110%" height="160%" color-interpolation-filters="sRGB">' +
    // round erosion (blur + threshold) instead of feMorphology's square one,
    // so vertical, horizontal and diagonal strokes get exactly the same 1.5px width
    '<feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="b"/>' +
    '<feComponentTransfer in="b" result="e"><feFuncA type="linear" slope="20" intercept="-17.5"/></feComponentTransfer>' +
    '<feComposite in="SourceGraphic" in2="e" operator="out"/></filter>';
  document.body.appendChild(svg);

  // 1) wrap words (again after a language switch replaces the text)
  const wrapWords = () => els.forEach((el) => {
    if (el.querySelector(".w")) return;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/( +)/).forEach((p) => {
            if (!p) return;
            if (/^ +$/.test(p)) frag.appendChild(document.createTextNode(p));
            else { const s = document.createElement("span"); s.className = "w"; s.textContent = p; frag.appendChild(s); }
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
  });
  wrapWords();

  // keep the fill layer exactly on top of the text (re-run whenever layout shifts)
  function align(f, o, fi) {
    f.style.transform = "none";
    const ro = o.getBoundingClientRect(), ri = fi.getBoundingClientRect();
    f.style.transform = `translate(${ro.left - ri.left}px, ${ro.top - ri.top}px)`;
  }
  const realignAll = () => els.forEach((el) => el.querySelectorAll(".ln").forEach((ln) => {
    const o = ln.querySelector(".ln-o"), f = ln.querySelector(".ln-f");
    if (o && f && f.firstChild) align(f, o, f.firstChild);
  }));
  const canvas = document.createElement("canvas").getContext("2d");
  let lines = [];

  // 2) group words into visual lines, build fill layer, measure ink band
  function group() {
    els.forEach((el) => {
      el.querySelectorAll(".ln").forEach((ln) => ln.replaceWith(...ln.querySelector(".ln-o").childNodes));
      el.normalize();
      let o = null, top = null;
      [...el.childNodes].forEach((n) => {
        if (n.nodeType === 1 && n.tagName === "BR") { o = null; return; }
        if (n.nodeType === 1 && n.classList.contains("w")) {
          const t = Math.round(n.getBoundingClientRect().top);
          if (o === null || Math.abs(t - top) > 4) {
            const ln = document.createElement("span"); ln.className = "ln";
            o = document.createElement("span"); o.className = "ln-o";
            ln.appendChild(o); n.before(ln); top = t;
          }
          o.appendChild(n);
        } else if (o && n.nodeType === 3) {
          const next = n.nextSibling;
          if (next && next.nodeType === 1 && next.classList.contains("w") &&
              Math.abs(Math.round(next.getBoundingClientRect().top) - top) <= 4) o.appendChild(n);
        }
      });
    });

    lines = [];
    els.forEach((el) => el.querySelectorAll(".ln").forEach((ln) => {
      const o = ln.querySelector(".ln-o");
      const f = document.createElement("span");
      f.className = "ln-f"; f.setAttribute("aria-hidden", "true");
      const fi = document.createElement("span");
      fi.textContent = o.textContent;
      f.appendChild(fi);
      ln.appendChild(f);
      // align fill layer exactly over the text (compare the two inline text boxes → same baseline)
      align(f, o, fi);
      // ink band of capitals/letters relative to the word box top
      const so = getComputedStyle(o);
      canvas.font = `${so.fontStyle} ${so.fontWeight} ${so.fontSize} ${so.fontFamily}`;
      let txt = o.textContent;
      if (so.textTransform === "uppercase") txt = txt.toUpperCase();
      const m = canvas.measureText(txt);
      const asc = m.fontBoundingBoxAscent || parseFloat(so.fontSize) * 0.9;
      lines.push({
        el: ln, words: [...o.querySelectorAll(".w")],
        inkTop: asc - m.actualBoundingBoxAscent, inkBot: asc + m.actualBoundingBoxDescent,
      });
    }));
  }

  // 3) hit-test the pointer against the letters
  let px = -1, py = -1, raf = 0, active = null;
  function check() {
    raf = 0;
    let hit = null;
    if (px >= 0) {
      for (const L of lines) {
        for (const w of L.words) {
          const r = w.getBoundingClientRect();
          if (py < r.top + L.inkTop - 2 || py > r.top + L.inkBot + 2) break; // same band for the whole line
          if (px >= r.left - 2 && px <= r.right + 2) { hit = L; break; }
        }
        if (hit) break;
      }
    }
    if (hit === active) return;
    if (active) active.el.classList.remove("on");
    active = hit;
    if (hit) hit.el.classList.add("on");
  }
  const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
  document.addEventListener("pointermove", (e) => { px = e.clientX; py = e.clientY; check(); }, { passive: true });
  window.addEventListener("scroll", schedule, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => { px = py = -1; schedule(); });

  // pre-render the outline layer for blocks on screen, so hover reacts in the very first frame
  const warm = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.querySelectorAll(".ln").forEach((ln) => ln.classList.toggle("ring", e.isIntersecting)));
  }, { rootMargin: "200px 0px" });
  const warmAll = () => new Set(els.map((el) => el.closest("section, a.insta, .insta"))).forEach((s) => { if (s) { warm.unobserve(s); warm.observe(s); } });

  const run = () => { document.documentElement.classList.add("fx"); group(); warmAll(); schedule(); };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(run);
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { active = null; group(); warmAll(); schedule(); }, 150); });
  // page height changes (e.g. the ticket widget grows) → re-align, so nothing drifts
  if ("ResizeObserver" in window) {
    let raf2 = 0;
    new ResizeObserver(() => { cancelAnimationFrame(raf2); raf2 = requestAnimationFrame(realignAll); })
      .observe(document.body);
  }
  document.addEventListener("langchange", () => { active = null; wrapWords(); group(); warmAll(); schedule(); });
})();

// ===== Photos: reveal on scroll =====
(function () {
  const imgs = document.querySelectorAll(".row__img");
  if (!imgs.length || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("anim");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  imgs.forEach((el) => io.observe(el));
})();

// ===== Ticket perforation: spread dots from edge to edge =====
(function () {
  const bars = document.querySelectorAll(".strip, .cta-bar");
  if (!bars.length) return;
  const fit = (el) => {
    const cs = getComputedStyle(el);
    const dot = parseFloat(cs.getPropertyValue("--dot")) || 18;
    const gap = parseFloat(cs.getPropertyValue("--gap")) || 11;
    const h = el.getBoundingClientRect().height;
    if (!h) return;
    const n = Math.max(1, Math.round(h / (dot + gap))); // number of intervals
    el.style.setProperty("--step", (h / n) + "px");
  };
  const ro = "ResizeObserver" in window ? new ResizeObserver((es) => es.forEach((e) => fit(e.target))) : null;
  bars.forEach((el) => { fit(el); ro && ro.observe(el); });
  window.addEventListener("resize", () => bars.forEach(fit));
  document.fonts && document.fonts.ready.then(() => bars.forEach(fit));
})();

// ===== Background videos: make sure they play (iOS sometimes blocks autoplay) =====
(function () {
  const vids = document.querySelectorAll(".row__img video");
  if (!vids.length) return;
  const tryPlay = (v) => { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting ? tryPlay(e.target) : e.target.pause()), { threshold: 0.1 });
    vids.forEach((v) => io.observe(v));
  } else vids.forEach(tryPlay);
  // first touch anywhere unlocks playback on devices that blocked autoplay
  const unlock = () => { vids.forEach(tryPlay); window.removeEventListener("touchstart", unlock); };
  window.addEventListener("touchstart", unlock, { passive: true });
})();
