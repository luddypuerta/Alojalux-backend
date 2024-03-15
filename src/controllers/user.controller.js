// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

// Models - Queries
const { userQuery } = require('../models/index.queries');

module.exports = {
    getUsers: async (_, res) => {
        try {
            const users = await userQuery.getAllUsersQuery();
            return responseHelpers.responseSuccess(res, users);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        try {
        const user = await userQuery.getUserIDQuery(id);
        return responseHelpers.responseSuccess(res, user );
        } catch (error) {
            
            return responseHelpers.responseError(res, 500, error);
        }


    },
    createUser: async (req, res) => {
        try {
            await userQuery.createNewUserQuery({...req.body});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}