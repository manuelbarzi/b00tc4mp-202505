let userLoggedIn = false

try {
    userLoggedIn = logic.isUserLoggedIn()
} catch (error) {
    alert(error.message)
}

const body = document.body

const landing = document.createElement('div')

{
    const title = document.createElement('h1')
    const titleText = document.createTextNode('App')
    title.appendChild(titleText)

    landing.appendChild(title)

    const navigations = document.createElement('p')
    navigations.classList.add('text-center')

    const registerLink = document.createElement('a')
    registerLink.href = ""
    const registerLinkText = document.createTextNode('Register')
    registerLink.appendChild(registerLinkText)
    navigations.appendChild(registerLink)

    registerLink.addEventListener('click', event => {
        event.preventDefault()

        body.removeChild(landing)
        body.appendChild(register)
    })

    const orText = document.createTextNode(' or ')
    navigations.appendChild(orText)

    const loginLink = document.createElement('a')
    loginLink.href = ""
    const loginLinkText = document.createTextNode('Login')
    loginLink.appendChild(loginLinkText)
    navigations.appendChild(loginLink)

    loginLink.addEventListener('click', event => {
        event.preventDefault()

        body.removeChild(landing)
        body.appendChild(login)
    })

    landing.appendChild(navigations)

    if (!userLoggedIn)
        body.appendChild(landing)
}

const register = document.createElement('div')

{
    const title = document.createElement('h1')
    const titleText = document.createTextNode('Register')
    title.appendChild(titleText)

    register.appendChild(title)

    const form = document.createElement('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        try {
            const name = nameInput.value
            const email = emailInput.value
            const username = usernameInput.value
            const password = passwordInput.value

            logic.registerUser(name, email, username, password)

            form.reset()

            body.removeChild(register)
            body.appendChild(login)
        } catch (error) {
            alert(error.message)
        }
    })

    const nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col', 'm-y-10')

    const nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    const nameLabelText = document.createTextNode('Name')
    nameLabel.appendChild(nameLabelText)
    nameField.appendChild(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.id = 'name'
    nameInput.type = 'text'
    nameField.appendChild(nameInput)

    form.appendChild(nameField)

    const emailField = document.createElement('div')
    emailField.classList.add('flex', 'flex-col', 'm-y-10')

    const emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    const emailLabelText = document.createTextNode('E-mail')
    emailLabel.appendChild(emailLabelText)
    emailField.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.id = 'email'
    emailInput.type = 'email'
    emailField.appendChild(emailInput)

    form.appendChild(emailField)

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'm-y-10')

    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameLabelText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameLabelText)
    usernameField.appendChild(usernameLabel)

    const usernameInput = document.createElement('input')
    usernameInput.id = 'username'
    usernameInput.type = 'text'
    usernameField.appendChild(usernameInput)

    form.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'm-y-10')

    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordLabelText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordLabelText)
    passwordField.appendChild(passwordLabel)

    const passwordInput = document.createElement('input')
    passwordInput.id = 'password'
    passwordInput.type = 'password'
    passwordField.appendChild(passwordInput)

    form.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-end')

    const resetButton = document.createElement('button')
    resetButton.type = 'reset'
    const resetButtonText = document.createTextNode('Clear')
    resetButton.appendChild(resetButtonText)

    buttons.appendChild(resetButton)

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    const submitButtonText = document.createTextNode('Register')
    submitButton.appendChild(submitButtonText)

    buttons.appendChild(submitButton)

    form.appendChild(buttons)

    register.appendChild(form)

    const loginLink = document.createElement('a')
    loginLink.href = ""
    const loginLinkText = document.createTextNode('Login')
    loginLink.appendChild(loginLinkText)

    loginLink.addEventListener('click', event => {
        event.preventDefault()

        form.reset()

        body.removeChild(register)
        body.appendChild(login)
    })

    register.appendChild(loginLink)

    // body.appendChild(register)
}

const login = document.createElement('div')

{
    const title = document.createElement('h1')
    const titleText = document.createTextNode('Login')
    title.appendChild(titleText)

    login.appendChild(title)

    const form = document.createElement('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        try {
            const username = usernameInput.value
            const password = passwordInput.value

            logic.loginUser(username, password)

            form.reset()

            const user = logic.getUserInfo()

            const salutation = home.querySelector('p')
            salutation.childNodes[0].remove()
            const salutationText = document.createTextNode(`Hello, ${user.name}!`)
            salutation.appendChild(salutationText)

            body.removeChild(login)
            body.appendChild(home)
        } catch (error) {
            alert(error.message)
        }
    })

    const usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col', 'm-y-10')

    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    const usernameLabelText = document.createTextNode('Username')
    usernameLabel.appendChild(usernameLabelText)
    usernameField.appendChild(usernameLabel)

    const usernameInput = document.createElement('input')
    usernameInput.id = 'username'
    usernameInput.type = 'text'
    usernameField.appendChild(usernameInput)

    form.appendChild(usernameField)

    const passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col', 'm-y-10')

    const passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'password'
    const passwordLabelText = document.createTextNode('Password')
    passwordLabel.appendChild(passwordLabelText)
    passwordField.appendChild(passwordLabel)

    const passwordInput = document.createElement('input')
    passwordInput.id = 'password'
    passwordInput.type = 'password'
    passwordField.appendChild(passwordInput)

    form.appendChild(passwordField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-end')

    const resetButton = document.createElement('button')
    resetButton.type = 'reset'
    const resetButtonText = document.createTextNode('Clear')
    resetButton.appendChild(resetButtonText)

    buttons.appendChild(resetButton)

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    const submitButtonText = document.createTextNode('Login')
    submitButton.appendChild(submitButtonText)

    buttons.appendChild(submitButton)

    form.appendChild(buttons)

    login.appendChild(form)

    const registerLink = document.createElement('a')
    registerLink.href = ""
    const registerLinkText = document.createTextNode('Register')
    registerLink.appendChild(registerLinkText)

    registerLink.addEventListener('click', event => {
        event.preventDefault()

        form.reset()

        body.removeChild(login)
        body.appendChild(register)
    })

    login.appendChild(registerLink)

    // body.appendChild(login)
}

const home = document.createElement('div')

{
    const title = document.createElement('h1')
    const titleText = document.createTextNode('App')
    title.appendChild(titleText)

    home.appendChild(title)

    const salutation = document.createElement('p')
    salutation.classList.add('text-center')
    const salutationText = document.createTextNode('Hola, Mundo!')
    salutation.appendChild(salutationText)

    home.appendChild(salutation)

    const logoutButton = document.createElement('button')
    logoutButton.type = 'button'
    const logoutButtonText = document.createTextNode('Logout')
    logoutButton.appendChild(logoutButtonText)

    logoutButton.addEventListener('click', event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            body.removeChild(home)
            body.appendChild(login)
        } catch (error) {
            alert(error.message)
        }

    })

    home.appendChild(logoutButton)

    const newPostButton = document.createElement('button')
    newPostButton.type = 'button'
    const newPostButtonText = document.createTextNode('+')
    newPostButton.appendChild(newPostButtonText)

    newPostButton.addEventListener('click', event => {
        event.preventDefault()

        home.appendChild(createPost)
    })

    home.appendChild(newPostButton)

    if (userLoggedIn) {
        try {
            const user = logic.getUserInfo()

            salutation.childNodes[0].remove()
            const salutationText = document.createTextNode(`Hello, ${user.name}!`)
            salutation.appendChild(salutationText)

            body.appendChild(home)
        } catch (error) {
            alert(error.message)
        }
    }
}

const createPost = document.createElement('div')

{
    const title = document.createElement('h2')
    const titleText = document.createTextNode('New post')
    title.appendChild(titleText)

    createPost.appendChild(title)

    const form = document.createElement('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        try {
            const image = imageInput.value
            const text = textInput.value

            logic.createPost(image, text)

            form.reset()

            home.removeChild(createPost)
        } catch (error) {
            alert(error.message)
        }
    })

    const imageField = document.createElement('div')
    imageField.classList.add('flex', 'flex-col', 'm-y-10')

    const imageLabel = document.createElement('label')
    imageLabel.htmlFor = 'image'
    const imageLabelText = document.createTextNode('Image')
    imageLabel.appendChild(imageLabelText)
    imageField.appendChild(imageLabel)

    const imageInput = document.createElement('input')
    imageInput.id = 'image'
    imageInput.type = 'url'
    imageField.appendChild(imageInput)

    form.appendChild(imageField)

    const textField = document.createElement('div')
    textField.classList.add('flex', 'flex-col', 'm-y-10')

    const textLabel = document.createElement('label')
    textLabel.htmlFor = 'text'
    const textLabelText = document.createTextNode('Text')
    textLabel.appendChild(textLabelText)
    textField.appendChild(textLabel)

    const textInput = document.createElement('input')
    textInput.id = 'text'
    textInput.type = 'text'
    textField.appendChild(textInput)

    form.appendChild(textField)

    const buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-end')

    const cancelButton = document.createElement('button')
    cancelButton.type = 'button'
    const cancelButtonText = document.createTextNode('Cancel')
    cancelButton.appendChild(cancelButtonText)

    cancelButton.addEventListener('click', event => {
        form.reset()

        home.removeChild(createPost)
    })

    buttons.appendChild(cancelButton)

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    const submitButtonText = document.createTextNode('Create')
    submitButton.appendChild(submitButtonText)

    buttons.appendChild(submitButton)

    form.appendChild(buttons)

    createPost.appendChild(form)

    // home.appendChild(createPost)
}

const posts = document.createElement('div')

{
    // TODO add ul with lis to list all posts
}