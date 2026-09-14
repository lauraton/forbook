import express from 'express';
import cors from 'cors'
import { startDB } from "./src/config/database.js";
import { Relations } from './relations.js';


import { userRouter } from './src/routes/user.route.js';
import { rolesRouter } from './src/routes/roles.route.js';
import { UbicacionRouter } from './src/routes/ubicaciones.route.js';
import { categoriaRouter } from './src/routes/categorias.route.js';
import { subcategoriaRouter } from './src/routes/subcategorias.route.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use(express.static("assets"));
app.use("/api", userRouter)
app.use("/api", rolesRouter)
app.use("/api", UbicacionRouter)
app.use("/api", categoriaRouter)
app.use("/api", subcategoriaRouter)


Relations()

app.listen(port, async () => {
    await startDB();
    console.log(`Servidor ejecutándose en ${port}`)
})

