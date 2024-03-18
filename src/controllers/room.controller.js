// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const crypto = require('crypto');

// Models - Queries
const { roomQuery } = require('../models/index.queries');

module.exports = {
    getRooms: async (_, res) => {
        try {
            const site = await roomQuery.getAllRoomsQuery();
            return responseHelpers.responseSuccess(res, site);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },

    getRoomByIdHotel: async (req, res) => {
        const { id } = req.params;
        try {
            const site = await roomQuery.getRoomByIdHotelQuery(id);
            return responseHelpers.responseSuccess(res, site);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createRoom: async (req, res) => {
        try {
            let roomDataArray = req.body;

            roomDataArray = roomDataArray.map(roomData => ({
                ...roomData,
                packagesIncluded: [
                    { name: "Capacidad para 4", icon: 'FaUsers' },
                    { name: "Desayuno buffet", icon: 'FaUtensils' },
                    { name: "WiFi", icon: 'FaWifi' },
                    { name: "Parqueadero", icon: 'FaCar' },
                    { name: "3 camas", icon: 'FaBed' },
                ],
                image: "/room-suite.jpg"
            }));
            
            for (const roomData of roomDataArray) {
                roomData.id = parseInt(crypto.randomUUID().replace(/-/g, ''), 16);
                await roomQuery.createRoomQuery(roomData);
            }

            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    updateRoom: async (req, res) => {
        try {
            const roomDataArray = req.body;
    
            for (const roomData of roomDataArray) {
                await roomQuery.updateRoomQuery(roomData); 
            }
    
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },    

}