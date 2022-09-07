import { Router } from "express";
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle.controller.js";

const router = Router();

// Create a vehicle
router.post("/", createVehicle);

// Update a vehicle by id
router.put("/:id", updateVehicle);

// Delete a vehicle by id
router.delete("/:id", deleteVehicle);

export default router;
