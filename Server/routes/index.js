const express = require('express')

const authRoute= require('./authRoute')

const scheduleRoute = require('./scheduleRoute')

// const adminRoute = required('./adminRoute')

const Route = express.Router()

Route.use('/auth', authRoute);

Route.use('/schedule', scheduleRoute);

// Route.use('/admin', adminRoute);

module.exports= Route;