const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Contract = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Salary: {
        type: String,
        required: true
    },

    TimeStart: {
        type: Date,
        required: true
    },
    TimeEnd: {
        type: Date,
        required: true
    },
    employee: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'user' }
    ]

}, { timestamps: true })

module.exports = mongoose.model('Contract', Contract)