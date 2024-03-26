const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    description: String,
    time: String,
    location: String,
    cost: {
        type: Number,
        set: v => Math.round(v * 100) / 100, 
        validate: {
            validator: function(v) {
                return (v * 100) % 1 === 0
            },
            message: '{VALUE} is not a valid currency amount. Please use a value with up to two decimal places.'
        }
    },
    note: String,
})
// The logic above will round any entered numbers to the hundredth decimal before running a validation to make sure that it's a legit number.
// It works by multiplying the submitted number by 100, then rounds to the nearest whole number, then divides by 100 again to go back to the original amount, which is now rounded to the hundredth decimal.


const daySchema = new mongoose.Schema({
    date: Date,
    activities: [activitySchema]
})

const itinerarySchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    days: [daySchema],
    vibe: {
        type: String,
        enum: ['adventure', 'romantic', 'family-friendly'],
    } // Front end needs to implement a drop-down menu for each of the 3 vibe selections, and an unspecified option since we're not requiring it.
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