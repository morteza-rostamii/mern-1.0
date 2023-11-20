import Blog from "./blog.model.js";

const blogData = {

  // queries
  //**************
  
  /** 
   * Get: blogs => paginated
   * @param {Number} page
   * @param {String} limit
  */
  async getPaginate(page, limit) {
    const blogs = await Blog.find();
    return blogs;
  },

  async getByUserPaginate(userId, page, limit) {
  },

  /**
   * 
   * @param {*} id 
   * @returns 
   */
  async getById(id) {
    const blog = await Blog.findOne({_id: id});
    return blog;
  },

  getBySlug(slug) {

  },

  // create
  //**************

  /**
   * 
   * @param {{title: String}} data
   */
  async create(data) {
    const blog = new Blog(data);
    await blog.save();
    return blog;
  },

  // update
  //-------

  /**
   * 
   * @param {String} id 
   */
  async findByIdAndUpdate(id, data) {
    const blog = await Blog.findOne({ _id: id })

		if (data.title) {
			blog.title = data.title;
		}

		await blog.save()
    return blog;
  },

  findBySlugAndUpdate(slug) {

  },

  // delete
  //**************

  findByIdAndDelete(id) {
    //await Post.deleteOne({ _id: req.params.id })

  },

  findBySlugAndDelete(slug) {

  },
};

export default blogData