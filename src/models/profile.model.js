import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";


export const ProfileModel = sequelize.define("Profile", {
  bio: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  avatarUrl: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});
