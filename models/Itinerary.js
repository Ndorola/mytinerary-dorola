const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    user: {type: Object, required: true},
    itinerary: {type: Object},
    hashtags: {type: Array},
    price: {type: Number},
    time: {type: Number},
    likes: {type: Number},
    comments: {type: Object},
    images: {type: Object},
    cityId: {type: mongoose.Types.ObjectId, ref: 'city'}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary