// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getAllRoomsQuery: () => {
        return new Promise((resolve, reject) => {
            try {
                resolve(dbStorage.room);
            } catch (error) {
                reject(errorsConst.roomErrors.queries.getAll);
            }
        });
    },
    getRoomByIdQuery: (id) => {
        
        return new Promise((resolve, reject) => {
            try {
                resolve(dbStorage.room.find(room => room.id === id))
            } catch (error) {
                reject(errorsConst.roomErrors.queries.getById);
            }
        });
    },
}
