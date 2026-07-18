import "../../styles/global.css";
import "../../styles/dashboard-events.css"
import { router } from "../routes/router";
import { getEvents } from "../services/eventService";
import { logout } from "../services/logoutService";

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

            <div id="form-container-father">
                <div id="form-container">
                    <form id="form-edit" action="">
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
    `;
}

export async function renderEvents() {
  const eventContainer = document.getElementById("event-container")
  const user = JSON.parse(localStorage.getItem("user"))
  const events = await getEvents()

  events.forEach((event) => {
    if (user.user.id === event.id_event_organizer) {
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
        
                            <button data-id=${event.id_event} class="edit-btn">edit</button>
                            <button class="delete-btn">delete details</button>
                        
                        
                        </div>
        
        
                      
                    </article>`;
    }
  });
}

let id = null;
export function editEvent() {
  const btnsEdit = document.querySelectorAll(".edit-btn")
  const formEdit = document.getElementById('form-edit')
  let formContainer = undefined
  let containerFather = undefined
  

  btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async () => {
        id = btn.dataset.id

        const events = await getEvents()
        const event = events.find(e => e.id_event == id)

        formEdit.nameEvent.value = event.name
        formEdit.description.value = event.description
        formEdit.date_event.value = event.date_event
        formEdit.date_time.value = event.date_time
        formEdit.city.value = event.city
        formEdit.cups.value = event.cups
        formEdit.statusEvent.value = event.status



        formContainer = document.getElementById('form-container')
        containerFather = document.getElementById('form-container-father')

        formEdit.addEventListener("submit", (e) => e.preventDefault())

        if (formContainer.style.display === 'none'){
            formContainer.style.display = 'flex'
            containerFather.style.display = 'flex'
        } else {
            formContainer.style.display = 'none'
            containerFather.style.display = 'none'
        }

        console.log(id)
    })
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

export function myEventsEvents() {
  console.log("My Events cargado");

  const myEvents = document.getElementById("my-events-link");

  myEvents.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("funcion my events");

    history.pushState({}, "", "/my-events");

    router();
  });
  const eventNavbar = document.getElementById("events-link");

  eventNavbar.addEventListener("click", (e) => {
    e.preventDefault();

    history.pushState({}, "", "/organizer");

    router();
  });
  logout()
}
