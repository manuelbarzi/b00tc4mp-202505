import { logic } from '../logic'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const handleRegisterClicked = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            form.reset()

            onUserLoggedIn()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Login -> render')

    return <div>
        <h1>Login</h1>

        <form action="" onSubmit={handleLoginSubmit}>
            <div className="flex flex-col m-y-10">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>

            <div className="flex flex-col m-y-10">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>

            <div className="flex justify-end">
                <button type="reset">Clear</button>
                <button type="submit">Login</button>
            </div>
        </form>

        <a href="" onClick={handleRegisterClicked}>Register</a>
    </div>
}