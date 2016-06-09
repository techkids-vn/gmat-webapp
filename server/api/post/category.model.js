'use strict';
import mongoose from 'mongoose';



var CategorySchema = mongoose.Schema({
  name : String,
  urlName: String
});



export default mongoose.model('Category', CategorySchema);
