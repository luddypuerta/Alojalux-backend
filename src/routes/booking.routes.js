// Controllers
const { bookingController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.get('/', bookingController.getBookings);

router.post('/', bookingController.createBookings); 

module.exports = router