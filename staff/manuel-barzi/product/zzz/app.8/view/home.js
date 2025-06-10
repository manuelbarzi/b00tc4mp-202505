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

        home.removeChild(posts)
        home.appendChild(newPost)
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