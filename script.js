/* ============================
   Queenstel Bakery - script.js
   Loading, reveals, slider drag, whatsapp helper,
   back-to-top, dark-mode persistence, logo animation
============================ */

/* -------- 1. Loader (fade) -------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 650);
  }

  // trigger a gentle logo pulse on load
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.classList.add("pulse");
    setTimeout(() => logo.classList.remove("pulse"), 1200);
  }
});

/* -------- 2. Reveal on scroll (optimized) -------- */
const revealOnScroll = (() => {
  const elems = () => Array.from(document.querySelectorAll(".reveal"));
  let lastRun = 0;
  function handler() {
    const now = Date.now();
    if (now - lastRun < 80) return;
    lastRun = now;
    const trigger = window.innerHeight - 90;
    elems().forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("active");
    });
  }
  window.addEventListener("scroll", handler, {passive:true});
  window.addEventListener("resize", handler);
  handler(); // run once
  return handler;
})();

/* -------- 3. Slider drag-scroll (desktop & touch) -------- */
(() => {
  const slider = document.querySelector(".slider");
  if (!slider) return;
  let isDown=false, startX=0, startScroll=0;

  // mouse
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    startScroll = slider.scrollLeft;
  });
  document.addEventListener("mouseup", () => { isDown=false; slider.classList.remove("dragging"); });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8;
    slider.scrollLeft = startScroll - walk;
  });

  // touch
  slider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    startScroll = slider.scrollLeft;
  });
  slider.addEventListener("touchend", () => isDown = false);
  slider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.6;
    slider.scrollLeft = startScroll - walk;
  });
})();

/* -------- 4. WhatsApp order generator (use per-item) -------- */
function openWhatsAppOrder(itemName = "") {
  // set your phone number here (country code + number, no plus)
  const phone = "233000000000"; // <-- REPLACE WITH YOUR NUMBER
  const text = encodeURIComponent(`Hello Queenstel Bakery, I'd like to order: ${itemName}`);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}
// Example usage in HTML: <button onclick="openWhatsAppOrder('Chocolate Cupcake')">Order</button>

/* -------- 5. Back to top smooth scroll (links to #top) -------- */
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* -------- 6. Button ripple effect (auto attach) -------- */
(() => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      circle.className = "ripple";
      this.appendChild(circle);
      const d = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = d + "px";
      const rect = this.getBoundingClientRect();
      circle.style.left = (e.clientX - rect.left - d/2) + "px";
      circle.style.top = (e.clientY - rect.top - d/2) + "px";
      setTimeout(()=> circle.remove(), 700);
    });
  });
})();

/* -------- 7. Dark mode toggle (persist in localStorage) -------- */
(() => {
  const key = "queenstel-dark";
  const root = document.documentElement;
  const toggle = document.getElementById("dark-toggle");

  function apply(isDark) {
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }

  // init from preference
  const saved = localStorage.getItem(key);
  if (saved !== null) apply(saved === "1");
  else {
    // fallback to OS preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(prefersDark);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem(key, isDark ? "1" : "0");
      // small logo pulse to indicate change
      const logoEl = document.querySelector(".logo");
      if (logoEl) { logoEl.classList.add("pulse"); setTimeout(()=>logoEl.classList.remove("pulse"), 900); }
    });
  }
})();

/* -------- 8. Small helper: lazy-load images (native) -------- */
(() => {
  document.querySelectorAll("img").forEach(img => {
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
  });
})();
