// require('dotenv').config({ path: './env' })
import dotenv from 'dotenv';

import 'dotenv/config';
import connectDB from "./db/index.js";
dotenv.config({ path: '../.env' });

connectDB();

// Your code here














/*import express from "express";
const app = express();
(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        application.on("error", (error) => {
            console.log("ERROR the", error);
            throw error
        })
        aap.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR", error)
        throw err

    }
})()*/