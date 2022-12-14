import { Vehicle } from "../db/models/vehicle.js";
import { Driver } from "../db/models/driver.js";

const getVehicles = async (req, res) => {
  try {
    const { id } = req.params;
    let { limit, offset } = req.query;
    limit = limit ? parseInt(limit) : 5;
    offset = offset ? parseInt(offset) : 0;
    const driver = await Driver.findByPk(id);

    if (!driver) {
      return res.status(404).send({ error: "Driver not found" });
    }

    const vehicles = await Vehicle.findAndCountAll({
      where: { driver_id: id },
      limit,
      offset,
      order: [["id", "ASC"]],
    });

    return res.status(200).send(vehicles);
  } catch (error) {
    console.log(
      "Some error ocurred in getVehicles method of driver controller",
      error
    );
    return res.status(409).send({ error: "Some error ocurred" });
  }
};

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findByPk(id);

    if (!driver) {
      return res.status(404).send({ error: "Driver not found" });
    }

    const company = await driver.getCompany();

    return res.status(200).send({
      ...driver.dataValues,
      company_id: undefined,
      company,
    });
  } catch (error) {
    console.log(
      "Some error ocurred in getDriverById method of driver controller",
      error
    );
    return res.status(409).send({ error: "Some error ocurred" });
  }
};

export { getVehicles, getDriverById };
