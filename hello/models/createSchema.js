const mongoose =require('mongoose')

const user = mongoose.Schema({
    fristname:{type:String},
    lastname:{type:String},
    orderid:{type:String},
    product:{type:String},
    numberofproduct:{type:String},
    date:{type:String},
    street:{type:String},
    additionalinformation:{type:String},
    zipcode:{type:String},
    place:{type:String},
    code:{type:String},
    phonenumber:{type:String},
    email:{type:String},

})

const createSchema = mongoose.model("createorder",user)

module.exports = createSchema