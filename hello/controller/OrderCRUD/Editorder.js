const orderSchema = require("../../models/orderSchema")

const editorder =async(req,res)=>{
    const {name,age,address,tags,action}=req.body
    const userid = req.params.id
    const user = await orderSchema.findByIdAndUpdate(userid,{name,age,address,tags,action})
    if(user){
        res.json("updated")
    }else{
        res.json("not updated")
    }
}

module.exports = editorder