'use strict';
import mongoose from 'mongoose';

var PostSchema = mongoose.Schema({
  urlName : String,
  content: String,
  title: String,
  author: {type: String, default: "admin"},
  date: {type: Date, default: Date.now},
  category: String
});




export default mongoose.model('Post', PostSchema);
