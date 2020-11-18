const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
	},
	arrival: {
		type: Date
	}
});

const flightSchema = new mongoose.Schema({
	airline: {
		type: String,
		enum: ['American', 'Delta', 'Southwest', 'United']
	},
	airport: {
		type: String,
		enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
		default: 'DEN'
	},
	flightNo: {
		type: Number,
		required: true,
		min: 10,
		max: 9999
	},
	departs: {
		type: Date,
		default: () => {
			let date = new Date();
			let year = date.getFullYear() + 1;
			let month = date.getMonth();
			let day = date.getDate();
			let hour = date.getHours();
			let minute = date.getMinutes();
			return new Date(year, month, day, hour, minute);
		}
	},
	destinations: [destinationSchema]
});

module.exports = mongoose.model('Flights', flightSchema);
