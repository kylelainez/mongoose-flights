const mongoose = require('mongoose');

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
			return new Date(year, month, day, hour - 8, minute);
		}
	}
});

module.exports = mongoose.model('Flights', flightSchema);
