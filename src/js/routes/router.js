import { loginView, loginEvents } from "../views/login"
import { organizerView, organizerEvents } from "../views/organizer"
import { runnerView, runnerEvents } from "../views/runner"
import { sponsorView, sponsorEvents } from "../views/sponsor"
import { myEventsView, myEventsEvents } from "../views/myEvents"
import { registerView } from "../views/register"


const routes = {
    "/": { path: loginView, events: loginEvents },

    "/register": { path: registerView },

    "/organizer": { path: organizerView, events: organizerEvents },

    "/runner": { path: runnerView, events: runnerEvents },

    "/sponsor": { path: sponsorView, events: sponsorEvents },

    "/my-events" : { path: myEventsView, events: myEventsEvents }
}

export function router(){
    const path = window.location.pathname
    const route = routes[path]

    if (!route){
        document.querySelector('#app').innerHTML = "<h1>404</h1>"
        return
    }

    document.querySelector('#app').innerHTML = route.path()

    setTimeout(() => {
        route.events()

    }, 500)

    
}

window.addEventListener("popstate", router)