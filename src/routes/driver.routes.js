import { Router } from "express";
import { getVehicles } from "../controllers/driver.controller.js";

const router = Router();

// Get vehicles
router.post("/:idDriver/vehicles", getVehicles);

export default router;
