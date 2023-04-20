const orderSchema = require ("../../models/orderSchema")

const vieworder = async(req,res)=>{
    const userid= req.params.id 
    const user = await orderSchema.find({_id:userid})
    res.json(user)
}

module.exports = vieworder