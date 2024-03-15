const { hotel } = require("./hotel.db");
const { site } = require("./site.db");
const { users } = require("./user.db");

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
            hotel: [...hotel]
    }
    }
}

module.exports = { DbProject };