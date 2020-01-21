const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    maxlength: 6,
    minlength: 3,
  },
  email: {
      type: String,
      lowercase: true,
      require: true,
      unique: true,
      dropDups: true,
  }
});

export const User = mongoose.model('user', userSchema); 