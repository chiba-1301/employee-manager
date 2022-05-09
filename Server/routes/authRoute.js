const express = require("express")
const router = express.Router();
const Validator = require('../authenticator/index')
const Controller = require('../Controller/authController')
const authenticator = require('../authenticator/authenticator')
const jwtService = require("../services/jwt.service")

router.get(
    "/getAuth",
    jwtService.verify,
    Controller.getAuth 
);
router.post(
    "/register",
     Validator.body(authenticator.register),
     Controller.registerEmployee
);

router.post(
    "/login",
    Validator.body(authenticator.login),
    Controller.login
)
module.exports = router