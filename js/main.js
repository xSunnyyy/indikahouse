// Replays the hero title's rise-in animation whenever the page becomes visible again
// (e.g. returning via back/forward cache), so the reveal doesn't feel "stuck".
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  document.querySelectorAll(".word").forEach((el) => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
});

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  };
  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth-scrolls same-page "#id" links (logo, menu sidebar nav) without
// adding the fragment to the URL bar or browser history.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = id ? document.getElementById(id) : document.body;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Highlights the menu sidebar link for whichever category is in view.
const menuSidebar = document.querySelector(".menu-sidebar");
if (menuSidebar) {
  const sidebarLinks = new Map(
    Array.from(menuSidebar.querySelectorAll("a")).map((a) => [a.getAttribute("href").slice(1), a])
  );
  const categories = document.querySelectorAll(".menu-category[id]");
  const setActive = (id) => {
    sidebarLinks.forEach((a) => a.classList.remove("active"));
    const link = sidebarLinks.get(id);
    if (link) link.classList.add("active");
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-15% 0px -70% 0px" }
  );
  categories.forEach((section) => observer.observe(section));
}
