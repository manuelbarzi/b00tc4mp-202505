import { data } from '../data'

export const createPost = (image, text) => {
    if (typeof image !== 'string') throw new TypeError('invalid image type')
    if (typeof text !== 'string') throw new TypeError('invalid text type')

    const userId = data.loadUserId()

    const users = data.loadUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const id = parseInt((Date.now() + Math.random()).toString().replace('.', '')).toString(36)

    const post = {
        id: id,
        author: user.id,
        image,
        text,
        date: new Date().toISOString()
    }

    const posts = data.loadPosts()

    posts.push(post)

    data.savePosts(posts)
}