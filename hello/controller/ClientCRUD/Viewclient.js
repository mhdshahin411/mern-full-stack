const clients = require("../../models/clientSchema");

const viewclient =async (req,res) =>{
    const userid = req.params.id;
    const user = await clients.find({_id:userid})
    res.json(user)
}

module.exports = viewclient