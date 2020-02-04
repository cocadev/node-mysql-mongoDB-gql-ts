const mongoose = require('mongoose');
const { Schema } = mongoose;

const vehicleSelectonSchema = new Schema({
  common: {
    userId: Number,
    datasetId: Schema.Types.ObjectId,
    workingDays: Number,
    dailyMileage: Number,
    tyresMileage: Number,
    adminCosts: Number,
    laborCosts: Number,
    depreciationPeriod: Number,
  },
  typeAorB: String,
  vehicleTypeId: Schema.Types.ObjectId,
  description: String,
  fuelTypeId: Schema.Types.ObjectId,
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
  disposalMethod: Schema.Types.ObjectId,
  disposalValue: Number
}, { timestamps: true, });

export const VehicleSelecton = mongoose.model('vehicleselecton', vehicleSelectonSchema); 