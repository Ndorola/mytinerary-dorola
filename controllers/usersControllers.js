const { response } = require('express')
const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

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
                const token = jwt.sign({addNewUser}, process.env.SECRETORKEY)
                res.json({success: true, response: {name: addNewUser.name, url: addNewUser.ur, token}})
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
                    const token = jwt.sign({registeredUser}, process.env.SECRETORKEY)
                    res.json({success: true, response: {name: registeredUser.name, url: registeredUser.url, token}})
                } else {
                    throw new Error ('Incorrect email or password')
                }
            } else {
                throw new Error ('Incorrect email or password')
            }
        } catch(error){
            res.json({success: false, error: error.message})
        }
    }
}

module.exports = usersControllers

//instalamos bcryptjs