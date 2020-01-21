const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
  },
  budget: {
    type: Number,
    required: true,
    min: 30,
    max: 250
  },
  country: {
    type: String, 
    enum: ['United States', 'Germany', 'France', 'Russia', 'China', 'Japan', 'Australia', 'India'], 
    default: 'United States',
    required: "Please select your country"
  },
  range: {
    type: [String], 
    enum: ['', 'Urgent', 'Recurit', 'NDA', 'Sealed', 'IP Agreement', 'Private', 'Prefered'], 
    default: '',
  },
});

export const Job = mongoose.model('job', jobSchema); 