/**
 * Created by Admin on 10/06/2016.
 */

'use strict';
import Question from './question.model';
import QuestionPack from './question_pack.model'

export function getQuestions(req, res) {
  Question.find(function (err, data) {
    res.json({err, data});
  });
}


export function postQuestion(req, res) {
  var post = {
    type : req.body.type,
    sub_type: req.body.sub_type,
    stimulus: req.body.stimulus,
    stem: req.body.stem,
    answer_choices: req.body.answer_choices,
    right_answer: req.body.right_answer
  };
  Question.create(post, function(err,data) {
    return res.json({err,data});
  })
}

export function deleteQuestion(req, res) {
    Question.findById(req.body._id, function (err, product) {
        product.remove(function (err, product) {
            res.json({err,product});
    });
  })
}

export function editQuestion(req, res) {
    Question.findById(req.body._id, function (err,product) {
        product.type = req.body.type;
        product.sub_type = req.body.sub_type;
        product.stimulus = req.body.stimulus;
        product.stem =  req.body.stem;
        product.answer_choices = req.body.answer_choices;
        product.right_answer = req.body.right_answer;
        product.save(function(err,product){
            res.json({err,product})
        });
    })
}

export function postQuestionPack(req, res) {
  var post = {
    available_time: req.body.available_time,
    question_ids: req.body.questions_ids,
    level : req.body.level
  };
  QuestionPack.create(post, function(err,data) {
    return res.json({err,data});
  })
}

export function getQuestionPacks(req, res) {
  QuestionPack.find(function (err, data) {
    res.json({err, data});
  });
}

export function deleteQuestionPack(req, res) {
    QuestionPack.findById(req.body._id, function (err, product) {
        product.remove(function (err, product) {
            res.json({err,product});
    });
  })
}

export function editQuestionPack(req, res) {
    QuestionPack.findById(req.body._id, function (err,product) {
        product.available_time = req.body.available_time;
        product.question_ids = req.body.questions_ids;
        product.level = req.body.level;
        product.save(function(err,product){
            res.json({err,product})
        });
    })
}
