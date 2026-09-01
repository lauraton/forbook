import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('forbook', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
    logging: false
});

export const startDB = async () => {
    try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true })
    console.log("base de datos inciada correctamente");
} catch (error) {
    console.error("Error en la base de datos:", error)
}
}
