import { router } from "./js/routes/router";

document.addEventListener("DOMContentLoaded", () => {
  router();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");

  if (!link) return;

  e.preventDefault();

  history.pushState({}, "", link.href);
  router();
});
