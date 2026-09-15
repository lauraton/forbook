import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

export const penalties = sequelize.define("sanciones", {
    user_id: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false
    },

    type: {
        type: DataTypes.ENUM('advertencia', 'suspension_temporal', 'baneo_definitivo', 'muteo'),
        allowNull: false,

    },

    motive: {
        type: DataTypes.STRING(500),
        allowNull: false,

    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    timestamps: true,
    paranoid: true
})