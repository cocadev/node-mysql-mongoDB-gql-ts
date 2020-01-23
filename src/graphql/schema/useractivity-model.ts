const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserActivitySchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  activityTypeId: {
    type: String,
    required: true,
  },
  dataSetId: {
    type: String,
    required: true,
  },
  ownVsRentDataId: {
    type: String,
    required: true,
  },
},{ timestamps: true });

export const UserActivity = mongoose.model('useractivity', UserActivitySchema); 