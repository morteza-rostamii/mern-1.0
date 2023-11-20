import Blog from "./blog.model.js";

const blogService = {

  // Get: /api/blogs
  async gets(req, res, next) {
    let blogs = [];

    try {
      blogs = await Blog.find();
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    return res.status(200).json({
      msg: 'Get: /api/blogs',
      blogs: blogs,
    });
  },

  // Get: /api/blogs/:slug
  async get(req, res, next) {
    const {slug} = req.params;

    try {
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    const response = {
      msg: req.url,
    };

    return res.status(200).json(response);
  },

  // Post: /api/blogs
  async create(req, res, next) {

    try {
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    const response = {
      msg: req.url,
    };

    return res.status(200).json(response);
  },

  // Put: /api/blogs/:id
  async update(req, res, next) {

    try {
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    const response = {
      msg: req.url,
    };

    return res.status(200).json(response);
  },

  // Delete: /api/blogs/:id
  async delete(req, res, next) {
    const {id} = req.body;
    
    try {
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    const response = {
      msg: req.url,
    };

    return res.status(200).json(response);
  },

}

export default blogService