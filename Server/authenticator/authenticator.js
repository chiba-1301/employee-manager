const joi = require("@hapi/joi")

const checker ={
    register: joi.object().keys({
        username: joi.string().min(8).required(),
        password: joi.string().min(8).required(),       
        fullname: joi.string().min(6).required(),
        role: joi.string().min(3).required(),
        address: joi.string().min(6).required(),
        IDcard:joi.number().integer().min(10).required(),
        telephone: joi.number().integer().min(10).required(),
    }),
    login: joi.object().keys({
        username: joi.string().min(8).required(),
        password: joi.string().min(8).required(), 
    })
}

module.exports = checker

