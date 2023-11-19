import Blog from "./blog.model.js";

const blogService = {

  // Get: /api/blogs
  async gets(req, res, next) {

    let blogs = [];
    try {
      blogs = await Blog.find();

      console.log(blogs)
    }catch(error) {
      console.log(error);
    }

    return res.status(200).json({
      msg: '/api/blogs',
      blogs: blogs,
    });
  },


}

export default blogService