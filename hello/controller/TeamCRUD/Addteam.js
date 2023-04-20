const  teamSchema = require("../../models/teamSchema")

const addteam = async (req,res) => {
  const { name,email,dateofbirth,gender,description,role,phonenumber,image,submit } = req.body;
  const user = await teamSchema.create({name,email,dateofbirth,gender,description,role,phonenumber,image,submit})
  res.json(user)
};

module.exports = addteam