// Constants
const { coreConfigurationsConst } = require('../../../constants/index.constants')

// Libraries
const express = require('express');
const cors = require('cors');

class ServerModel {
    constructor() {
        this.app = express();
        this.serverHost = coreConfigurationsConst.serverHost;
        this.serverPort = coreConfigurationsConst.serverPort;
        this.paths = {
            users: '/api/users',
            site: '/api/site',
            auth: '/api/auth',
            hotel: '/api/hotel'
        }
        this.middleware();
        this.routes();
    }


    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.users, require('../../../routes/user.routes'));
        this.app.use(this.paths.site, require('../../../routes/site.routes'));
        this.app.use(this.paths.auth, require('../../../routes/auth.routes'));
        this.app.use(this.paths.hotel, require('../../../routes/hotel.routes'));
    }

    listen() {
        this.app.listen(this.serverPort, this.serverHost, () => {
            console.log(`Server listening on http://${this.serverHost}:${this.serverPort}`)
        })
    }
}

module.exports = ServerModel;