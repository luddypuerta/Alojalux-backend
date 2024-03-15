// Constants
// const { appConst } = require('../core/app.const')

// Libraries
const dotenv = require('dotenv');
const path = require('path');
const appConst = require('./app.const');
const { DbProject } = require('../../db/db.model');

const envFound = dotenv.config({
    path: path.resolve(__dirname, `../../../${process.env.APP_ENV}.env`),
});

if (envFound.error) {
    throw new Error(appConst.ENV_FILE_NOT_FOUND);
}
const nodeEnv = process.env.APP_ENV || 'development';

const serverHost = process.env.SERVER_HOST || 'localhost';
const serverPort = process.env.SERVER_PORT || 8082;

const privateKey = process.env.SECRET_OR_PRIVATE_KEY;


const db = DbProject.getInstance();
db.connect()

module.exports = {
    nodeEnv,
    serverHost,
    serverPort,
    privateKey,
    envFound,
    db
}