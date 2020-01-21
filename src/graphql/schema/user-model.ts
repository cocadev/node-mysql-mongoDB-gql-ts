const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: {
      type: String,
      require: true,
      unique: true,
      dropDups: true,
  }
});

export const User = mongoose.model('user', userSchema); 