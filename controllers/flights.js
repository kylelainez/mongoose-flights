const Flights = require('../models/flights');

module.exports = {
	getAll,
	new: newFlight,
	addFlight
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
	let date = newFl.departs;
	res.render('flights/new', {
		date: date.toISOString().slice(0, 16)
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
