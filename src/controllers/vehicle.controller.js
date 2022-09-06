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
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) {
      return res.status(404).send({ error: "Cannot find vehicle" });
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
