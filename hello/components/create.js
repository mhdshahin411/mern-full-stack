const bookdata =require("../models/bookSchema")

const createbook = async (req,res) =>{
    const {Name,Author,Country,Year,Availability} =req.body
    const userdetails = await bookdata.create({ Name,Author,Country,Year,Availability})
    res.json(userdetails)
}

module.exports = createbook