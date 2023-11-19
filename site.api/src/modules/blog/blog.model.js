import mongoose from 'mongoose'

// Blog

const blogType = {
  id: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true, 
  },
}

const blogSchema = new mongoose.Schema({
  id: blogType.id,
  title: blogType.title,
})

export default mongoose.model('Blog', blogSchema)

