const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);
