const express = require('express')
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const router = express.Router()

router
.route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.enterCity)

router
.route('/cities/:id')
.get(citiesControllers.getACity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

router
.route('/itineraries')
.get(itinerariesControllers.getAllItineraries)
.post(itinerariesControllers.enterItinerary)

router
.route('/itinerary/:id')
.get(itinerariesControllers.getAItinerary)
.delete(itinerariesControllers.deleteItinerary)
.put(itinerariesControllers.modifyItinerary)

router
.route('/itineraries/:city')
.get(itinerariesControllers.getItinerariesByCity)

module.exports = router



