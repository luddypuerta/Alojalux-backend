// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getHotelIDQuery: (id) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.hotel.find(hotel => hotel.id === id))
        })
        } catch {
            throw errorsConst.hotelErrors.queries.getById
        }
    },
    getAllHotelsQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.hotel)
            })
        } catch {
            throw errorsConst.hotelErrors.queries.getAll
        }
    },
    createQuery: (data) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.hotel.push(data))
        })
        } catch {
            throw errorsConst.hotelErrors.queries.create
        }
    },
    updateQuery: (id, data) => {
        try {
            return new Promise((resolve, reject) => {
                function updateElementById(id, dataToUpdate, tableData) {
                    const index = tableData.findIndex(objeto => objeto.id == id);

                    if (index !== -1)
                        tableData[index] = Object.assign({}, tableData[index], dataToUpdate);
                    else
                        reject(errorsConst.hotelErrors.hotelNotExist);
                }

                updateElementById(id, data, dbStorage.hotel);
                resolve(null)
        })
        } catch {
            throw errorsConst.hotelErrors.queries.update
        }
    }
}