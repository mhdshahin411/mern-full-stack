const orderSchema = require("../../models/orderSchema")

const orderadd =async (req,res) =>{
    const {name,age,address,tags,action}=req.body
    const user= await orderSchema.create({name,age,address,tags,action})
    res.json(user);

}

module.exports = orderadd;