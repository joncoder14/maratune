import "../../styles/global.css"

export function myEventsView() {
    return `
        <nav>
            <img id="logo" src="src/assets/logo/logo-horizontal.png" width="150">

            <ul>
                <li><a href="/runner" id="events-link">Events</a></li>
                <li><a href="/runner/my-events" id="my-events-link">My events</a></li>
            </ul>

            <button id="logout-btn">Log out</button>
        </nav>

        <main class="events-container">
            <h1>My Events</h1>
            <p>Here you will see the events you have joined.</p>
        </main>
    `
}

export function myEventsEvents() {
    console.log("My Events cargado");
}