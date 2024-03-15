// Controllers
const { roomController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.get('/', roomController.getRooms);

router.get('/:id', roomController.getRoomById);

module.exports = router