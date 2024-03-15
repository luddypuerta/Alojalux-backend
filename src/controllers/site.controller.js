// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

// Models - Queries
const { siteQuery } = require('../models/index.queries');

module.exports = {
    getSites: async (_, res) => {
        try {
            const site = await siteQuery.getAllSitesQuery();
            return responseHelpers.responseSuccess(res, site);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getSite: async (req, res) => {
        const { id } = req.params;
        try {
        const site = await siteQuery.getSiteByIdQuery(id);
        return responseHelpers.responseSuccess(res, site );
        } catch (error) {
            
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createSite: async (req, res) => {
        try {
            await siteQuery.createQuery({...req.body});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getSiteFilter: async (req, res) => {
        const { siteName } = req.query;
        try {
        const site = await siteQuery.getFilterSiteQuery(siteName);
        return responseHelpers.responseSuccess(res, site );
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
}