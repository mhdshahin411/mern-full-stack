const teamSchema= require('../../models/teamSchema')

const getteam = async (req,res)=>{
    const { name,email,dateofbirth,gender,description,role,phonenumber,image,submit} = req.body;
    const user = await teamSchema.find({});
    res.json(user)
}


module.exports = getteam