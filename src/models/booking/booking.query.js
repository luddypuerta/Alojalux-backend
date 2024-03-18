// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

//Libraries
const crypto = require('crypto');

module.exports = {
    getAllBookingsQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.booking)
            })
        } catch {
            throw errorsConst.bookingErrors.queries.getAll
        }
    },
    createBookingQuery: (data) => {
        try {
            const updatedGuests = data.guests.map((guest) => {
                const id = parseInt(crypto.randomUUID().replace(/-/g, ''), 16);
                return { ...guest, id: id };
            });
    
            const updatedData = { ...data, guests: updatedGuests };
    
            return new Promise((resolve, _) => {
                dbStorage.booking.push(updatedData);
                resolve();
            });
        } catch {
            throw errorsConst.bookingErrors.queries.create;
        }
    },

}