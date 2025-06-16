let userLoggedIn = false

try {
    userLoggedIn = logic.isUserLoggedIn()
} catch (error) {
    alert(error.message)
}

const body = document.body

// DEMO custom components


var body2 = new Component(body)

var googleAnchor = new Anchor('https://www.google.com', 'Go to Google')

body2.add(googleAnchor)