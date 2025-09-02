import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router'

import { useRole } from '../hooks'

import { logic } from '../logic'

import { Posts } from './Posts'
import { SavedPosts } from './SavedPosts'
import { ArchivedPosts } from './ArchivedPosts'
import { LikedPosts } from './LikedPosts'
import { Search } from './Search'
import { NewPost } from './NewPost'

export const Home = ({ onUserLoggedOut, alert }) => {
    const [name, setName] = useState(null)

    const role = useRole()

    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.getUserInfo()
                .then(user => setName(user.name))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleNewPostClick = () => navigate('/new-post')

    const handleNewPostCancelled = () => navigate('/')

    const handleNewPostCreated = () => navigate('/')

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Home -> render')

    return <div>
        <header className="bg-white fixed top-0 w-full">
            <nav className="flex justify-between items-center p-4">
                <h1><Link to="/">App</Link></h1>

                <p className="flex items-center gap-2 border-2 p-2">Hello, {name}! <img className="w-10" src={`/images/avatars/${role}.jpg`} /></p>

                <button type="button" onClick={handleLogoutClick}>Logout</button>
                <Link to="/saved-posts">Saved</Link>
                <Link to="/archived-posts">Archived</Link>
                <Link to="/liked-posts">Liked</Link>
                <Link to="/search-posts">Search</Link>
            </nav>
        </header>

        <div className="py-15">
            <Routes>
                <Route path="/" element={<Posts alert={alert} />} />
                <Route path="/new-post" element={<NewPost onCreated={handleNewPostCreated} onCancelled={handleNewPostCancelled} alert={alert} />} />
                <Route path="/saved-posts" element={<SavedPosts alert={alert} />} />
                <Route path="/archived-posts" element={<ArchivedPosts alert={alert} />} />
                <Route path="/liked-posts" element={<LikedPosts alert={alert} />} />
                <Route path="/search-posts" element={<Search alert={alert} />} />
            </Routes>
        </div>

        <footer className="text-center fixed bottom-0 w-full bg-white">
            <button className="border-1 px-2" type="button" onClick={handleNewPostClick}>+</button>
        </footer>
    </div>
}