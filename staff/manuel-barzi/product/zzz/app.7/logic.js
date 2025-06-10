let logic

{
    const registerUser = (name, email, username, password) => {
        // TODO add regex validations

        if (typeof name !== 'string') throw new TypeError('invalid name type')
        if (!name.length) throw new RangeError('invalid name length')

        if (typeof email !== 'string') throw new TypeError('invalid email type')
        if (!email.length) throw new RangeError('invalid email length')

        if (typeof username !== 'string') throw new TypeError('invalid username type')
        if (!username.length) throw new RangeError('invalid username length')

        if (typeof password !== 'string') throw new TypeError('invalid password type')
        if (!password.length) throw new RangeError('invalid password length')

        const users = data.getUsers()

        let user = users.find(user => user.email === email || user.username === username)

        if (user) throw new Error('user already exists')

        const id = parseInt((Date.now() + Math.random()).toString().replace('.', '')).toString(36)

        user = { id, name, email, username, password }

        users.push(user)

        data.setUsers(users)
    }

    const loginUser = (username, password) => {
        // TODO add regex validations

        if (typeof username !== 'string') throw new TypeError('invalid username type')
        if (!username.length) throw new RangeError('invalid username length')

        if (typeof password !== 'string') throw new TypeError('invalid password type')
        if (!password.length) throw new RangeError('invalid password length')

        const users = data.getUsers()

        const user = users.find(user => user.username === username)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setUserId(user.id)
    }

    const getUserInfo = () => {
        const userId = data.getUserId()

        const users = data.getUsers()

        const user = users.find(user => user.id === userId)

        if (!user) throw Error('user not found')

        delete user.password

        return user
    }

    const isUserLoggedIn = () => !!data.getUserId()

    const logoutUser = () => data.removeUserId()


    const createPost = (image, text) => {
        if (typeof image !== 'string') throw new TypeError('invalid image type')
        if (typeof text !== 'string') throw new TypeError('invalid text type')

        const userId = data.getUserId()

        const users = data.getUsers()

        const user = users.find(user => user.id === userId)

        if (!user) throw new Error('user not found')

        const id = parseInt((Date.now() + Math.random()).toString().replace('.', '')).toString(36)

        const post = {
            id: id,
            author: user.id,
            image,
            text,
            date: new Date().toISOString()
        }

        const posts = data.getPosts()

        posts.push(post)

        data.setPosts(posts)
    }

    const getPosts = () => {
        const userId = data.getUserId()

        const users = data.getUsers()

        const user = users.find(user => user.id === userId)

        if (!user) throw new Error('user not found')

        const posts = data.getPosts()

        posts.reverse()

        return posts
    }

    logic = {
        registerUser,
        loginUser,
        getUserInfo,
        isUserLoggedIn,
        logoutUser,

        createPost,
        getPosts
    }
}