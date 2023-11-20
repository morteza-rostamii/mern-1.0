import mongoose from 'mongoose'

// Blog

const blogOption = {
  id: {
    type: String,
    //required: true,
  },

  title: {
    type: String,
    required: true, 
  },
}

const blogSchema = new mongoose.Schema({
  id: blogOption.id,
  title: blogOption.title,
  
})

export default mongoose.model('Blog', blogSchema)

