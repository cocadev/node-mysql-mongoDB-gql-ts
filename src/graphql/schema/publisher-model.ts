const mongoose = require('mongoose');
const { Schema } = mongoose;

const publisherSchema = new Schema({
  name: String,
});

export const Author = mongoose.model('author', publisherSchema); 