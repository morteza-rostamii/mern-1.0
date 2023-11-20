import blogService from './blog.service.js';
import express from 'express'

//import config from '#root/src/config/default.js'

//const router = config.router;
const router = express.Router();

// Get: /api/blogs
router
.route('/')
.get(blogService.gets)

// Get: /api/blogs/:slug
router
.route('/:slug')
.get(blogService.get)

// Post: /api/blogs
router
.route('/')
.post(blogService.create)

// Put: /api/blogs/:id
router
.route('/:id')
.put(blogService.update)

// Delete: /api/blogs/:id
router
.route('/:id')
.delete(blogService.delete)

export default router