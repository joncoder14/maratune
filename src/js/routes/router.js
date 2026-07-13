import { loginView, loginEvents } from "../views/login"
import { organizerView, organizerEvents } from "../views/organizer"
import { runnerView, runnerEvents } from "../views/runner"
import { sponsorView, sponsorEvents } from "../views/sponsor"


const routes = {
    "/": { path: loginView, events: loginEvents },

    "/organizer": { path: organizerView, events: organizerEvents },

    "/runner": { path: runnerView, events: runnerEvents },

    "/sponsor": { path: sponsorView, events: sponsorEvents }
}

export function router(){
    const path = window.location.pathname
    const route = routes[path]

    if (!route){
        document.querySelector('#app').innerHTML = "<h1>404</h1>"
        return
    }

    document.querySelector('#app').innerHTML = route.path()

    route.events()
}

window.addEventListener("popstate", router)