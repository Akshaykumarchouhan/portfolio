/* Menu toggle for mobile */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Dark/Light theme with system preference and localStorage */
(function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = stored === "dark" || (stored !== "light" && prefersDark);
  if (shouldBeDark) document.body.classList.add("dark");
  else document.body.classList.remove("dark");
})();

document.getElementById("theme-toggle")?.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

/* Scroll-triggered reveal for sections */
(function initReveal() {
  const sections = document.querySelectorAll(".reveal");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
  );

  sections.forEach(function (el) {
    observer.observe(el);
  });
})();

/* Active nav link based on scroll position */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('.main-nav a[href^="index.html#"]');
  const sections = ["profile", "about", "experience", "projects", "achievements", "contact"];

  function setActive() {
    const scrollY = window.scrollY;
    let current = "profile";
    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (section && section.offsetTop - 120 <= scrollY) current = id;
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href") || "";
      const targetId = href.split("#")[1];
      link.classList.toggle("active", targetId === current);
    });
  }

  window.addEventListener("scroll", setActive);
  window.addEventListener("load", setActive);
})();

/* Back to top button visibility */
(function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  function onScroll() {
    if (window.scrollY > 400) btn.classList.add("visible");
    else btn.classList.remove("visible");
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
