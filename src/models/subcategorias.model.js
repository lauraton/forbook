import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js"

export const SubcategoriasModel = sequelize.define("Subcategorias",{
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
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