import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connection.js";

const Company = sequelize.define(
  "company",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "name_unique",
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "active",
      comment: "active | inactive",
    },
    plan_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "prepaid",
      comment: "prepaid | postpaid",
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    tableName: "company",
    timestamps: false,
  }
);

export { Company };
