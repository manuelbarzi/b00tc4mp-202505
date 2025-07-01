import { logic } from '../logic'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        // const nameInput = form.querySelector('#name')
        // const nameInput = form.name
        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)

            form.reset()

            onUserRegistered()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Register -> render')

    return <div>
        <h1>Register</h1>

        <form action="" onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col m-y-10">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>

            <div className="flex flex-col m-y-10">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" />
            </div>

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
                <button type="submit">Register</button>
            </div>
        </form>

        <a href="" onClick={handleLoginClick}>Login</a>
    </div>
}