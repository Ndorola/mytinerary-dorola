const express = require('express')
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/usersControllers')
const router = express.Router()
const passport = require("passport")
const validator = require('../controllers/validator')

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
.put(itinerariesControllers.modifyItineraries)

router
.route('/itinerary/:id')
.get(itinerariesControllers.getAItinerary)
.delete(itinerariesControllers.deleteItinerary)
.put(itinerariesControllers.modifyItinerary)

router
.route('/itineraries/:city')
.get(itinerariesControllers.getItinerariesByCity)

router
.route('/users/signup')
.post(validator, usersControllers.addUser)

router
.route('/users/signin')
.post(usersControllers.enterUser)

router
.route('/verifytoken')
.get(passport.authenticate('jwt', {session: false}), usersControllers.verifytoken)

module.exports = router



