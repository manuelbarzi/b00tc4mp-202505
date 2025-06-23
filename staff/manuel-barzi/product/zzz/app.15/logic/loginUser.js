const loginUser = (username, password) => {
    // TODO add regex validations

    if (typeof username !== 'string') throw new TypeError('invalid username type')
    if (!username.length) throw new RangeError('invalid username length')

    if (typeof password !== 'string') throw new TypeError('invalid password type')
    if (!password.length) throw new RangeError('invalid password length')

    const users = data.loadUsers()

    const user = users.find(user => user.username === username)

    if (!user) throw new Error('user not found')

    if (user.password !== password) throw new Error('wrong password')

    data.saveUserId(user.id)
}