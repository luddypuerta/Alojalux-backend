// Controllers
const { siteController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/', siteController.createSite); 

router.get('/filter/', siteController.getSiteFilter);

router.get('/', siteController.getSites);

router.get('/:id', siteController.getSite);


module.exports = router