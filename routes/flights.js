const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.addFlight);

module.exports = router;
