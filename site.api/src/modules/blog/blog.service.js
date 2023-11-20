import blogData from "./blog.data.js";

const blogService = {

  // Get: /api/blogs
  async gets(req, res, next) {
    let blogs = [];

    try {
      blogs = await blogData.getPaginate(1, 5);
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

  /**
   * Post: /api/blogs
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * @returns 
   */
  async create(req, res, next) {

    const {
      title, 
    } = req.body;

    const blog = await blogData.create({title});

    try {
    }catch(error) {
      error.endpoint = req.url;
      return next(error);
    }

    const response = {
      msg: req.url,
      blog: blog,
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