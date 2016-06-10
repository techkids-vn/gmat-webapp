/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./gmat.controller.js');

var router = express.Router();

router.get('/questions', controller.getQuestions);
router.get('/question_pack', controller.getQuestionPacks);
router.post('/post-question', controller.postQuestion);
router.post('/delete-question', controller.deleteQuestion);
router.post('/post-question-pack', controller.postQuestionPack);

module.exports = router;
