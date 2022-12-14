import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connection.js";
import { Company } from "./company.js";

const Driver = sequelize.define(
  "driver",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "company",
        key: "id",
      },
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "email",
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "active | inactive",
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    tableName: "driver",
    timestamps: false,
  }
);

Driver.belongsTo(Company, { foreignKey: "company_id" });
Company.hasMany(Driver, { foreignKey: "company_id" });

export { Driver };
