// Helpers
const { errorsConst } = require('../constants/index.constants');
const { responseHelpers } = require('../helpers/index.helpers')

// Models - Queries
const { userQuery } = require('../models/index.queries');

module.exports = {
    login: async (req, res) => {
        const { name, password } = req.body
        try {
            const user = await userQuery.getUserNamePasswordQuery(name, password);
            if (!user) return responseHelpers.responseError(res, 404, errorsConst.userErrors.userNotExist);
            const userFound = {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber
            }
            return responseHelpers.responseSuccess(res, userFound);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}