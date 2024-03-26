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

// Pre-save hook
itinerarySchema.pre('save', function(next) {
    this.days = [] // This will clear existing days to avoid duplicates if the document is being updated

    const start = new Date(this.startDate)
    const end = new Date(this.endDate)

    for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        this.days.push({ date: new Date(day) }) // Creates a daySchema subdocument for each day
    }

    next() // Save the document
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary