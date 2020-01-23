const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  jobID: String,
  userID: String,
  description: String,
});

export const Comment = mongoose.model('comment', commentSchema); 