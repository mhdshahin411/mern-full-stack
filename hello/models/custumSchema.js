const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    addressline1:{type:String},
    addressline2:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:String},
    country:{type:String}

})

const customer =mongoose.model("customerdata",user)

module.exports = customer