// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

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
    getRoomById: async (req, res) => {
        const { id } = req.params;
        let idNum = Number(id);
        try {
            const site = await roomQuery.getRoomByIdQuery(idNum);
            return responseHelpers.responseSuccess(res, site );
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
}