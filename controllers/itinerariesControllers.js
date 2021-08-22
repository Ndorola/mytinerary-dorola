const { response } = require('express')
const Itinerary = require('../models/Itinerary')

const itinerariesControllers = {

    getAllItineraries: async (req, res) => {
        try {
            var itinerary = await Itinerary.find()
            if(itinerary.length > 0){
                res.json({success: true, response: itinerary })
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({succes: false, response: error.message})
        }
    },

    enterItinerary: (req, res) => {
        const itineraryToEnter = new Itinerary({
            user: req.body.user,
            itinerary: req.body.itinerary,
            hashtags: req.body.hashtags,
            price: req.body.price,
            time: req.body.time,
            likes: req.body.likes,
            comments: req.body.comments,
            images: req.body.img,
            cityId: req.body.cityId
        })
        itineraryToEnter.save()
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, error:err }))
    },

    getAItinerary: async (req, res) => {
        try {
            var itinerary = await Itinerary.findOne({_id: req.params.id})
            if(itinerary !== null) {
                res.json({success:true, response: itinerary})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success:false, response: error.message})
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            var itinerary = await Itinerary.findOneAndDelete({_id: req.params.id})
            if(itinerary !== null) {
                res.json({success:true, response: itinerary})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success:false, response: error.message})
        }
    },

    modifyItinerary: async (req, res) => {
        try {
            var itinerary = itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
            if(itinerary !== null) {
                res.json({success: true})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    getItinerariesByCity: async (req, res) => {
        const city = req.params.city
        try {
            let itineraries = await Itinerary.find({cityId: city})
            res.json({success: true, response: itineraries})
        } catch(error) {
            res.json({success: false, response: "No results found"})
        }
    }
}

module.exports = itinerariesControllers