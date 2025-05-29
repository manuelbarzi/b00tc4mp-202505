//const body = document.querySelector('body')
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

    landing.appendChild(navigations)

    body.appendChild(landing)
}

const register = document.createElement('div')

{
    const title = document.createElement('h1')
    const titleText = document.createTextNode('Register')
    title.appendChild(titleText)

    register.appendChild(title)

    const form = document.createElement('form')

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

    register.appendChild(form)

    // body.appendChild(register)
}