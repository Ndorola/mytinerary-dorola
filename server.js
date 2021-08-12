const express = require('express')
const cors = require('cors');
// require('dotenv').config()
// primero dotenv desoues config data base

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

app.get('/api/cities', (req, res) => {
    console.log("niqui ponete las pilas")
    res.json({response: cities })
})

app.get('/api/cities/:id', (req, res) => {
    const city = cities.find(city => city.id === req.params.id)
    res.json({response: city })
    console.log(city)
})


app.listen(4000, () => console.log('Server listening on port 4000'))