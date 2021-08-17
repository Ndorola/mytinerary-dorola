const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    continent: {type: String},
    img: {type: String},
    idiom: {type: String},
    currency: {type: String},
    weather: {type: String},
    weatherWidget: {type: String},
    features: {type: String},
    description: {type: String},
    typicalFood: {type: String},
})

const City = mongoose.model('city', citySchema)

module.exports = City