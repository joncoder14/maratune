import "../../styles/global.css"
import "../../styles/register.css"
import "../../styles/input.css"
import logoHorizontal from "../../assets/logo/logo-horizontal.png"


export function registerView() {
    return `
        <div class="register-container">

            <!-- Left Panel -->

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

            <!-- Right Panel -->

            <div class="right-panel">

                <a href="../index.html" class="volver">
                    <i class="fa-solid fa-arrow-left"></i>
                    Back to Home
                </a>

                <h2>Create Your Account</h2>

                <p class="subtitulo">
                    Join the running community
                </p>

                <form>

                    <div class="row">

                        <div class="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name">
                        </div>

                        <div class="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email address">
                        </div>

                    </div>

                    <div class="row">

                        <div class="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create a password">
                        </div>

                        <div class="input-group">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Repeat your password">
                        </div>

                    </div>

                    <h3>Select Your Role</h3>

                    <div class="roles">

                        <label class="rol">

                            <input type="radio" name="role">

                            <h4>Runner</h4>

                            <p>I participate in races and events</p>

                        </label>

                        <label class="rol">

                            <input type="radio" name="role">

                            <h4>Organizer</h4>

                            <p>I organize sports events</p>

                        </label>

                        <label class="rol">

                            <input type="radio" name="role">

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
`
}