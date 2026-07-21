import { router } from "../routes/router";

export function logout() {
    const logoutBtn = document.getElementById("logout-btn");
    

    if (!logoutBtn) return;

    logoutBtn.addEventListener("click", () => {
        

      
        localStorage.removeItem("user");

        
        history.pushState({}, "", "/");

        router();
    });
}