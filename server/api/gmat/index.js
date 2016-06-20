/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./gmat.controller.js');

var router = express.Router();
//get
router.get('/questions', controller.getQuestions);
router.get('/question_packs', controller.getQuestionPacks);
//post
router.post('/post-question', controller.postQuestion);
router.post('/post-question-pack', controller.postQuestionPack);
//delete
router.post('/delete-question', controller.deleteQuestion);
router.post('/delete-question-pack', controller.deleteQuestionPack);
//edit
router.post('/edit-question', controller.editQuestion);
router.post('/edit-question-pack', controller.editQuestionPack);

module.exports = router;
