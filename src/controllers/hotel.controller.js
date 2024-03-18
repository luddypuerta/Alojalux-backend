// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { hotelQuery } = require('../models/index.queries');


module.exports = {
    getHotels: async (req, res) => {
        try {
            let hotels = await hotelQuery.getAllHotelsQuery();

            const { location } = req.query;
            if (location) {
                const regexLocation = location.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                hotels = hotels.filter((hotel) => {
                    const normalizedHotelLocation = hotel.location.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                    return normalizedHotelLocation.includes(regexLocation);
                });
            }
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
            const hotelId = uuidv4();
            hotelData.key = hotelId;
            hotelData.image = "/hotel-default.jpg";
            await hotelQuery.createQuery(hotelData);
            return responseHelpers.responseSuccess(res, { id: hotelId });
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    updateHotel: async (req, res) => {
        try {
            const { id } = req.params;
            const key = id.toString()
            await hotelQuery.updateQuery(key, {...req.body});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}