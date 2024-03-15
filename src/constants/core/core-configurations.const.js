// Constants
// const { appConst } = require('../core/app.const')

// Libraries
const dotenv = require('dotenv');
const path = require('path');
const appConst = require('./app.const');
const { DbProject } = require('../../db/db.model');

// const envFound = dotenv.config({
//     path: path.resolve(__dirname, `../../../${process.env.APP_ENV}.env`),
// });

// if (envFound.error) {
//     throw new Error(appConst.ENV_FILE_NOT_FOUND);
// }
const nodeEnv = 'development';

const serverHost = 'localhost';
const serverPort = process.env.SERVER_PORT || 3000;

const privateKey = "luddy";


const db = DbProject.getInstance();
db.connect()

module.exports = {
    nodeEnv,
    serverHost,
    serverPort,
    privateKey,
    db
}