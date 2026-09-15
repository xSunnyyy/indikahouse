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
