const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
});

export const Author = mongoose.model('author', authorSchema); 