const customer =require("../../models/custumSchema")

const deletecustomer = async (req,res) =>{
    
    const userid =req.params.id
    const user = await customer.findByIdAndRemove({_id:userid})
    if(user){
        res.json("deleted")
    }else{
        res.json("not deleted")
    }
}


module.exports = deletecustomer