const jwt =require("jsonwebtoken")

const tok= async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,"shahin12344");
            next();
        }catch(error){
            res.status(401).send("no token");
            throw new Error("not authorization")
        }
    
    }

    if(!token){
        res.status(401).send("no tokens")
        throw new Error("not authorised ");
    }
}

module.exports=tok;