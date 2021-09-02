const { response } = require('express')
const Itinerary = require('../models/Itinerary')
const User = require('../models/User')

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
            likesCount: req.body.likesCount,
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
            var itinerary = await Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
            if(itinerary !== null) {
                res.json({success: true})
            } else {
                throw new Error ("No results found")
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    modifyItineraries: async (req, res) => {
        try {
            var itinerary = await Itinerary.updateMany({}, {...req.body}, {new: true})
            if(itinerary !== null) {
                res.json({success: true, response: itinerary})
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
            var itineraries = await Itinerary.find({cityId: city})
            res.json({success: true, response: itineraries})
        } catch(error) {
            res.json({success: false, response: "No results found"})
        }
    },

    addLike: async (req, res) => {
        try {
            var likes = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {likes: req.body}})
            res.json({success: true, response: likes})
            console.log(likes)
        } catch (error) {
            res.json({success: false, pesponse: error})
        }
    },
    
    updateComments: async (req, res) => {
            
        try {
            var pushComments = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body.comments}})
            res.json({success: true, response: pushComments})
        } catch (error) {
            res.json({success: false, response: error})
        }
    },

}

module.exports = itinerariesControllers