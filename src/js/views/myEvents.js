import "../../styles/global.css";
import "../../styles/dashboard-events.css";
import { router } from "../routes/router.js";
import { getEvents, APIeditEvent, removeEvent } from "../services/eventService.js";
import { logout } from "../services/logoutService.js";

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

            <div id="form-container-father" class="hidden">
                <div id="form-container">
                    <form id="form-edit" action="">
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
                            <label for="status">Status:</label>
                            <select name="statusEvent" id="status" required>
                                <option value="open">Open</option>
                                <option value="close">Close</option>
                            </select>
                        </div>

                        <div id="form-btns">
                            <button id="done-btn" type="submit">Done</button>
                            <button id="cancel-btn" type="button">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            
            
            
            </main>
            </div>
      `;
}

export async function renderEvents() {
  const eventContainer = document.getElementById("event-container");
  const user = JSON.parse(localStorage.getItem("user"));
  const events = await getEvents();

  events.forEach((event) => {
    if (user.user.id === event.id_event_organizer) {
      eventContainer.innerHTML += `<article class="card-color">

                        <div class="event-card">

                          <span id="status-on-card" class="status ${event.status}">
                            ${event.status}
                          </span>

                          <div class="event-info">
                            <h3>${event.name}</h3>
                            <p><i id="icon-location" class="fa-solid fa-location-dot"></i> ${event.city}</p>
                            <p><i id="icon-schedule" class="fa-regular fa-calendar"></i> ${event.date_event}</p>
                            <p><i id="icon-people" class="fa-solid fa-people-group"></i> ${event.cups}</p>
                          </div>

                          <div class="container-img">
                            <img
                              src="src/assets/logo/only-logo.png"
                              width="200px"
                              height="120px">
                          </div>

                        </div>
                        <div class="buttons">
        
                            <button data-id=${event.id_event} class="edit-btn">edit</button>
                            <button data-id=${event.id_event} class="delete-btn">delete details</button>
                        
                        
                        </div>
        
        
                      
                    </article>`;
    }
  });
}

let id = null;
let idDelete = null;

export function deleteEvent() {
  const deletBtns = document.querySelectorAll(".delete-btn");
  deletBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      idDelete = btn.dataset.id;
      const evnetDeleted = await removeEvent(idDelete);
      if (evnetDeleted) {
        alert("deleted!");
        history.pushState({}, "", "/my-events");

        router();
      } else {
        alert("could not delete");
      }
    });
  });
}

export function editEvent() {
  const btnsEdit = document.querySelectorAll(".edit-btn");
  const formEdit = document.getElementById("form-edit");
  let formContainer = document.getElementById("form-container");
  let containerFather = document.getElementById("form-container-father");
  const btnDone = document.getElementById("done-btn");
  formEdit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { nameEvent, description, date_event, date_time, statusEvent } =
      Object.fromEntries(new FormData(formEdit));

    const eventEdited = await APIeditEvent(
      id,
      nameEvent,
      description,
      date_event,
      date_time,
      statusEvent,
    );
    if (eventEdited) {
      containerFather.classList.add("hidden");
      alert("edited!");
      history.pushState({}, "", "/my-events");

      router();
    }
  });

  btnsEdit.forEach((btn) => {
    btn.addEventListener("click", async () => {
      id = btn.dataset.id;

      const events = await getEvents()
      const event = events.find(e => e.id_event == id)

      formEdit.nameEvent.value = event.name
      formEdit.description.value = event.description
      formEdit.date_event.value = event.date_event
      formEdit.date_time.value = event.date_time
      formEdit.statusEvent.value = event.status


      containerFather.classList.remove("hidden");
    });
  });

  const cancelBtn = document.getElementById("cancel-btn");
  cancelBtn.addEventListener("click", () => {
    containerFather.classList.add("hidden");
  });
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
  logout();
}
