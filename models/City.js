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

// la planificacion se hace en el SCHEMAA

// const mongoose = require('mongoose')

// const citiesSchema = new mongoose.Schema ({
//     name: {type: String}, required:true, que tipo de dato tiene que esperar MONGOO

// })

// ahora genero modelo con mayusc y en singular
// toma 2 parametros nombre y Schema

// const City = moongose.modelo('invitado, invitadoSchema')

// este modelo es quien va a manipular la base de datoss
// modificar, borrar 
// por eso lo exporto y lo importo en controladores