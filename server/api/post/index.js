'use strict';

var express = require('express');
var controller = require('./post.controller.js');

var router = express.Router();

router.get('/categories', controller.getCategories);
router.get('/category/:category', controller.getPostsByCategory);
router.get('/all', controller.getPosts);
router.get('/:postUrlName', controller.getPostByUrlName);
router.post('/add', controller.addPost);
router.post('/edit', controller.editPost);
router.post('/delete', controller.deletePost);

module.exports = router;
