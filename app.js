import express from 'express';
import { startDB } from "./src/config/database.js";
import { userRouter } from './src/routes/user.route.js';
import { rolesRouter } from './src/routes/roles.route.js';
import { profileRouter } from './src/routes/profile.route.js';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, async () => {
    await startDB();
    console.log(`Servidor ejecutándose en ${port}`)
})

app.use("/api", userRouter)
app.use("/api", rolesRouter)
app.use("/api", profileRouter)