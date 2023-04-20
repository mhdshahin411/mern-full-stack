const teamSchema = require ("../../models/teamSchema")

const deleteteam =async (req,res)=>{
    
    const userid = req.params.id;
    const user = await teamSchema.findByIdAndDelete({_id:userid})
    if(user) {
        res.json("deleted")
    }else{
        res.json("not deleted")
    }
}

module.exports = deleteteam