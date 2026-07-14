export function runnerView(){
    const user = JSON.parse(localStorage.getItem("user"))

    return `
    <h1>Hello ${user.name}, you are a runner<h1>
    `
}

export function runnerEvents(){
    console.log("runner cargado");
    
}