import mongoose from "mongoose";
import 'dotenv/config';

const DB_Init = async () => {

    const URL_MONGO = `${process.env.URL_MONGO}`;
    mongoose.connect(URL_MONGO);

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    })

    database.once('connected', () => {
        console.log('Database ready');
    })

}

export default DB_Init
