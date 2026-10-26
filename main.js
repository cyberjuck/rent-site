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

