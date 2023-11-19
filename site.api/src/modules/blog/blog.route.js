import express from 'express'
import blogService from './blog.service.js';

const router = express.Router();

// Get: /api/blogs
router
.route('/')
.get(blogService.gets)

export default router