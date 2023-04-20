const bookdata =require("../models/bookSchema")
const getbook= async (req,res)=>{
    const {Name,Author,Country,Year,Availability} =req.body
    // const {q} = req.query
    const user = await bookdata.find({})
    // const filter = user.filter(val=>val.Name.toLowerCase().includes(q))
    // res.json(filter)
    // const user = await bookdata.find({});
    res.json(user)
}


module.exports = getbook