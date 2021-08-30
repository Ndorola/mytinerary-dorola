const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.export = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY 
}, (payload, done)=> {
    console.log(payload)
    User.findOne({_id: payload._doc._id})
    .then(respuesta => {
    if(!respuesta) {
        return done(null, false) //null : no hubo error
    } else {
        return done(null, respuesta)
    }
    })
    .catch(error => done(error, false)) 
}))