import { router } from "../routes/router";

export function logout() {
    const logoutBtn = document.getElementById("logout-btn");
    

    if (!logoutBtn) return;

    logoutBtn.addEventListener("click", () => {
        

        // Elimina la sesión
        localStorage.removeItem("user");

        // Regresa al login
        history.pushState({}, "", "/");

        router();
    });
}