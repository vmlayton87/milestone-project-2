import mongoose from "mongoose";

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

const Activity = mongoose.model('Activity', activitySchema)

export default Activity