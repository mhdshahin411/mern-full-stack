const client =require('../../models/clientSchema')

const getclient = async (req,res)=>{
    const { name, username, email, status, role, phonenumber } = req.body;
    
    const user = await client.find({});
    res.json(user)
}


module.exports = getclient