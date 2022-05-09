const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true,
        default: '',
    },
    role:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    IDcard:{
        type: Number,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    schedules: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'Schedule' }
    ],
    Contract:[
        {type:mongoose.SchemaTypes.ObjectId, ref:'Contract'}
    ]
},

{
    timestamps: true
})

User.pre(/^find/, function (next) {
    this.populate({
        path: 'schedules',
        select: '_id',
    });
    next();
});
module.exports =mongoose.model('User', User)