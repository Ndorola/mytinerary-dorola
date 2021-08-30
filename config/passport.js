const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
require('dotenv').config()

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY
}, (payload, done) => {
    console.log('antes del findone')
    console.log(payload)
    User.findOne({_id: payload._doc._id})
    .then(response => {
        if (!response) {
            return done(null, false) //error null y  usuario false
        } else {
            return done(null, response) //error null y  usuario ok
        }
    })

    .catch(error => done(error, false),
    console.log('catch passport')) //error y false usuario
}))
