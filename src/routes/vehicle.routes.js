import { Router } from "express";
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle.controller.js";

const router = Router();

// Create a vehicle
router.post("/", createVehicle);

// Update a vehicle
router.put("/:idVehicle", updateVehicle);

// Delete a vehicle
router.delete("/:idVehicle", deleteVehicle);

export default router;
