const sermodel = require("../models/newSchema");
const jwt =require("jsonwebtoken")


const log = async (req,res) => {
  const { email, password } = req.body;
  
  const userdetails = await sermodel.findOne({ email, password });

  if (userdetails && await bcrypt.compare(password,userdetails.password)){
   
     
    console.log({
      
      message:"Login success",
      Token:generatetoken(check._id)
  
    })
  }else{
  res.json("failed");
}};



const generatetoken =(id)=>{
return jwt.sign({id},"shah",{
    expiresIn:"1d"
})
}
module.exports = log


