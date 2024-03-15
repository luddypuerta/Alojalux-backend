// Controllers
const { hotelController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/', hotelController.createHotel); 

router.get('/', hotelController.getHotels);

router.get('/:id', hotelController.getHotel);

router.patch('/:id', hotelController.updateHotel);

module.exports = router