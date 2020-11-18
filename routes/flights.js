const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.put('/:id', flightsCtrl.addDest);
router.post('/', flightsCtrl.addFlight);
router.delete('/:id/:destination', flightsCtrl.deleteDest);
module.exports = router;
