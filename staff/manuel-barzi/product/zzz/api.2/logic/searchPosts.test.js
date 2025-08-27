import mongoose from 'mongoose'
import { searchPosts } from './searchPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        return searchPosts('689c5124b07a329e1db8d887', 'lo que sea')
            .then(posts => console.log(posts))
    })
    .catch(error => console.error(error))