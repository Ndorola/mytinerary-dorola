const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activities: [{img: String, title: String}],
    itineraryId: {type: mongoose.Types.ObjectId, ref: 'itinerary'}
})

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity