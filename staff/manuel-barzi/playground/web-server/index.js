const express = require('express')
const { data } = require('./data/index.js')

const server = express()

let query
const cart = []

server.get('/', (request, response) => {
    response.send('Hello, World!')
})

server.get('/search', (request, response) => {
    const { q } = request.query

    query = q

    let cameras = data.loadCameras()

    cameras = cameras.filter(camera => camera.brand.toUpperCase() === q.toUpperCase())

    response.send(`<doctype html>
        <html>
            <head>
                <title>Results</title>
            </head>

            <body>
                <h2>Results</h2>
                <a href="http://localhost:8080/cart">Cart</a>
                <ul>
                    ${cameras.map(({ id, brand, model, type, filmFormat, price }) => `<li>
                            <h3><a href="http://localhost:8080/products/${id}">${brand} ${model}</a></h3>

                            <i>${type} ${filmFormat}</i>

                            <strong>${price}</strong>

                            <a href="http://localhost:8080/products/${id}/add">Add</a>

                            <a href="https://${brand}.com">${brand}</a>
                        </li>`)}
                </ul>
            </body>
        </html>`)
})

server.get('/products/:id/add', (request, response) => {
    const { id } = request.params

    cart.push(id)

    console.debug(cart)

    response.redirect(`/search?q=${query}`)
})

server.get('/cart', (request, response) => {
    const cameras = data.loadCameras()
    const items = cart.map(id => cameras.find(camera => camera.id === id))

    response.send(`<doctype html>
        <html>
            <head>
                <title>Cart</title>
            </head>

            <body>
                <h2>Cart</h2>
                <a href="http://localhost:8080/search?q=${query}">Back</a>
                <ul>
                    ${items.map(({ id, brand, model, type, filmFormat, price }) => `<li>
                            <h3>${brand} ${model}</h3>

                            <i>${type} ${filmFormat}</i>

                            <strong>${price}</strong>

                            <a href="https://${brand}.com">${brand}</a>
                        </li>`)}
                </ul>
                <strong>Total: ${items.reduce((acc, item) => acc + item.price, 0)}
            </body>
        </html>`)
})

server.listen(8080, () => console.log('Server is up on port 8080'))