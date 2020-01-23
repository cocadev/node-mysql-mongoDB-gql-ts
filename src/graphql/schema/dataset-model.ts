const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: Number,
  distanceUnit: Schema.Types.ObjectId,
  fuelUnit: Schema.Types.ObjectId,
  currency: String,
  countryCode: {
    type: String,
    required: true,
  },
  localRegion: String,
  createdAt: Date,
  updatedAt: Date
},{ timestamps: true });

export const DataSet = mongoose.model('dataSet', dataSetSchema); 