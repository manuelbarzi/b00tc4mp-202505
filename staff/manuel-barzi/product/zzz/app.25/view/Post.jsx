import { useRole } from '../hooks'

import { logic } from '../logic'

export const Post = ({ post, onPostRemoved, onPostLikeToggled, onPostSaveToggled, onPostArchiveToggled, alert, confirm }) => {
    const role = useRole()

    const handleDeletePostClick = () => {
        confirm('Delete post?')
            .then(ok => {
                if (!ok) return

                try {
                    logic.removePost(post.id)
                        .then(() => {
                            onPostRemoved()
                        })
                        .catch(error => {
                            console.error(error)

                            alert(error.message)
                        })
                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            })

    }

    const handleToggleLikePostClick = () => {
        try {
            logic.toggleLikePost(post.id)
                .then(() => {
                    onPostLikeToggled()
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleToggleSavePostClick = () => {
        try {
            logic.toggleSavePost(post.id)
                .then(() => {
                    onPostSaveToggled()
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleToggleArchivePostClick = () => {
        confirm(`${post.archived ? 'Unarchive' : 'Archive'} post?`)
            .then(ok => {
                try {
                    logic.toggleArchivePost(post.id)
                        .then(() => {
                            onPostArchiveToggled()
                        })
                        .catch(error => {
                            console.error(error)

                            alert(error.message)
                        })
                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            })
    }

    console.debug('Post -> render')

    return <li>
        <h3>{post.author.username}</h3>
        <img
            className="w-full"
            src={post.image}
        />
        <p>{post.text}</p>
        <time>{post.date}</time>
        <button type="button" onClick={handleToggleLikePostClick}>{post.liked ? '❤️' : '🤍'} ({post.likesCount})</button>
        <button type="button" onClick={handleToggleSavePostClick}>{post.saved ? '🇺🇳' : '🏳️'}</button>
        {post.own && <button type="button" onClick={handleToggleArchivePostClick}>{post.archived ? '🗄' : '📁'}</button>}
        {(post.own || role === 'administrator') && <button type="button" onClick={handleDeletePostClick}>🗑</button>}
    </li>
}