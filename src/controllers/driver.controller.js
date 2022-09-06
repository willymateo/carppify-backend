import { Driver } from "../db/models/driver.js";

const getVehicles = async (req, res) => {
  const { idDriver } = req.params;
  const driver = await Driver.findByPk(idDriver);
  const vehicles = await driver.getVehicles();
  res.json(vehicles);
};

export { getVehicles };
