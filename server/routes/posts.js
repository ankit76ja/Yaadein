const express = require('express');
import {getPost,createPosts, updatePosts, deletePost, likePost} from '../controllers/posts'
const router = express.Router();

router.get('/', getPost);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost)

module.exports = router