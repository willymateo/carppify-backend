import dbConfig from "../config/db.config.js";
import { env } from "../config/app.config.js";
import { Sequelize } from "sequelize";

const config = dbConfig[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export { sequelize };
