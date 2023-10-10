import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Flight = sequelize.define("flight", {
  flight_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destination_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plane_id: {
    type: DataTypes.INTEGER,
  },
  departure_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  check_in: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "canceled"),
    defaultValue: "pending",
  },
});

export default Flight;
