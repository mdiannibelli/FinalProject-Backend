import twilio from "twilio";
import { envConfig } from "../../config/envConfig.js";

const accountId = "AC5bbba5597b0a4ef0221961dcc48cf0e0";
const tokenTwilio = "f33e59cf285d646b297165b9d7ec27fa";

const twilioWhatsappPhone = "whatsapp:+14155238886";
const adminWhatsappPhone = "whatsapp:+5492604632416";

const twilioClient = twilio(accountId, tokenTwilio);

export {twilioClient, twilioWhatsappPhone, adminWhatsappPhone};