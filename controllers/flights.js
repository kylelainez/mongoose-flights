const Flights = require('../models/flights');

module.exports = {
	getAll,
	new: newFlight,
	addFlight,
	show,
	addDest,
	deleteDest
};

function getAll(req, res) {
	Flights.find({})
		.sort({ departs: 1 })
		.exec(function (err, flights) {
			res.render('flights/index', { flights });
		});
}

function newFlight(req, res) {
	const newFl = new Flights();
	res.render('flights/new', {
		date: newFl.departs.toISOString().slice(0, 16)
	});
}

function addFlight(req, res) {
	console.log(req.body);
	const flights = new Flights(req.body);
	flights.save(function (err) {
		if (err) return res.redirect('/movies/new');

		res.redirect('/flights');
	});
}

function show(req, res) {
	const arrivalAirports = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'];
	Flights.findById(req.params.id, function (err, flight) {
		flight.destinations.forEach((el, idx) => {
			if (arrivalAirports.includes(el.airport)) {
				arrivalAirports.splice(
					arrivalAirports.findIndex((elem) => elem === el.airport),
					1
				);
			}
		});
		res.render('flights/show', { flight, arrivalAirports });
	});
}

function addDest(req, res) {
	if (req.body.airport === undefined) {
		return res.redirect(`/flights/${req.params.id}`);
	}
	Flights.findById(req.params.id, function (err, flight) {
		flight.destinations.push(req.body);
		flight.destinations = flight.destinations.sort(
			(a, b) => a.arrival - b.arrival
		);
		flight.save(function (err) {
			res.redirect(`/flights/${req.params.id}`);
		});
	});
}

function deleteDest(req, res) {
	Flights.findById(req.params.id, function (err, flight) {
		flight.destinations.pull(req.params.destination);
		flight.save(function (err) {
			res.redirect(`/flights/${req.params.id}`);
		});
	});
}
