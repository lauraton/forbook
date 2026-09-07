import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js"

export const UbicacionesModel = sequelize.define("Ubicaciones",{
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    latitud: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitud: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},
{
    timestamps: true,
    paranoid: true
}
)