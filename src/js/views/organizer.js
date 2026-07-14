export function organizerView(){
    const user = JSON.parse(localStorage.getItem("user"))

    return `
    <h1>Hello ${user.name}, you are a Organizer<h1>
    `
}

export function organizerEvents(){
    console.log("organizer cargado");
    
}