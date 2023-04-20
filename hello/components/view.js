const bookdata = require("../models/bookSchema")

const viewdata = async (req,res) =>{
  const user = req.params.id
  const userdetails =await bookdata.find({_id:user})
  res.json(userdetails)
}

module.exports = viewdata;