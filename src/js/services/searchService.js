export function searchEvents(events, text, status = "all") {
  const search = text.trim().toLowerCase();

  return events.filter((event) => {
   
    const matchText =
      event.name.toLowerCase().includes(search) ||
      event.city.toLowerCase().includes(search);

    
    const matchStatus =
      status === "all" ||
      event.status.toLowerCase() === status.toLowerCase();

    return matchText && matchStatus;
  });
}