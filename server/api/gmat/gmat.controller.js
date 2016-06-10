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

}

export function postQuestionPack(req, res) {
  console.log(req.body);
  var post = {
    available_time: req.body.available_time,
    question_ids: req.body.question_ids,
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
