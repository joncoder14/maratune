import "../../styles/global.css"
import "../../styles/login.css"
import "../../styles/input.css"
import { getData } from "../services/userService"
import { organizerView } from "./organizer"
import { router } from "../routes/router"


export function loginView(){
    return `<main>

    
    <div class="login-container">

        <section class="hero-section">
            <div class="hero-overlay">
                <h1 id="h1-connect" class="text-overlay" >CONNECT.</h1>
                <h1 id="h1-run" class="text-overlay">RUN.</h1>
                <h1 id="h1-yourself" class="text-overlay">SURPASS YOURSELF</h1>
                <p>Join the running community and find the best events in your city.</p>
            </div>
        </section>

        <section class="login-section">
            <div id="welcome">
                <h1>¡Welcome!</h1><br>
                <p>Log in to continue.</p>
            </div>

            <form action="" id="login">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="example@mail.com" required>
                </div>
                
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="********" required>

                    <div id="incorrect-data">
                    <!-- <p>Incorrect email or password</p> -->
                    </div>
                </div>

                <button id="login-btn" type="submit">Log in</button>

                <div class="division"><span>or continue with</span></div>

                <div id="google"><img src="/src/assets/icons/google.png" width="25px"></div>        <!--agregarle la ruta-->
            </form>

            <div id="register">
            <p>Don't you have an account?</p><a href="">Sign up here</a>
            </div>
        </section>

    </div>

  </main>`
}

export function loginEvents(){

    const form = document.querySelector('#login')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        const users = await getData()
        
        const user = users.find(user => {
            return user.email === email && user.password === password
        })

        if (!user){
            alert("Credenciales incorrectas")
            return
        } else if (user.role === "runner"){
            history.pushState({}, "", "/runner")
        } else if (user.role === "organizer"){
            history.pushState({}, "", "/organizer")
        } else if (user.role === "sponsor"){
            history.pushState({}, "", "/sponsor")
        }

        localStorage.setItem("user", JSON.stringify(user))

        router()

        

}
)


}