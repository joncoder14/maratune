
export async function getEvents() {

    try {
        const response = await fetch('https://maratune.onrender.com/events')
        return  response.json()
    } catch (error) {
        console.log(Error, "error")
    }
    
}