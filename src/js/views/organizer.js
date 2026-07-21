import { getEvents, viewDetails } from "../services/eventService.js";
import { newEvent } from "../services/eventService.js";
import { searchEvents } from "../services/searchService.js";
import "../../styles/global.css";
import "../../styles/input.css";
import "../../styles/dashboard-events.css";
import { logout } from "../services/logoutService.js";
import { router } from "../routes/router.js";
import { dom } from "@fortawesome/fontawesome-svg-core";


export function organizerView() {
  return `
    <nav>
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
                <div>
                    <h1>Search events</h1>
                    <br>
                    <p>Find your next race and push your limits.</p>
                </div>

                <button id="create-btn">Create event</button>
            </header>

            <section class="search-section">

                <input
                    id="search-input"
                    type="text"
                    placeholder="Search an event">

                <select id="search-status">
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                </select>

                <button
                    id="search-btn"
                    class="search-btn">
                    Search
                </button>

            </section>

            <h2>Upcoming events</h2>

            <section id="event-container" class="events-grid">

            </section>

            <div id="form-container-father" class="hidden">

                <div id="form-container">

                    <form id="form-create">

                        <div>
                            <label>Name:</label>
                            <input name="nameEvent" type="text" required>
                        </div>

                        <div>
                            <label>Description:</label>
                            <input name="description" type="text" required>
                        </div>

                        <div>
                            <label>Date event:</label>
                            <input name="date_event" type="date" required>
                        </div>

                        <div>
                            <label>Hour:</label>
                            <input name="date_time" type="time" required>
                        </div>

                        <div>
                            <label>City:</label>
                            <input name="city" type="text" required>
                        </div>

                        <div>
                            <label>Cups:</label>
                            <input name="cups" type="number" required>
                        </div>

                        <div>
                            <label>Status:</label>

                            <select name="statusEvent" required>
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

            <section id="viewDetails">

            </section>

        </main>

    </div>
    `;
}

export async function createEvent() {

  const user = JSON.parse(localStorage.getItem("user"));

  const createBtn = document.getElementById("create-btn");
  const formCreate = document.getElementById("form-create");
  const containerFather = document.getElementById("form-container-father");
  const cancelBtn = document.getElementById("cancel-btn");

  const id_event_organizer = user.user.id;

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

      alert("Event created successfully!");

      history.pushState({}, "", "/organizer");

      router();

    }

  });

  createBtn.addEventListener("click", () => {

    containerFather.classList.remove("hidden");

  });

  cancelBtn.addEventListener("click", () => {

    containerFather.classList.add("hidden");

  });

}
export async function organizerEvents() {

  const eventContainer = document.getElementById("event-container");

  const input = document.getElementById("search-input");
  const status = document.getElementById("search-status");
  const searchBtn = document.getElementById("search-btn");

  const events = await getEvents();

  await createEvent();

  function renderEvents(eventsList) {

    eventContainer.innerHTML = "";

    eventsList.forEach((event) => {

      eventContainer.innerHTML += `
        <article class="card-color">

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
                src="../../assets/logo/only-logo.png"
                width="200px"
                height="120px">
            </div>

          </div>

          <div class="buttons">

            <button id="suscribe-btn">
              Suscribe
            </button>

            <button
              data-id="${event.id_event}"
              class="details">
              View details
            </button>

          </div>

        </article>
      `;

    });

    viewDetails(eventsList);

  }


  renderEvents(events);

  
  searchBtn.addEventListener("click", () => {

    const filteredEvents = searchEvents(
      events,
      input.value,
      status.value
    );

    renderEvents(filteredEvents);

  });

  logout();

}

