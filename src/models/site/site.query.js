// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getSiteByIdQuery: (id) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.site.find(user => user.id === id))
        })
        } catch {
            throw errorsConst.siteErrors.queries.getById
        }
    },
    getAllSitesQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.site)
            })
        } catch {
            throw errorsConst.siteErrors.queries.getAll
        }
    },
    getFilterSiteQuery: (valueFilter = "") => {
        try {
            return new Promise((resolve, _) => {
                const filteredSites = dbStorage.site.filter(item => {
                    const normalizedSiteName = item.site.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                    return normalizedSiteName.startsWith(valueFilter.toLowerCase());
                });
                resolve(filteredSites);
            })
        } catch {
            throw errorsConst.siteErrors.queries.getFilter
        }
    },
}