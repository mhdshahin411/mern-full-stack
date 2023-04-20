const bookdata =require ("../models/bookSchema.js")

const deletebook = async (req,res)=>{
    const {Name,Author,Country,Year,Availability}=req.body;
    const userid = req.params.id;
    const user =await bookdata.findByIdAndRemove(userid,{Name,Author,Country,Year,Availability})
    if(user){
        res.json("data deleted")
    }else{
        res.json("data not removed")
    }
}

module.exports = deletebook