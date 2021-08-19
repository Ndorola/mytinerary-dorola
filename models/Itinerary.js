const mongoose = require('mongoose')
// const City = mongoose.model('City')

const itinerarySchema = new mongoose.Schema({
    user: {type: Object, required: true},
    itinerary: {type: Object},
    hashtags: {type: Array},
    price: {type: Number},
    time: {type: Number},
    likes: {type: Number},
    comments: {type: Object},
    images: {type: Object},
    // city: {type: Schema.ObjectId, ref: 'City'}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary