// Helpers
const { responseHelpers } = require('../helpers/index.helpers')
const { sendBookingConfirmationEmail } = require('../helpers/email.helper')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { bookingQuery } = require('../models/index.queries');

module.exports = {
    getBookings: async (_, res) => {
        try {
            const site = await bookingQuery.getAllBookingsQuery();
            return responseHelpers.responseSuccess(res, site);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createBookings: async (req, res) => {
        try {
            const bookingData = req.body;
            const bookingId = uuidv4();
            bookingData.key = bookingId;

            await bookingQuery.createBookingQuery(bookingData);
            await sendBookingConfirmationEmail(bookingData);

            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
}