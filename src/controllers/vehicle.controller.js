import { Vehicle } from "../db/models/vehicle.js";

const getVehiclesByDriver = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ driver: req.body.driver });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVehicle = async (req, res) => {
  const vehicle = new Vehicle(req.body);
  try {
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle == null) {
      return res.status(404).json({ message: "Cannot find vehicle" });
    }
    if (req.body.driver != null) {
      vehicle.driver = req.body.driver;
    }
    if (req.body.plate != null) {
      vehicle.plate = req.body.plate;
    }
    if (req.body.model != null) {
      vehicle.model = req.body.model;
    }
    if (req.body.brand != null) {
      vehicle.brand = req.body.brand;
    }
    if (req.body.year != null) {
      vehicle.year = req.body.year;
    }
    if (req.body.color != null) {
      vehicle.color = req.body.color;
    }
    if (req.body.type != null) {
      vehicle.type = req.body.type;
    }
    if (req.body.status != null) {
      vehicle.status = req.body.status;
    }
    const updatedVehicle = await vehicle.save();
    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle == null) {
      return res.status(404).json({ message: "Cannot find vehicle" });
    }
    await vehicle.remove();
    res.json({ message: "Deleted vehicle" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getVehiclesByDriver, createVehicle, updateVehicle, deleteVehicle };
