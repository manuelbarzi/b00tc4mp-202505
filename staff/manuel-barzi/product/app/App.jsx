import { useState, useEffect } from 'react'

import { Landing } from './view/landing'
import { Register } from './view/register'
import { Login } from './view/login'
import { Home } from './view/Home'

import { logic } from './logic'

export const App = () => {
    const [view, setView] = useState('landing')

    useEffect(() => {
        try {
            const loggedIn = logic.isUserLoggedIn()

            if (loggedIn) setView('home')
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    })

    const handleRegisterClicked = () => setView('register')

    const handleLoginClicked = () => setView('login')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedIn = () => setView('home')

    const handleUserLoggedOut = () => setView('login')

    console.log('App -> render')

    return <>
        {view === 'landing' && <Landing onRegisterClicked={handleRegisterClicked} onLoginClicked={handleLoginClicked} />}

        {view === 'register' && <Register onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered} />}

        {view === 'login' && <Login onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn} />}

        {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
    </>
}
