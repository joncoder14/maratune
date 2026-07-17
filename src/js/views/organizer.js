import { getEvents } from "../services/eventService"
import "../../styles/global.css"
import "../../styles/input.css"
import "../../styles/dashboard-events.css"
import { router } from "../routes/router"
import { newEvent } from "../services/eventService"
import { dom } from "@fortawesome/fontawesome-svg-core"

export function organizerView(){

    return `<nav>
        <img src="src/assets/logo/logo-horizontal.png" alt="" width="150px">

        <ul>
            <li><a id="events-link" href="/organizer">Events</a></li>
            <li><a id="my-events-link" href="/my-events">My events</a></li>
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

                <button id="create-btn">Create event</button>
            </header>

            

            <section class="search-section">
                <input class="" type="text" placeholder="search a event">
                <button class="search-btn">Search</button>
            </section>

            <h2>Upcoming events</h2>
            
            <section id="event-container" class="events-grid">

            
            </section>

            <div id="form-container-father">
                <div id="form-container">
                    <form id="form-create" action="">
                        <div>
                            <label for="name">Name:</label>
                            <input name="nameEvent" type="text">
                        </div>

                        <div>
                            <label for="description">Description:</label>
                            <input name="description" type="text">
                        </div>

                        <div>
                            <label for="date">Date event:</label>
                            <input name="date_event" type="date">
                        </div>
                         <div>
                            <label for="date_time">hour:</label>
                            <input name="date_time" >
                        </div>

                        <div>
                            <label for="city">City:</label>
                            <input name="city" type="text">
                        </div>

                        <div>
                            <label for="cups">Cups:</label>
                            <input name="cups" type="number">
                        </div>

                        <div>
                            <label for="status">Status:</label>
                            <select name="statusEvent" id="status">
                                <option value="open">Open</option>
                                <option value="close">Close</option>
                            </select>
                        </div>

                        <div id="form-btns">
                            <button id="done-btn" type="submit">Done</button>
                            <button id="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            
            
            
        </main>
    </div>
    `
}
 

export async function createEvent () {

    const eventContainer = document.getElementById("events-container")
    let formContainer = undefined
    let containerFather = undefined
    const donebtn = document.getElementById("done-btn");
    const user = JSON.parse(localStorage.getItem("user"))
    const createBtn = document.getElementById("create-btn") 
    const id_event_organizer = user.user.id
    const formCreate = document.getElementById("form-create")
    console.log(user.user.id);
    

    formCreate.addEventListener("submit",(e) => {
        e.preventDefault()
        donebtn.addEventListener("click",()=>{
            const{nameEvent,description,date_event,date_time,city,cups,statusEvent} = Object.fromEntries(new FormData(formCreate))
          
        console.log(nameEvent,description,date_event,date_time,city,cups,statusEvent);
        
        newEvent(nameEvent,description,date_event,date_time,city,cups,statusEvent,id_event_organizer)
        })
    })


    createBtn.addEventListener("click",() => {
     
        

        const formCreate = document.getElementById('form-create')
        formContainer = document.getElementById('form-container')
        containerFather = document.getElementById('form-container-father')

        formCreate.addEventListener("submit", (e) => e.preventDefault())

        if (formContainer.style.display === 'none'){
            formContainer.style.display = 'flex'
            containerFather.style.display = 'flex'
        } else {
            formContainer.style.display = 'none'
            containerFather.style.display = 'none'
        }

        
    })

    const cancelBtn = document.getElementById("cancel-btn")
    cancelBtn.addEventListener("click", (e) => {

        containerFather = document.getElementById('form-container-father')
        formContainer = document.getElementById('form-container')

        if (formContainer.style.display === 'none'){
            formContainer.style.display = 'flex'
            containerFather.style.display = 'flex'
        } else {
            formContainer.style.display = 'none'
            containerFather.style.display = 'none'
        }
    })
   
}

export async function organizerEvents(){
    const eventContainer = document.getElementById("event-container")
    
        const events = await getEvents() 

        console.log(events);
        
        await createEvent()

        events.forEach(event => {
           
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
        });

        
        }
    
 