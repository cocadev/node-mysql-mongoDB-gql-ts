const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
});

export const Country = mongoose.model('country', countrySchema); 