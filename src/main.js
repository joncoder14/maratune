import { router } from "./js/routes/router.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
