const { response, request } = require('express')
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
            var itineraries = await Itinerary.find({cityId: city}).populate({path:"comments.userId", select:"url name"})
            res.json({success: true, response: itineraries})
        } catch(error) {
            res.json({success: false, response: "No results found"})
        }
    },

    addLike: async (req, res) => {
        try {
            let itinerary = await Itinerary.findOne({_id: req.params.id})
            if(itinerary.likes.includes(req.user._id)){
                let dontLike = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$pull: {likes: req.user._id}}, {new: true})
                console.log(res)
                res.json({success: true, response: dontLike.likes})
                console.log(dontLike.likes)
            } else {
                let like = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {likes: req.user._id}}, {new: true})
                console.log(res)
                res.json({success: true, response: like.likes})
                console.log(like.likes)
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    
    sendComment: async (req, res) => {
        Itinerary.findOneAndUpdate({ _id: req.params.id}, {$push: {comments: {comment: req.body.comment, userId: req.body.userId}}}, {new: true}).populate({path:"comments.userId", select:"url name"})
        .then((itinerary) => res.json({ success: true, response: itinerary.comments}))
        .catch((error) => res.json({ success: false, response: error}));
    },

    deletComment: async (req, res) => {
        try {
            var deletComments = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$pull: {_id: req.body.commentId}})
            if(deletComments){
                res.json({success: true, response: deletComments})
            }else {
                throw new Error ('no match')
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },


}

module.exports = itinerariesControllers