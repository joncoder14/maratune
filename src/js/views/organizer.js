import { getEvents } from "../services/eventService";
import "../../styles/global.css";
import "../../styles/input.css";
import "../../styles/dashboard-events.css";
import { logout } from "../services/logoutService";
import { router } from "../routes/router";
import { newEvent } from "../services/eventService";
import { dom } from "@fortawesome/fontawesome-svg-core";

export function organizerView() {
  return `<nav>
        <img src="src/assets/logo/logo-horizontal.png" alt="" width="150px">

        <ul>
            <li><a id="events-link" href="/organizer" data-link>Events</a></li>
            <li><a id="my-events-link" href="/my-events" data-link>My events</a></li>
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

            <div id="form-container-father" class="hidden">
                <div id="form-container">
                    <form id="form-create" action="">
                        <div>
                            <label for="name">Name:</label>
                            <input name="nameEvent" type="text" required>
                        </div>

                        <div>
                            <label for="description">Description:</label>
                            <input name="description" type="text" required>
                        </div>

                        <div>
                            <label for="date">Date event:</label>
                            <input name="date_event" type="date" required>
                        </div>
                         <div>
                            <label for="date_time">hour:</label>
                            <input name="date_time" type="time" required>
                        </div>

                        <div>
                            <label for="city">City:</label>
                            <input name="city" type="text" required>
                        </div>

                        <div>
                            <label for="cups">Cups:</label>
                            <input name="cups" type="number" required>
                        </div>

                        <div>
                            <label for="status">Status:</label>
                            <select name="statusEvent" id="status" required>
                                <option value="open">Open</option>
                                <option value="close">Close</option>
                            </select>
                        </div>

                        <div id="form-btns">
                            <button id="done-btn" type="submit">Done</button>
                            <button id="cancel-btn"type="button">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <section id="viewDetails">

            </section>
            
            
            
            
        </main>
    </div>
    `;
}

export async function createEvent() {
  const eventContainer = document.getElementById("events-container");
  const donebtn = document.getElementById("done-btn");
  const user = JSON.parse(localStorage.getItem("user"));
  const createBtn = document.getElementById("create-btn");
  const id_event_organizer = user.user.id;
  const formCreate = document.getElementById("form-create");
  const containerFather = document.getElementById("form-container-father");
  const formContainer = document.getElementById("form-container");
  console.log(user.user.id);

  formCreate.addEventListener("submit", async (e) => {
    e.preventDefault();

    const {
      nameEvent,
      description,
      date_event,
      date_time,
      city,
      cups,
      statusEvent,
    } = Object.fromEntries(new FormData(formCreate));

    const created = await newEvent(
      nameEvent,
      description,
      date_event,
      date_time,
      city,
      cups,
      statusEvent,
      id_event_organizer,
    );
    if (created) {
      containerFather.classList.add("hidden");
      alert("created!");
      history.pushState({}, "", "/organizer");

      router();
    }
  });

  createBtn.addEventListener("click", () => {
    containerFather.classList.remove("hidden");
  });
  const cancelBtn = document.getElementById("cancel-btn");
  cancelBtn.addEventListener("click", () => {
    containerFather.classList.add("hidden");
  });
}
export async function organizerEvents() {
  const eventContainer = document.getElementById("event-container");

  const events = await getEvents();

  console.log(events);

  await createEvent();

  events.forEach((event) => {
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
                        <button data-id=${event.id_event} id="details-btn" class="details">View details</button>
                    
                    
                    </div>
    
    
                  
                </article>`;
  });
  viewDetails(events);
  logout();
}

function viewDetails(events) {
  const viewDetails = document.getElementById("viewDetails");
  const btnsDetails = document.querySelectorAll(".details");
  btnsDetails.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idDetails = Number(btn.dataset.id);
      const selectedEvent = events.find((e) => e.id_event === idDetails);

      if (selectedEvent) {
        console.log("entro al if");

        viewDetails.innerHTML = `
                    <div class="modal">
                        <div class="modal-content">
                            <h2>${selectedEvent.name}</h2>
                            <p><strong>Description:</strong> ${selectedEvent.description}</p>
                            <p><strong>City:</strong> ${selectedEvent.city}</p>
                            <p><strong>Date:</strong> ${selectedEvent.date_event}</p>
                            <p><strong>Hour:</strong> ${selectedEvent.date_time}</p>
                            <p><strong>Cups:</strong> ${selectedEvent.cups}</p>
                            <p><strong>Status:</strong> ${selectedEvent.status}</p>

                            <button id="close-modal">Close</button>
                        </div>
                    </div>
                `;

        document.getElementById("close-modal").addEventListener("click", () => {
          viewDetails.innerHTML = "";
        });
      }
    });
  });
}
