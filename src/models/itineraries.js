const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    date: Date,
    activities: [{
        description: String,
        time: String,
        location: String,
    }]
})

const itinerarySchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    days: [daySchema],
})

module.exports = mongoose.model('Itinerary', itinerarySchema)