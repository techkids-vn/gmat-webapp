/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./gmat.controller.js');

var router = express.Router();

router.post('/postQuestion', controller.postQuestion);
router.get('/questions', controller.getQuestions);
router.post('/delete', controller.deleteQuestion);

module.exports = router;
