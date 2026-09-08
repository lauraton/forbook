import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js"

export const UbicacionesModel = sequelize.define("Ubicaciones",{
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    latitud: {
        type: DataTypes.DECIMAL(18, 15),
        allowNull: false
    },
    longitud: {
        type: DataTypes.DECIMAL(18, 15),
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subcategoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: "ubicaciones",
    freezeTableName: true,
    timestamps: true,
    paranoid: true
}
)