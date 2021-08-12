const express = require('express')
const cors = require('cors');
const { default: City } = require('./frontend/src/pages/City');

const app = express()

app.use(cors())

const cities = [
    {id: "1", img: 'Bangkok.jpg', name: 'Bangkok', description: 'lalalalala'},
    {id: "2", img: 'London.png', name: 'London', description: 'lalalalala'},
    {id: "3", img: 'Paris.png', name: 'Paris', description: 'lalalalala'},
    {id: "4", img: 'Bali.png', name: 'Bali', description: 'lalalalala'},
    {id: "5", img: 'Iguazu.png', name: 'Puerto Iguazú', description: 'lalalalala'},
    {id: "6", img: 'Cafayate.png', name: 'Cafayate', description: 'lalalalala'},
    {id: "7", img: 'Calafate.png', name: 'Calafate', description: 'lalalalala'},
    {id: "8", img: 'VillaLaAngostura.png', name: 'Villa la Angostura', description: 'lalalalala'},
    {id: "9", img: 'RioDeJaneiro.png', name: 'Rio de Janeiro', description: 'lalalalala'},
    {id: "10", img: 'Roma.png', name: 'Rome', description: 'lalalalala'},
    {id: "11", img: 'NewYork.png', name: 'New York', description: 'lalalalala'},
    {id: "12", img: 'Miami.png', name: 'Miami', description: 'lalalalala'}
];

app.get('/cities/data', (req, res) => {
    console.log("nicole ponete las pilas")
    res.json({response: cities })
})

app.get('/city/data:id', (req, res) => {
    const city = cities.find(city => city.id === parseInt(req.params.id))
    res.json({response: city })
})


app.listen(4000, () => console.log('Server listening on port 4000'))