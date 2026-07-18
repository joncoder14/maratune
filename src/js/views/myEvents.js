import "../../styles/global.css"
import { router } from "../routes/router";
import { getEvents } from "../services/eventService";

export function myEventsView() {
    return `
        <nav>
            <img id="logo" src="src/assets/logo/logo-horizontal.png" width="150">

            <ul>
                <li><a href="" id="events-link">Events</a></li>
                <li><a href="" id="my-events-link">My events</a></li>
            </ul>

            <button id="logout-btn">Log out</button>
        </nav>

         <div class="dashboard">

        <main class="events-container">



            <h2>My events</h2>
            
            <section id="event-container" class="events-grid">

            
            </section>
            
            
            
            
            
            </main>
            </div>
    `
}

export async function renderEvents(){
    const eventContainer = document.getElementById("event-container")
    const user = JSON.parse(localStorage.getItem("user"))
    const events = await getEvents() 
      
            events.forEach(event => {
              
                if (user.user.id === event.id_event_organizer){
                        eventContainer.innerHTML += `<article class="card-color">
        
                        <div class="event-card" >
        
        
                            <div class="event-info">
                                <h3>${event.name}</h3>
                                <p>${event.city}</p>
                                <p>${event.date_event}</p>
                                <p>${event.cups}</p>
                                
                            </div>
                            <div class="container-img">
                                <img src="src/assets/logo/only-logo.png" width="200px" height="120px">
                                
        
                            </div>
                        </div>
                        <div class="buttons">
        
                            <button id="suscribe-btn">Suscribe</button>
                            <button id="details-btn">View details</button>
                        
                        
                        </div>
        
        
                      
                    </article>`
            };
                }

            )
            
}

export function myEventsEvents() {
    console.log("My Events cargado");

    const myEvents = document.getElementById("my-events-link")

        myEvents.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("funcion my events");
            

            history.pushState({}, "", "/my-events")
            
            router()
        })
            const eventNavbar = document.getElementById("events-link")
            
                    eventNavbar.addEventListener("click", (e) => {
                        e.preventDefault()
            
                        history.pushState({}, "", "/organizer")
            
                        router()
                    })
}