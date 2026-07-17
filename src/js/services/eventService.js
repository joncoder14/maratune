
export async function getEvents() {

    try {
        const response = await fetch('https://maratune.onrender.com/events')
        return  response.json()
    } catch (error) {
        console.log(Error, "error")
    }
    
}

export async function newEvent(name,description,date_event,date_time,city,cups,status,id_event_organizer) {
    try {
        
        const response = await fetch('https://maratune.onrender.com/events', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                description,
                date_event,
                date_time,
                city,
                "cups":Number(cups),
                status,
                "id_event_organizer":Number(id_event_organizer)
            })
        })
        const data = await response.json()
        
    } catch (error) {
        console.log(Error, "error");        
    }
}