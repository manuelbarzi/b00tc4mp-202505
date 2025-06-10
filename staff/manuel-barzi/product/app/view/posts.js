const posts = document.createElement('div')

{
    const list = document.createElement('ul')

    if (userLoggedIn) {
        try {
            const allPosts = logic.getPosts()

            allPosts.forEach(post => {
                const item = document.createElement('li')

                const title = document.createElement('h3')
                const titleText = document.createTextNode(post.author)
                title.appendChild(titleText)

                item.appendChild(title)

                const image = document.createElement('img')
                image.src = post.image

                item.appendChild(image)

                const text = document.createElement('p')
                const textText = document.createTextNode(post.text)
                text.appendChild(textText)

                item.appendChild(text)

                const date = document.createElement('time')
                const dateText = document.createTextNode(post.date)
                date.appendChild(dateText)

                item.appendChild(date)

                list.appendChild(item)
            })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    posts.appendChild(list)

    home.appendChild(posts)
}