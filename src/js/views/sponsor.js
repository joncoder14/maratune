export function sponsorView(){
    const user = JSON.parse(localStorage.getItem("user"))

    return `
    <h1>Hello ${user.name}, you are a sponsor<h1>
    `
}

export function sponsorEvents(){
    console.log("sponsor cargado");
    
}