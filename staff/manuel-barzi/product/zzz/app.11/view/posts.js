const posts = document.createElement('div')

const renderPosts = () => {
    try {
        const allPosts = logic.getPosts()

        const list = posts.querySelector('ul')
        list.innerHTML = ''

        allPosts.forEach(post => {
            const item = document.createElement('li')

            const title = document.createElement('h3')
            const titleText = document.createTextNode(post.author.username)
            title.appendChild(titleText)

            item.appendChild(title)

            const image = document.createElement('img')

            image.classList.add('w-full')
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

            if (post.own) {
                const removeButton = document.createElement('button')
                removeButton.type = 'button'
                const removeButtonText = document.createTextNode('🗑️')
                removeButton.appendChild(removeButtonText)

                removeButton.addEventListener('click', event => {
                    if (confirm('Delete post?'))
                        try {
                            logic.removePost(post.id)

                            renderPosts()
                        } catch (error) {
                            console.error(error)

                            alert(error.message)
                        }
                })

                item.appendChild(removeButton)
            }

            list.appendChild(item)
        })
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
}

{
    const list = document.createElement('ul')
    list.classList.add('list-style-none', 'p-0')

    posts.appendChild(list)

    home.appendChild(posts)
}

if (userLoggedIn) renderPosts()


