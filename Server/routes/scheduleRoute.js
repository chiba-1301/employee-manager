const express = require('express')
const Controller = require('../Controller/scheduleController')
const router = express.Router()

router.delete('/deleteSchedule/:id', Controller.deleteSchedule)
router.put('/updateSchedule/:id', Controller.updateSchedule)
router.put('/updateScheduleDetail/:id', Controller.updateScheduleDetail)
router.put('/enrollSchedule/:id', Controller.enrollSchedule)
router.post('/createSchedule', Controller.createSchedule)
router.get('/getScheduleByAuthor/:FK_Author', Controller.getScheduleByAuthor)
router.get('/getSchedule/:id', Controller.getSchedule)
router.get('/getAllSchedule', Controller.getAllSchedule)



module.exports = router