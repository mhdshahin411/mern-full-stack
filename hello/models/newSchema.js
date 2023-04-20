const mongoose = require("mongoose");

const data = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String}
})

const sermodel = mongoose.model("service",data)

module.exports = sermodel