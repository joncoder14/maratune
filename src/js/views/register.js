import "../../styles/global.css";
import "../../styles/register.css";
import "../../styles/input.css";
import logoHorizontal from "../../assets/logo/logo-horizontal.png";
import { registerUser } from "../services/userService";
import { router } from "../routes/router";

export function registerView() {
  return `
        <div class="register-container">

            

            <div class="left-panel">

            <img src="/src/assets/logo/logo-horizontal.png" class="logo" alt="Maratune Logo">

                <div class="contenido">

                    <h1>
                        JOIN THE <br>
                        <span class="verde">RUNNING</span><br>
                        <span class="amarillo">COMMUNITY</span>
                    </h1>

                    <div class="linea"></div>

                    <p>
                        Create your account and discover the best events,
                        connect with other runners, and take your passion
                        for running to the next level.
                    </p>

                </div>

            </div>

            

            <div class="right-panel">

                <a href="../" data-link class="volver">
                    <i class="fa-solid fa-arrow-left"></i>
                    Back to Home
                </a>

                <h2>Create Your Account</h2>

                <p class="subtitulo">
                    Join the running community
                </p>

                <form id="form-register">

                    <div class="row">

                        <div class="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your full name" name="name" required>
                        </div>
                         <div class="input-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your Last name" name="lastname" required>
                        </div>

                           <div class="input-group">
                          
                           <label>Phone Number</label>
                          <input type="tel" placeholder="300 123 4567" name="phone_number"  required>
                        </div>
                        

                        <div class="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email address" name="email" required>
                        </div>

                         <div class="input-group">
                            <label>city</label>
                            <input type="text" placeholder="Enter your city" name="city" required>
                        </div>

                    </div>

                    <div class="row">

                        <div class="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create a password" name="password" required>
                        </div>

                        <div class="input-group">
                            <label>NIT</label>
                            <input type="number" placeholder="900123456" name="nit" required>
                        </div>

                    </div>

                    <h3>Select Your Role</h3>

                    <div class="roles">

                        <label class="rol">

                            <input type="radio" name="role" value="runner">

                            <h4>Runner</h4>

                            <p>I participate in races and events</p>

                        </label>

                        <label class="rol">

                            <input type="radio" name="role" value="organizer">

                            <h4>Organizer</h4>

                            <p>I organize sports events</p>

                        </label>

                        <label class="rol">

                            <input type="radio" name="role" value="sponsor">

                            <h4>Sponsor</h4>

                            <p>I support sports events</p>

                        </label>

                    </div>

                    <div class="terminos">

                        <input type="checkbox">

                        <span>
                            I accept the
                            <a href="#">Terms and Conditions</a>
                            and the
                            <a href="#">Privacy Policy</a>
                        </span>

                    </div>

                    <button type="submit" id="register-btn">

                        Create Account

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                    <p class="login">

                        Already have an account?

                        <a href="/">Sign in here</a>

                    </p>

                </form>

            </div>

        </div>
`;
}

export function createUser() {
  const formRegiste = document.getElementById("form-register");
  formRegiste.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, lastname, phone_number, email, city, password, nit, role } =
      Object.fromEntries(new FormData(formRegiste));
    const userCreated = await registerUser(
      role,
      name,
      lastname,
      email,
      phone_number,
      password,
      nit,
      city,
    );
    console.log(userCreated);
    if (userCreated) {
      alert("register");
      history.pushState({}, "", "/");

      router();
    }
  });
}
