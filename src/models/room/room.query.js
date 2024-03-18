// Constants
const { db: { dbStorage } } = require('../../constants/core/core-configurations.const');
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
                resolve(dbStorage.room.filter(room => room.idHotel === id))
            } catch (error) {
                reject(errorsConst.roomErrors.queries.getById);
            }
        });
    },
    getRoomByIdHotelQuery: (id) => {

        return new Promise((resolve, reject) => {
            try {
                resolve(dbStorage.room.filter(room => room.idHotel === id))
            } catch (error) {
                reject(errorsConst.roomErrors.queries.getById);
            }
        });
    },
    createRoomQuery: (dataArray) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(dbStorage.room.push(dataArray));
            } catch {
                reject(errorsConst.roomErrors.queries.create);
            }
        });
    },

    updateRoomQuery: (roomData) => {
        return new Promise((resolve, reject) => {
            try {
                function updateElementById(id, dataToUpdate, tableData) {
                    const index = tableData.findIndex(objeto => objeto.id === id);
    
                    if (index !== -1)
                        tableData[index] = Object.assign({}, tableData[index], dataToUpdate);
                    else
                        reject(errorsConst.roomErrors.roomNotExist);
                }

                const { id } = roomData;
                updateElementById(id, roomData, dbStorage.room);

                resolve(null);
            } catch (error) {
                reject(errorsConst.roomErrors.queries.update);
            }
        });
    }
}
