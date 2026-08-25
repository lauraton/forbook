import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.PORT,
        dialect: "mysql"
    }
)

try {
    await sequelize.authenticate();
    console.log("base de datos inciada correctamente");
} catch (error) {
    console.error("Error en la base de datos:", error)
}
