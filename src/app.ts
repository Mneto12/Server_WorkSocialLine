import 'dotenv/config';
import express from 'express';
import cors from 'express';
import DB_Init from './database/connection'
import userRoute from './1.user/infrastructure/routes/UserRoute'

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4002;

app.use(userRoute);
app.listen(port, () => console.log(`App, escuchando por el puerto ${port}`));
DB_Init().then();