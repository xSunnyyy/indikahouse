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
