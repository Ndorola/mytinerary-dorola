const { response } = require('express')
const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')

const usersControllers = {
    addUser: async(req, res) => {
        const { name, lastName, email, username, password, url, country } = req.body

        let hashedPass = bcryptjs.hashSync(password)

        const addNewUser = new User ({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: hashedPass,
            url: req.body.url,
            country: req.body.country,
        })
        
        try {
            let registeredUser = await User.findOne({username: username, email: email})
            if(!registeredUser){
                res.json({success: true, response: 'New user registered successfully'})
                await addNewUser.save()
            } else {
                throw new Error ('This user is already registered')
            }
        } catch(error) {
            res.json({succes: false, response: error.message})
        }
    },

    enterUser : async (req, res) => {
        const { email, username, password } = req.body
        try {
            let registeredUser = await User.findOne({username: username} || {email: email})
            if (registeredUser) {
                if(bcryptjs.compareSync(password, registeredUser.password)) {
                    res.json({success: true, response: 'Successful registered user'})
                } else {
                    throw new Error ('Incorrect username or password')
                }
            } else {
                throw new Error ('Incorrect username or password')
            }
        } catch(error){
            res.json({success: false, error: error.message})
        }
    }
}

module.exports = usersControllers

//instalamos bcryptjs