const bookdata = require("../models/bookSchema");

const editbook =async (req,res)=>{
     const {Name,Author,Country,Year,Availability} =req.body
    const userid =req.params.id
    const userdetails =await bookdata.findByIdAndUpdate(userid,{ Name,Author,Country,Year,Availability})
    if(userdetails){
        res.json("updated")
    }else{
        res.json("not updated")
    }
}
module.exports  =  editbook