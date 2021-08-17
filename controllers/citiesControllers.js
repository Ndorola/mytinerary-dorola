const { response } = require('express')
const City = require('../models/City')

const citiesControllers = {

    getAllCities: async (req, res) => {
        try {
            var cities = await City.find()
            if(cities.length > 0){
                res.json({success: true, response: cities })
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({succes: false, response: error.message})
        }
    },

    enterCity: (req, res) => {
        const cityToEnter = new City({
            name: req.body.name,
            country: req.body.country,
            continent: req.body.continent,
            img: req.body.img,
            idiom: req.body.idiom,
            currency: req.body.currency,
            weather: req.body.weather,
            weatherWidget: req.body.weatherWidget,
            features: req.body.features,
            description: req.body.description,
            typicalFood: req.body.typicalFood,
        })
        cityToEnter.save()
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, error:err }))
    },

    getACity: async (req, res) => {
        try {
            var city = await City.findOne({_id: req.params.id})
            if(city !== null) {
                res.json({success:true, response: city})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success:false, response: error.message})
        }
    },

    deleteCity: async (req, res) => {
        try {
            var city = await City.findOneAndDelete({_id: req.params.id})
            if(city !== null) {
                res.json({success:true, response: city})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success:false, response: error.message})
        }
    },

    modifyCity: async (req, res) => {
        try {
            var city = City.findOneAndUpdate({_id: req.params.id}, {...req.body})
            if(city !== null) {
                res.json({success: true})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }
}

module.exports = citiesControllers