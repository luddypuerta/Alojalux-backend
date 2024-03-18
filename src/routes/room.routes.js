// Controllers
const { roomController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

// Get

router.get('/', roomController.getRooms);

router.get('/hotel/:id', roomController.getRoomByIdHotel);

// Post

router.post('/', roomController.createRoom); 

// Patch

router.patch('/', roomController.updateRoom);

module.exports = router