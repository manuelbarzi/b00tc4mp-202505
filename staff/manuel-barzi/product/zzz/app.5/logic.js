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

    user = { name, email, username, password }

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
}

const logic = {
    registerUser,
    loginUser
}