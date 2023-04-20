const clients = require("../../models/clientSchema")

const deleteclient = async( req,res)=>{
    const { name, username, email, status, role, phonenumber}=req.body
    const userid =req.params.id;
    const user = await clients.findByIdAndRemove(userid,{name, username, email, status, role, phonenumber})
    if(user){
        res.json("client deleted");
    }else{
        res.json("client not deleted");
    }
}

module.exports = deleteclient