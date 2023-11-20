import blogService from './blog.service.js';
import express from 'express'

//import config from '#root/src/config/default.js'

//const router = config.router;
const router = express.Router();

// Get: /api/blogs
router
.route('/')
.get(blogService.gets)

// Post: /api/blogs
router
.route('/')
.post(blogService.create)

// Get: /api/blogs/:slug
router
.route('/:slug')
.get(blogService.get)

// Put: /api/blogs/:id
router
.route('/:id')
.put(blogService.update)

// Delete: /api/blogs/:id
router
.route('/:id')
.delete(blogService.delete)

export default router