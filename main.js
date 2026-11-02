// ===== Language switch =====
const LANGS = ["en", "sr"];

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = "en";
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v === undefined) return;
    el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".langs button").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === lang)
  );
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.dispatchEvent(new Event("langchange"));
}

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
setLang(saved);

document.querySelectorAll(".langs button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

// ===== Mobile menu =====
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

function toggleMenu(open) {
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-hidden", !open);
}
burger.addEventListener("click", () => toggleMenu(true));
document.querySelector(".menu__close").addEventListener("click", () => toggleMenu(false));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

// ===== Hide photo slot if image file is missing =====
document.querySelectorAll(".row__img img").forEach((img) => {
  const hide = () => (img.style.visibility = "hidden");
  if (img.complete && !img.naturalWidth) hide();
  img.addEventListener("error", hide);
});


// ===== Fast photo switching (hero + photo blocks) =====
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".slides").forEach((box) => {
    const imgs = box.querySelectorAll("img");
    if (imgs.length < 2) return;
    let i = 0;
    setInterval(() => {
      imgs[i].classList.remove("is-on");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("is-on");
    }, 200);
  });
})();

// ===== SOLD OUT sticker over "13.12" in the hero =====
(function () {
  const tag = document.querySelector(".sold");
  if (!tag) return;
  const hero = tag.parentElement;
  function place() {
    const w = document.createTreeWalker(hero, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (n.parentElement.closest(".sold, .ln-f")) continue;
      const i = n.textContent.indexOf("13.12");
      if (i < 0) continue;
      const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 5);
      const b = r.getBoundingClientRect(), h = hero.getBoundingClientRect();
      const fs = parseFloat(getComputedStyle(n.parentElement).fontSize);
      tag.style.fontSize = fs * 0.3 + "px";
      tag.style.width = b.width * 1.25 + "px";
      tag.style.textAlign = "center";
      tag.style.padding = ".28em 0";
      const cx = b.left - h.left + b.width / 2, cy = b.top - h.top + b.height * 0.58;
      tag.style.left = cx - tag.offsetWidth / 2 + "px";
      tag.style.top = cy - tag.offsetHeight / 2 + "px";
      tag.style.transform = "rotate(-8deg)";
      tag.classList.add("is-placed");
      return;
    }
  }
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(place));
  let t; window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(place, 100); });
})();
