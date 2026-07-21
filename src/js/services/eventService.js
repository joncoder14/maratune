export async function getEvents() {
  try {
    const response = await fetch("https://maratune.onrender.com/events");
    return response.json();
  } catch (error) {
    console.log(Error, "error");
  }
}

export async function newEvent(
  name,
  description,
  date_event,
  date_time,
  city,
  cups,
  status,
  id_event_organizer,
) {
  try {
    const response = await fetch("https://maratune.onrender.com/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        date_event,
        date_time,
        city,
        cups: Number(cups),
        status,
        id_event_organizer: Number(id_event_organizer),
      }),
    });

    if (!response.ok) {
      throw new Error("Could not create event");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function APIeditEvent(
  event_id,
  name,
  description,
  date_event,
  date_time,
  status,
) {
  try {
    const response = await fetch(
      `https://maratune.onrender.com/events/${event_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          date_event,
          date_time,
          status,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Could not edit event");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(Error, "error");
  }
}

export async function removeEvent(event_id) {
  try {
    const response = await fetch(
      `https://maratune.onrender.com/events/${event_id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("could not delete the event");
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

export function viewDetails(events) {
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

        <div class="modal-header">
            <img src="src/assets/logo/only-logo.png" alt="Logo evento">

            <div>
                <h2>${selectedEvent.name}</h2>
                <span class="status ${selectedEvent.status}">${selectedEvent.status}</span>
            </div>
        </div>

        <hr>

        <div class="modal-body">

            <div class="detail-item">
                <span class="label">Description</span>
                <p>${selectedEvent.description}</p>
            </div>

            <div class="detail-item">
                <span class="label">City</span>
                <p>${selectedEvent.city}</p>
            </div>

            <div class="detail-item">
                <span class="label">Date</span>
                <p>${selectedEvent.date_event}</p>
            </div>

            <div class="detail-item">
                <span class="label">Hour</span>
                <p>${selectedEvent.date_time}</p>
            </div>

            <div class="detail-item">
                <span class="label">Cups</span>
                <p>${selectedEvent.cups}</p>
            </div>

        </div>

        <button id="close-modal">
            Close
        </button>

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
