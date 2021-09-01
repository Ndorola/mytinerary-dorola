const { response } = require('express')
const Activity = require('../models/Activity')

const activitiesControllers = {

    getAllActivities: async (req, res) => {
        try {
            let activity = await Activity.find()
            if(activity > 0) {
                res.json({success: true, response: activity})
            } else {
                throw new Error ('No activities found')
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    enterActivity: (req, res) => {
        const activityToEnter = new Activity({
            activities: req.body.activities,
            itineraryId: req.body.itineraryId
        })
        activityToEnter.save()
        .then(() => res.json({success:true}))
        .catch(error => res.json({success: false, response: error}))
    },

    getActivity: async (req, res) => {
        try {
            var activity = await Activity.findOne({_id: re.params.id})
            if(activity !== null) {
                res.json({success: true, response: activity})
            } else {
                throw new Error ('No activity found')
            }
        } catch (error) {
            res.json({success:false, response:error.message})
        }
    },

    deleteActivity:  async (req, res) => {
        try {
            var activity = await Activity.findOneAndDelete({_id: req.params.id})
            if(activity !== null) {
                res.json({success: true, response: activity})
            } else {
                throw new Error ('No activity found')
            }
        } catch (error) {
            res.json({success:false, response: error.message})
        }
    },

    modifyActivity: async (req, res) => {
        try {
            var activity = await Activity.findByIdAndUpdate({_id: req.params.id}, {...req.body})
            if(activity !== null) {
                res.json({success: true})
            } else {
                throw new Error ('No activity found')
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },
    
    modifyActivities: async (req, res) => {
        try {
            var activity = await Activity.updateMany({}, {...req.body}, {new: true})
            if(activity !== null) {
                res.json({success: true, response: itinerary})
            } else {
                throw new Error ('No activities found')
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    getActivityByIt: async (req, res) => {
        const itinerary = req.params.id
        try {
            let activities = await Activity.findOne({itineraryId: itinerary})
            res.json({success: true, response: activities })
        } catch (error) {
            res.json({success: false, response: 'No activity found'})
        }
    } 
}

module.exports = activitiesControllers