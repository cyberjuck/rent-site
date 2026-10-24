// ===== Big words: split into visual lines, outline a line when its letters are hovered =====
(function () {
  const SEL = ".hero .t, .manifesto .t, .drugstore .t, .insta .t, .ty-hero .t";
  const els = [...document.querySelectorAll(SEL)];
  if (!els.length) return;

  // 1) wrap every word once: <span class="w">word</span>
  els.forEach((el) => {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const parts = n.textContent.split(/( +)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
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

  // 2) group words that sit on the same visual line into <span class="ln">
  function group() {
    els.forEach((el) => {
      el.querySelectorAll(".ln").forEach((ln) => ln.replaceWith(...ln.childNodes));
      el.normalize();
      let line = null, top = null;
      [...el.childNodes].forEach((n) => {
        if (n.nodeType === 1 && n.tagName === "BR") { line = null; return; }
        if (n.nodeType === 1 && n.classList.contains("w")) {
          const t = Math.round(n.getBoundingClientRect().top);
          if (line === null || Math.abs(t - top) > 4) {
            line = document.createElement("span"); line.className = "ln";
            n.before(line); top = t;
          }
          line.appendChild(n);
        } else if (line && n.nodeType === 3) {
          // a space: keep it inside the line only if the next word stays on this line
          const next = n.nextSibling;
          if (next && next.nodeType === 1 && next.classList.contains("w") &&
              Math.abs(Math.round(next.getBoundingClientRect().top) - top) <= 4) line.appendChild(n);
        }
      });
    });
  }

  // 3) hover on the letters (word boxes), not on empty space of the line
  let timer = null;
  document.addEventListener("pointerover", (e) => {
    const w = e.target.closest && e.target.closest(".fx .w");
    if (!w) return;
    clearTimeout(timer);
    const ln = w.closest(".ln");
    document.querySelectorAll(".fx .ln.on").forEach((x) => x !== ln && x.classList.remove("on"));
    ln && ln.classList.add("on");
  });
  document.addEventListener("pointerout", (e) => {
    const w = e.target.closest && e.target.closest(".fx .w");
    if (!w) return;
    const to = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(".fx .w");
    if (to && to.closest(".ln") === w.closest(".ln")) return;
    clearTimeout(timer);
    // tiny grace period so moving across the gap between two words doesn't flicker
    timer = setTimeout(() => {
      const ln = w.closest(".ln");
      if (ln && !ln.querySelector(".w:hover")) ln.classList.remove("on");
    }, 40);
  });

  const run = () => { group(); document.documentElement.classList.add("fx"); };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(run);
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(group, 120); });
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
