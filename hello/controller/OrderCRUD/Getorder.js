const orderSchema = require("../../models/orderSchema")

const getorder = async (req,res)=>{
    const {name,age,address,tags,action}=req.body;
    const user = await orderSchema.find({})
    res.json(user)
}

module.exports = getorder;