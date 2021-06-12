const express = require('express');
import {getPost,createPosts} from '../controllers/posts'
const router = express.Router();

router.get('/', getPost);
router.post('/',createPosts)

module.exports = router