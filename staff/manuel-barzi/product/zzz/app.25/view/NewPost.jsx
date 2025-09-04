import { logic } from '../logic'

export const NewPost = ({ onCreated, onCancelled, alert }) => {
    const handleNewPostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => {
                    form.reset()

                    onCreated()
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

    const handleNewPostCancelClick = () => onCancelled()

    console.debug('NewPost -> render')

    return <div className="py-20">
        <h2>New post</h2>
        <form onSubmit={handleNewPostSubmit}>
            <div className="flex flex-col m-y-10">
                <label htmlFor="image">Image</label>
                <input id="image" type="url" />
            </div>
            <div className="flex flex-col m-y-10">
                <label htmlFor="text">Text</label>
                <input id="text" type="text" />
            </div>
            <div className="flex justify-end">
                <button type="button" onClick={handleNewPostCancelClick}>Cancel</button>
                <button type="submit">Create</button>
            </div>
        </form>
    </div>
}