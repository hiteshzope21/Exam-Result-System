const jwt = require("jsonwebtoken");




function isToken(req, res , next){

    const token = req.headers["Authorisation"];

    if( !token ){
        return res.status(403).send({
            message : "Token is not Provided"
        })
    }


    jwt.verify(token, process.env.SECRET , (err, val )=>{
        if(err){
            return res.status(401).send( "UnAuthorised");
        }
        req.id = val.id;
        next();

    })
};

module.exports = {
    isToken ,
}
