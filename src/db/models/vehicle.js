import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connection.js";
import { Driver } from "./driver.js";

const Vehicle = sequelize.define(
  "vehicle",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "driver",
        key: "id",
      },
    },
    plate: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "bicycle | motorcycle | car | van | truck",
    },
    capacity: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "small | medium | large",
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    tableName: "vehicle",
    timestamps: false,
  }
);

Vehicle.belongsTo(Driver, { foreignKey: "driver_id" });
Driver.hasMany(Vehicle, { foreignKey: "driver_id" });

export { Vehicle };
