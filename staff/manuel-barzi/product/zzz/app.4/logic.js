const registerUser = (name, email, username, password) => {
    // TODO validate inputs

    let user = users.find(user => user.email === email || user.username === username)

    if (user) throw new Error('user already exists')

    user = { name, email, username, password }

    users.push(user)
}

const loginUser = (username, password) => {
    // TODO validate inputs

    const user = users.find(user => user.username === username)

    if (!user) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong password')
}