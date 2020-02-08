const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
  listTypeId: {type: Schema.Types.ObjectId, ref: 'listGroup'},
  listItem: {type: String,}
});

export const List = mongoose.model('list', listSchema); 