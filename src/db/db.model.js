const { hotel } = require("./hotel.db");
const { site } = require("./site.db");
const { users } = require("./user.db");
const { room } = require("./room.db");
const { booking } = require("./booking.db");

class DbProject {
    constructor() {
        this.dbStorage = null;
    }

    static getInstance() {
        if (!DbProject.instance) {
            DbProject.instance = new DbProject();
        }
        return DbProject.instance;
    }

    connect() {
        this.dbStorage = {
            users: [...users],
            site: [...site],
            hotel: [...hotel],
            room: [...room],
            booking: [...booking]
    }
    }
}

module.exports = { DbProject };