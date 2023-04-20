const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{type:String},
    username:{type:String},
    email:{type:String},
    status:{type:String},
    role:{type:String},
    phonenumber:{type:String}
})

const clients =mongoose.model("clientdata",user)

module.exports = clients