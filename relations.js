import { CategoriasModel } from "./src/models/categorias.model.js";
import { SubcategoriasModel } from "./src/models/subcategorias.model.js";
import { UbicacionesModel } from "./src/models/ubicaciones.model.js";

export const Relations = () => {
    CategoriasModel.hasMany(SubcategoriasModel, {
        foreignKey: "categoria_id",
        as: "subcategorias"
    })
    SubcategoriasModel.belongsTo(CategoriasModel, {
        foreignKey: "categoria_id"
    })
    CategoriasModel.hasMany(UbicacionesModel, {
        foreignKey: "categoria_id"
    });
    UbicacionesModel.belongsTo(CategoriasModel, {
        foreignKey: "categoria_id"
    });

    SubcategoriasModel.hasMany(UbicacionesModel, {
        foreignKey: "subcategoria_id"
    });
    UbicacionesModel.belongsTo(SubcategoriasModel, {
        foreignKey: "subcategoria_id"
    });
};
