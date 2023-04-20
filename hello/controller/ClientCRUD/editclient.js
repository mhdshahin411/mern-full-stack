const client = require('../../models/clientSchema')


const editclient =async (req,res)=>{
const { name, username, email, status, role, phonenumber } = req.body
const userid = req.params.id
const user = await client.findByIdAndUpdate(userid,{name, username, email, status, role, phonenumber})
if(user){
    res.json("client updated")
}else{
    res.json("not updated")
}

}

module.exports = editclient