const customer = require("../../models/custumSchema")

const viewcustomer = async (req,res)=>{
    const user = req.params.id
    const userdetatils = await customer.find({_id:user});
    res.json(userdetatils);
}

module.exports = viewcustomer