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
