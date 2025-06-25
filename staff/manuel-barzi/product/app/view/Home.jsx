const { useState, useEffect } = React

const Home = () => {
    const [name, setName] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            const user = logic.getUserInfo()

            setName(user.name)

            const posts = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    console.debug('Home -> render')

    return <div>
        <h1>App</h1>
        <p className="text-center">Hello, {name}!</p>
        <button type="button">Logout</button>
        <button type="button">+</button>
        <div>
            <ul className="list-style-none p-0">
                {posts.map(post => <li>
                    <h3>{post.author.username}</h3>
                    <img
                        className="w-full"
                        src={post.image}
                    />
                    <p>{post.text}</p>
                    <time>{post.date}</time>
                    {post.own && <button type="button">🗑️</button>}
                </li>)}
            </ul>
        </div>

        <div>
            <h2>New post</h2>
            <form>
                <div className="flex flex-col m-y-10">
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url" />
                </div>
                <div className="flex flex-col m-y-10">
                    <label htmlFor="text">Text</label>
                    <input id="text" type="text" />
                </div>
                <div className="flex justify-end">
                    <button type="button">Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
}