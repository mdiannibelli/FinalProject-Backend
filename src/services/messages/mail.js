import nodemailer from 'nodemailer';
import { envConfig } from '../../config/envConfig.js';


const testMail = envConfig.NODEMAILER_TEST_MAIL;
const testPass = envConfig.NODEMAILER_TEST_PASS;

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: testMail,
        pass: testPass
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

export {transporter, testMail};