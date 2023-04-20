const customer = require ("../../models/custumSchema")


const editcustomer = async (req,res)=>{
    const {name, email, addressline1, addressline2, city, state, pincode }=req.body;
    const userid = req.params.id;
    const user = await customer.findByIdAndUpdate(userid ,{name, email, addressline1, addressline2, city, state, pincode })
    if(user){
        res.json("updated")
    }else{
        res.json("not updated")
    }
}

module.exports = editcustomer;