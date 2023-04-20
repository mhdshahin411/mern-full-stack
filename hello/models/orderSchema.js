const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{type:String},
    age:{type:String},
    address:{type:String},
    tags:{type:String},
    action:{type:String},    
})

const orderSchema =mongoose.model("Orderdata",user)

module.exports =orderSchema