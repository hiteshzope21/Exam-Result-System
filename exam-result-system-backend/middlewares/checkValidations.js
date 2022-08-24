/**
 *  This file contains the Custom Middleewares
 */

const User = require("../models/user.model");

checkIncomingRequest = async (req, res , next  ) => {
    
    const data = req.body;

    /** validation for user Name  */
    if( !data.name ){
        return res.status(400).send({
            message : "Name is Not Provided !"
        })
    }

    /** Check if the email is present  */
    const email = await User.findOne({email : req.body.email});

    if( email != null ){
        return res.status(400).send({
            message : "User with Email already exist"
        })
    }

    /** validation for Email  */
    if( !data.name ){
        return res.status(400).send({
            message : "EmailID is Not Provided !"
        })
    }
    /** validation for user Name  */
    if( !data.name ){
        return res.status(400).send({
            message : "Password is Not Provided !"
        })
    }

    next();
}


module.exports = {
    checkIncomingRequest
}