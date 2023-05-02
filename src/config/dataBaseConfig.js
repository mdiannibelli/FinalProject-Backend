import { envConfig } from "./envConfig.js"

export const options = {
    fileSystem: {
        pathProducts: 'productos.txt',
        pathCarts: 'carrito.txt'
    },
    mongo:{
        path: envConfig.DB_MONGO_PATH,
    },
    firebase:{
        key: {
            "type": envConfig.DB_F_TYPE,
            "project_id": envConfig.DB_F_PROYECT_ID,
            "private_key_id": envConfig.DB_F_PRIVATE_KEY_ID,
            "private_key": envConfig.DB_F_PRIVATE_KEY,
            "client_email": envConfig.DB_F_CLIENT_EMAIL,
            "client_id": envConfig.DB_F_CLIENT_ID,
            "auth_uri": envConfig.DB_F_AUTH_URI,
            "token_uri": envConfig.DB_F_TOKEN_URI,
            "auth_provider_x509_cert_url": envConfig.DB_F_AUTH_PROVIDER,
            "client_x509_cert_url": envConfig.DB_F_CLIENT_X509
        },
        databaseUrl: envConfig.DB_F_DBURL
    }
}