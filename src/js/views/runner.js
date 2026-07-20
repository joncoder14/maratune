import { getEvents } from "../services/eventService"
import "../../styles/global.css"
import "../../styles/input.css"
import "../../styles/dashboard-events.css"
import { router } from "../routes/router"
import { logout } from "../services/logoutService";
import { viewDetails } from "../services/eventService"

export function runnerView(){
    // const user = JSON.parse(localStorage.getItem("user"))
    return `
    <nav>
        <img id="logo" src="src/assets/logo/logo-horizontal.png" alt="" width="150px">

        <ul>
            <li><a href="/runner" id="events-link">Events</a></li>
        </ul>

        <button id="logout-btn">Log out</button>
    </nav>    
    
    <div class="dashboard">

        <main class="events-container">

            <header class="events-header">
                <div class="">
                    <h1>Search events</h1><br>
                    <p>Find your next race and push your limits.</p>
                </div>
            </header>

            

            <section class="search-section">
                <input class="" type="text" placeholder="search a event">
                <select name="search-status" id="search-status">
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                </select>
                <button class="search-btn">Search</button>
            </section>

            <h2>Upcoming events</h2>
            
            <section id="event-container" class="events-grid">

            
            </section>

            <section id="viewDetails">

            </section>
            
            
            
            
        </main>
    </div>
    `
}

export async function runnerEvents(){
    console.log("runner cargado");
    const eventContainer = document.getElementById("event-container")
    
        const events = await getEvents() 
    
        events.forEach(event => {
            eventContainer.innerHTML += `<article class="card-color">
    
                    <div class="event-card" >
                    <span id="status-on-card" class="status ${event.status}">${event.status}</span>
    
    
                        <div class="event-info">
                            <h3>${event.name}</h3>
                            <p><i id="icon-location" class="fa-solid fa-location-dot"></i> ${event.city}</p>
                            <p><i id="icon-schedule" class="fa-regular fa-calendar"></i> ${event.date_event}</p>
                            <p><i id="icon-dollar" class="fa-solid fa-dollar-sign"></i> ${event.cups}</p>
                            
                        </div>
                        <div class="container-img">
                            <img src="src/assets/logo/only-logo.png" width="200px" height="120px">
                            
    
                        </div>
                    </div>
                    <div class="buttons">
    
                        <button id="suscribe-btn">Suscribe</button>
                        <button data-id=${event.id_event} id="details-btn" class="details">View details</button>
                    
                    
                    </div>
    
    
                  
                </article>`
        });
        viewDetails(events);
        logout();
}
        

 