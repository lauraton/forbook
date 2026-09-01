import { DataTypes } from "sequelize";
import baseDatos from "../config/database.js";

const ProfileModel = baseDatos.define("Profile", {
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

export { ProfileModel };