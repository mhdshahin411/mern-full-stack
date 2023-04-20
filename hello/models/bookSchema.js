const mongoose =require("mongoose")

const dataz = mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    Country:{type:String},
    Year:{type:String},
    Availability:{type:String}

})

const bookdata = mongoose.model("bookdata",dataz)

module.exports= bookdata