import { loginView, loginEvents } from "../views/login";
import { organizerView, organizerEvents } from "../views/organizer";
import { runnerView, runnerEvents } from "../views/runner";
import { sponsorView, sponsorEvents } from "../views/sponsor";
import {
  myEventsView,
  myEventsEvents,
  renderEvents,
  editEvent,
} from "../views/myEvents";
import { registerView } from "../views/register";

const routes = {
  "/": { path: loginView, events: loginEvents },

  "/register": { path: registerView },

  "/organizer": { path: organizerView, events: organizerEvents },

  "/runner": { path: runnerView, events: runnerEvents },

  "/sponsor": { path: sponsorView, events: sponsorEvents },

  "/my-events": {
    path: myEventsView,
    events: myEventsEvents,
    renderEvents,
    editEvent,
  },
};

export async function router() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    document.querySelector("#app").innerHTML = "<h1>404</h1>";
    return;
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const protectedRoutes = ["/runner", "/organizer", "/sponsor", "/my-events"];

  if (protectedRoutes.includes(path) && !user) {
    history.pushState({}, "", "/");
    return router();
  }

  document.querySelector("#app").innerHTML = route.path();

  route.events?.();

  await route.renderEvents?.();

  route.editEvent?.();
}

window.addEventListener("popstate", router);
