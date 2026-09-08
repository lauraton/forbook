import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js"

export const CategoriasModel = sequelize.define("Categorias",{
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