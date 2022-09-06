import { getVehicles } from "../controllers/driver.controller.js";
import { Router } from "express";

const router = Router();

// Get all vehicles by driver id
router.get("/:id/vehicles", getVehicles);

export default router;
