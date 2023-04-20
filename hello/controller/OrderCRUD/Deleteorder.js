const orderSchema = require("../../models/orderSchema")

const deleteorder =async (req,res)=>{
    const{name,age,address,tags,action}=req.body
    const userid = req.params.id
    const user = await orderSchema.findByIdAndRemove(userid,{name,age,address,tags,action})
    if(user){
        res.json("deleted")
    }else{
        res.json("not deleted")
    }
}

module.exports = deleteorder