import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";

export const rolesModel = sequelize.define("Roles",{
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
{
    timestamps: true,
    paranoid: true
}
)