import mongoose from 'mongoose'
import { createPost } from './createPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        return createPost('689c5124b07a329e1db8d887', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNxdWluOGsxMDVrcHFoMTgzMHdibzc2eWszazI3ZWIxbHJocWIzYSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/pWO49XP9L7TxbgQVib/giphy.gif', 'hoy me gustaria hacer lo que sea')
            .then(() => console.log('post created successfully'))
    })
    .catch(error => console.error(error))