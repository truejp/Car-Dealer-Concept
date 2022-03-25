import { check, validationResult } from "express-validator";
import { Vehicle } from "../models/vehicle.js";

export const getVehicle = async (req, res) => {
  const vehicle = await Vehicle.find();
  res.status(200).send(vehicle);
};
export const getVehicleById = async (req, res) => {
  let vehicle = await Vehicle.findById(req.params.id);
  res.status(200).send(vehicle);
};
export const getVehicleByTitle = async (req, res) => {
  let result = await Vehicle.find({ brand: req.query.brand });
  res.status(200).send(result);
};

export const addVehicle = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const vehicle = new Vehicle({
    brand: req.body.brand,
    model: req.body.model,
    power: req.body.power,
  });

  vehicle.save(vehicle).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newVehicleValidators = [
  check("brand").notEmpty().withMessage("Brand field required"),
  check("model").notEmpty().withMessage("Model field required"),
];
