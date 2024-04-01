import mongoose from "mongoose"

const itinerarySchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day' }],
    vibe: {
        type: String,
        enum: ['adventure', 'romantic', 'relaxing', 'family-friendly'],
    } // Front end needs to implement a drop-down menu for each of the 4 vibe selections, and an unspecified option since we're not requiring it.
})

// Pre-save hook
// itinerarySchema.pre('save', function(next) {
//     this.days = [] 
//     // This will clear existing days to avoid duplicates if the document is being updated

//     const start = new Date(this.startDate)
//     const end = new Date(this.endDate)

//     for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
//         this.days.push({ date: new Date(day) }) 
//         // Creates a daySchema subdocument for each day
//     }

//     next() 
//     // Save the document
// })

// what chatgpt says to do for a virtual hook:

itinerarySchema.virtual('computedDays').get(function() {
    const daysArray = [];
    let currentDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);

    while (currentDate <= endDate) {
        daysArray.push({
            dayNumber: daysArray.length + 1,
            date: new Date(currentDate),
            activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
        });
        currentDate.setDate(currentDate.getDate() + 1); // Increment current date by 1 day
    }

    return daysArray;
});

// Ensure virtuals are included in toJSON output
itinerarySchema.set('toJSON', { getters: true });

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary