const mongoose = require('mongoose');
const { Schema } = mongoose;

const vehicleSelectonSchema = new Schema({
  common: {
    userId: Number,
    datasetId: {type: Schema.Types.ObjectId, ref: 'dataSet'},
    workingDays: Number,
    dailyMileage: Number,
    tyresMileage: Number,
    adminCosts: Number,
    laborCosts: Number,
    depreciationPeriod: Number,
  },
  typeAorB: String,
  vehicleTypeId: {type: Schema.Types.ObjectId, ref: 'list'},
  description: String,
  fuelTypeId: {type: Schema.Types.ObjectId, ref: 'list'},
  fuelPrice: Number,
  fuelConsumption: Number,
  acquisitionValue: Number,
  maintenanceCost: Number,
  insuranceCost: Number,
  tyresCost: Number,
  repairsCost: Number,
  numOfBreakdowns: Number,
  avgBreakdownCost: Number,
  roadTaxes: Number,
  disposalMethod: {type: Schema.Types.ObjectId, ref: 'list'},
  disposalValue: Number
}, { timestamps: true, });

export const VehicleSelecton = mongoose.model('vehicleselecton', vehicleSelectonSchema); 