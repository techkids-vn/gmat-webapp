/**
 * Created by Admin on 10/06/2016.
 */

'use strict';
import Question from './question.model';

export function getQuestions(req, res) {
  Question.find(function (err, data) {
    res.json({err, data});
  })
}

export function postQuestion(req, res) {
  Question.find(function (err, data) {
    res.json({err, data});
  })
}

export function postQuestion(req, res) {
  var post = {
    type : req.body.type,
    sub_type: req.body.sub_type,
    stimulus: req.body.stimulus,
    stem: req.body.stem,
    answer_choices: {
      index : req.body.answer_choices.index,
      choice : req.body.answer_choices.choice,
      explanation : req.body.answer_choices.explanation,
      note : req.body.answer_choices.note
    },
    right_answer: req.body.right_answer
  };
  Question.create(post, function(err,data) {
    return res.json({err,data});
  })
}

export function deleteQuestion(req, err) {
  Question.findById(req.body.question._id, function (err, product){
    product.remove(function (err, product) {
      res.json({err,product});
    });
  }
}
