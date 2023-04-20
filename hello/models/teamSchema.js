const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    dateofbirth:{type:String},
    gender:{type:String},
    description:{type:String},
    role:{type:String},
    phonenumber:{type:String},
    image:{type:String},
    submit:{type:String}


})

const teamSchema =mongoose.model("teamdata",user)

module.exports = teamSchema 