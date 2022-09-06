import { Vehicle } from "../db/models/vehicle.js";

const createVehicle = async (req, res) => {
  try {
    const data = req.body;
    const vehicle = Vehicle.build(data);

    // Validate data
    await vehicle.validate();
    // Save the register in the DB
    await vehicle.save();

    return res.status(201).send({
      message: "Vehicle created successfully",
      id: vehicle.id,
    });
  } catch (error) {
    console.log(
      "Some error ocurred in createVehicle method of vehicle controller",
      error
    );
    return res
      .status(409)
      .send({ error: "Some error ocurred while creating the vehicle" });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    const { driver_id, plate, model, type, capacity } = req.body;

    // Vehicle not found
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    if (driver_id) {
      vehicle.set({ driver_id });
    }
    if (plate) {
      vehicle.set({ plate });
    }
    if (model) {
      vehicle.set({ model });
    }
    if (type) {
      vehicle.set({ type });
    }
    if (capacity) {
      vehicle.set({ capacity });
    }

    await vehicle.validate();
    await vehicle.save();
    return res.status(200).send({
      message: "Vehicle updated successfully",
    });
  } catch (error) {
    console.log(
      "Some error ocurred in updateVehicle method of vehicle controller",
      error
    );
    return res.status(409).send({ error: "Some error ocurred" });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) {
      return res.status(404).send({ error: "Vehicle not found" });
    }
    await vehicle.destroy();
    return res.status(200).send({ message: "Deleted vehicle" });
  } catch (error) {
    console.log(
      "Some error ocurred in deleteVehicle method of vehicle controller",
      error
    );
    return res.status(409).send({ error: "Some error ocurred" });
  }
};

export { createVehicle, updateVehicle, deleteVehicle };
