const mongoose = require('mongoose');
const { Schema } = mongoose;

const listGroupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
});

export const ListGroup = mongoose.model('listGroup', listGroupSchema); 