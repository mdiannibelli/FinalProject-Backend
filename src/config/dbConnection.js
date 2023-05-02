import mongoose from "mongoose";
import { logger } from "../controllers/logger/log4js.js";
import { envConfig } from "./envConfig.js";

export const connectMongoDB = ()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(envConfig.S_MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    },(error)=>{
        if(error){logger.error("Conexion fallida")};
        logger.info("Base de datos conectada correctamente")
    });
};