import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
  power: Number,
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
