
const teamSchema = require("../../models/teamSchema")

const viewteam = async (req,res ) =>{
    const userid =req.params.id;
    const user = await teamSchema.find({_id:userid})
    res.json(user)
}

module.exports = viewteam