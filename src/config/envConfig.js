import * as dotenv from "dotenv";
dotenv.config();

export const envConfig={
    PORT: process.env.PORT || 8080,
    MODO: process.env.NODE_ENV || "FORK",
    DAO_PERSISTANCE: process.env.DAO_PERSISTANCE || "mongo",
    S_MONGO_URL: process.env.S_MONGO_URL,
    DB_F_TYPE: process.env.DB_F_TYPE,
    DB_F_PROYECT_ID: process.env.DB_F_PROYECT_ID,
    DB_F_PRIVATE_KEY_ID: process.env.DB_F_PRIVATE_KEY_ID,
    DB_F_PRIVATE_KEY: process.env.DB_F_PRIVATE_KEY,
    DB_F_CLIENT_EMAIL: process.env.DB_F_CLIENT_EMAIL,
    DB_F_CLIENT_ID: process.env.DB_F_CLIENT_ID,
    DB_F_AUTH_URI: process.env.DB_F_AUTH_URI,
    DB_F_TOKEN_URI: process.env.DB_F_TOKEN_URI,
    DB_F_AUTH_PROVIDER: process.env.DB_F_AUTH_PROVIDER,
    DB_F_CLIENT_X509: process.env.DB_F_CLIENT_X509,
    DB_F_DBURL: process.env.DB_F_DBURL,
    DB_MONGO_PATH: process.env.DB_MONGO_PATH,
    NODEMAILER_TEST_MAIL: process.env.NODEMAILER_TEST_MAIL,
    NODEMAILER_TEST_PASS: process.env.NODEMAILER_TEST_PASS,
    TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID,
    TWILIO_TOKEN: process.env.TWILIO_TOKEN,
    TWILIO_SERVICE_PHONE: process.env.TWILIO_SERVICE_PHONE,
    TWILIO_ADMIN_PHONE: process.env.TWILIO_ADMIN_PHONE,
    SESSION_SECRET: process.env.SESSION_SECRET
}