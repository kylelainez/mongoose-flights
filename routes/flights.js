const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/new_ticket', flightsCtrl.newTicket);
router.put('/:id', flightsCtrl.addDest);
router.post('/', flightsCtrl.addFlight);
router.post('/:id/new_ticket', flightsCtrl.addTicket);
router.delete('/:id/ticket/:ticket_id', flightsCtrl.deleteTicket);
router.delete('/:id/:destination', flightsCtrl.deleteDest);

module.exports = router;
