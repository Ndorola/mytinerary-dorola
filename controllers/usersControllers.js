const { response } = require('express')
const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

const usersControllers = {
    addUser: async(req, res) => {
        const { name, lastName, email, password, url, country, google } = req.body

        let hashedPass = bcryptjs.hashSync(password)

        const addNewUser = new User ({
            name,
            lastName,
            email,
            password: hashedPass,
            url,
            country,
            google,
        })
        try {
            let registeredUser = await User.findOne({email: email})
            if(!registeredUser){
                await addNewUser.save()
                const token = jwt.sign({...addNewUser}, process.env.SECRETORKEY)
                res.json({success: true, response: {name: addNewUser.name, url: addNewUser.url, token}})
            } else {
                throw new Error ('This user is already registered')
            }
        } catch(error) {
            res.json({succes: false, response: error.message})
        }
    },

    enterUser : async (req, res) => {
        const { email, password, signInGoogle } = req.body
        try {
            let registeredUser = await User.findOne({email: email})
            if (registeredUser) {
                if(registeredUser.google && !signInGoogle) {res.json({success: false, error: 'You create account with Google, please sign in with them'})}
                if(bcryptjs.compareSync(password, registeredUser.password)) {
                    const token = jwt.sign({...registeredUser}, process.env.SECRETORKEY)
                    res.json({success: true, response: {name: registeredUser.name, url: registeredUser.url, token}})
                } else {
                    res.json({success: false, response: 'Incorrect email or password'}) 
                }
            } else {
                res.json({success: false, response: 'Incorrect email or password'})
            }
        } catch(error){
            res.json({success: false, response: 'Something went wrong, try again later'})
        }
    },

    verifytoken: (req, res) => {
        console.log(req.user)
        res.json({name: req.user.name, url: req.user.url})
    }
}

module.exports = usersControllers
