import { Router } from "express";
import {
  getVehicles,
  getDriverById,
} from "../controllers/driver.controller.js";

const router = Router();

// Get driver by id
router.get("/:id", getDriverById);

// Get all vehicles by driver id
router.get("/:id/vehicles", getVehicles);

export default router;
