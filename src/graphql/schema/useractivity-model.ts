import { DataSet } from "./dataset-model";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserActivitySchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  activityTypeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ownVsRentDataId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  dataSetId: {
    type: Schema.Types.ObjectId,
    ref: "DataSet"
  }
},{ timestamps: true });

export const UserActivity = mongoose.model('useractivity', UserActivitySchema); 