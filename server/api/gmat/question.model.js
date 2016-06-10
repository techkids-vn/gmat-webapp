/**
 * Created by Admin on 10/06/2016.
 */
'use strict';
import mongoose from 'mongoose';

var QuestionSchema = mongoose.Schema({
  type : String,
  sub_type: String,
  stimulus: String,
  stem: String,
  answer_choices: {
    index : String,
    choice : String,
    explanation : String,
    note : String
  },
  right_answer: String
},
  {
    collection : 'question' 
  }
);

export default mongoose.model('Question', QuestionSchema);
