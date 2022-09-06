import { getVehicles } from "../controllers/driver.controller.js";
import { Router } from "express";

const router = Router();

// Get vehicles
router.get("/:idDriver/vehicles", getVehicles);

export default router;
