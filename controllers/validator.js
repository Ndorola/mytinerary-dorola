const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().trim().min(2).max(15).pattern(new RegExp(/^[a-z ,.'-]+$/i)).required().messages({
            'any.custom':'Enter your name',
            'string.empty':'Enter your name',
            'string.min':'Enter a name with more than 2 characters',
            'string.max':'Enter a maximum name of 15 characters',
            'string.pattern.base':'Your name should not contain numbers'
        }),
        lastName: joi.string().trim().min(2).max(15).pattern(new RegExp(/^[a-z ,.'-]+$/i)).required().messages({
            'any.custom':'Enter your last name',
            'string.empty':'Enter your last name',
            'string.min':'Enter a last name with more than 2 characters',
            'string.max':'Enter a maximum last name of 15 characters',
            'string.pattern.base':'Your last name should not contain numbers'
        }),
        email: joi.string().trim().email().required().messages({
            'any.custom':'Enter your email',
            'string.empty':'Enter your email',
            'string.email':'Invalid email. You must enter for example name@gmail.com'
            
        }),
        password: joi.string().min(8).required().messages({
            'string.empty':'Enter a password',
            'string.pattern.base':'The password must contain at least eight characters, at least one letter, one number and a special character'
        }),
        url: joi.string().required().messages({
            'string.empty':'Enter a photo url'
        }),
        country: joi.string().optional(),
        google: joi.boolean(),
    })
    
    const validation = schema.validate(req.body, {abortEarly: false})
    if(!validation.error) {
        next()
    } else {
        res.json({success: false, error: validation.error.details})
    }
}

module.exports = validator