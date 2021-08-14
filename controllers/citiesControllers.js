const City = require('../models/City')

// const cities = [
//     {id: "1", img: 'Bangkok.jpg', name: 'Bangkok', description: 'lalalalala'},
//     {id: "2", img: 'London.png', name: 'London', description: 'lalalalala'},
//     {id: "3", img: 'Paris.png', name: 'Paris', description: 'lalalalala'},
//     {id: "4", img: 'Bali.png', name: 'Bali', description: 'lalalalala'},
//     {id: "5", img: 'Iguazu.png', name: 'Puerto Iguazú', description: 'lalalalala'},
//     {id: "6", img: 'Cafayate.png', name: 'Cafayate', description: 'lalalalala'},
//     {id: "7", img: 'Calafate.png', name: 'Calafate', description: 'lalalalala'},
//     {id: "8", img: 'VillaLaAngostura.png', name: 'Villa la Angostura', description: 'lalalalala'},
//     {id: "9", img: 'RioDeJaneiro.png', name: 'Rio de Janeiro', description: 'lalalalala'},
//     {id: "10", img: 'Roma.png', name: 'Rome', description: 'lalalalala'},
//     {id: "11", img: 'NewYork.png', name: 'New York', description: 'lalalalala'},
//     {id: "12", img: 'Miami.png', name: 'Miami', description: 'lalalalala'}
// ];

const citiesControllers = {

    getAllCities: (req, res) => {
        City.find()
        .then((cities) => res.json({response: cities }))
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
    },

    getACity: (req, res) => {
        const city = cities.find(city => city.id === req.params.id)
        res.json({response: city })
        console.log(city)
    },

    // deleteCity: (req, res) => {
    //     cities = cities.filter(city => city.id !== parseInt(req.params.id)
    //     )        
    //     res.json({success: true})
    // }
}

module.exports = citiesControllers