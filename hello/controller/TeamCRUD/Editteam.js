const teamSchema = require("../../models/teamSchema")

const editteam =async (req,res)=>{
     const {name,email,dateofbirth,gender,description,role,phonenumber,image,submit} =req.body
    const userid =req.params.id
    const userdetails =await teamSchema.findByIdAndUpdate(userid,{ name,email,dateofbirth,gender,description,role,phonenumber,image,submit })
    if(userdetails){
        res.json("updated")
    }else{
        res.json("not updated")
    }
}
module.exports  =  editteam