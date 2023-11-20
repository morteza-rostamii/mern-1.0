import Blog from "./blog.model.js";

const blogData = {

  // queries
  //**************
  
  // Get: blogs => paginated
  async getPaginate(page, limit) {
    const blogs = await Blog.find();
    return blogs;
  },

  async getByUserPaginate(userId, page, limit) {
    
  },

  getById(id) {

  },

  getBySlug(slug) {

  },

  // create
  //**************

  create(data) {

  },

  // update
  //**************

  findByIdAndUpdate(id) {

  },

  findBySlugAndUpdate(slug) {

  },

  // delete
  //**************

  findByIdAndDelete(id) {

  },

  findBySlugAndDelete(slug) {

  },
};

export default blogData