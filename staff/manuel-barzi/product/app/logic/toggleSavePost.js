import { data } from '../data'

export const toggleSavePost = postId => {
    const userId = data.loadUserId()

    const users = data.loadUsers()

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const posts = data.loadPosts()

    const post = posts.find(post => post.id === postId)

    if (!post) throw new Error('post not found')

    const { saved } = user

    const index = saved.findIndex(savedPostId => savedPostId === postId)

    if (index < 0) saved.push(postId)
    else saved.splice(index, 1)

    data.saveUsers(users)
}