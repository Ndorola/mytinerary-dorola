const { response } = require('express')
const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')

const usersControllers = {
    addUser: async(req, res) => {
        const { name, lastName, email, username, password, url, country } = req.body

        let hashedPass = bcryptjs.hashSync(password)

        const addNewUser = new User ({
            name,
            lastName,
            email,
            username,
            password: hashedPass,
            url,
            country,
        })
        try {
            let registeredUser = await User.findOne({email: email})
            if(!registeredUser){
                await addNewUser.save()
                res.json({success: true, response: addNewUser.name})
            } else {
                throw new Error ('This user is already registered')
            }
        } catch(error) {
            res.json({succes: false, response: error.message})
        }
    },

    enterUser : async (req, res) => {
        const { email, password } = req.body
        try {
            let registeredUser = await User.findOne({email: email})
            if (registeredUser) {
                if(bcryptjs.compareSync(password, registeredUser.password)) {
                    res.json({success: true, response: registeredUser})
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