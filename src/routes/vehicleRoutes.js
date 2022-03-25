import express from "express";
import {
  getVehicle,
  getVehicleById,
  getVehicleByVendor,
  addVehicle,
  newVehicleValidators,
} from "../controllers/vehicleControllers.js";

const router = express.Router();

router.get("/", getVehicle);
router.get("/search", getVehicleByVendor);
router.get("/:id", getVehicleById);
router.post("/", newVehicleValidators, addVehicle);

export default router;
