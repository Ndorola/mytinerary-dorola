const express = require('express')
const citiesControllers = require('../controllers/citiesControllers')
const router = express.Router()

router
.route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.enterCity)

router
.route('/cities/:id')
.get(citiesControllers.getACity)
// .delete(citiesControllers.borrarInvitados)

module.exports = router



