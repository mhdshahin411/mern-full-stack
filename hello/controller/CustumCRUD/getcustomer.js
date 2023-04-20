const customer = require("../../models/custumSchema")

const getcustomer = async (req,res)=>{
    const {name, email, addressline1, addressline2, city, state, pincode }=req.body
    const user = await customer.find({});
    res.json(user);
}

module.exports = getcustomer