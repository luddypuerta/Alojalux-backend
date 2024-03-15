// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { hotelQuery } = require('../models/index.queries');


module.exports = {
    getHotels: async (_, res) => {
        try {
            const hotels = await hotelQuery.getAllHotelsQuery();
            return responseHelpers.responseSuccess(res, hotels);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getHotel: async (req, res) => {
        const { id } = req.params;
        try {
        const user = await hotelQuery.getHotelIDQuery(id);
        return responseHelpers.responseSuccess(res, user );
        } catch (error) {
            
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createHotel: async (req, res) => {
        try {
            const hotelData = req.body;
            hotelData.id = uuidv4();
            await hotelQuery.createQuery({hotelData});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    updateHotel: async (req, res) => {
        const { id } = req.params;
        try {
            await hotelQuery.updateQuery(id, {...req.body});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}