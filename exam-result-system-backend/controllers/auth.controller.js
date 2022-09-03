const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

/// Signup  

/**
 *  Faculty : 
 *      Fields :
 * 
 *  1. Name 
 *  2. password
 *  3. Email 
 *  4. user type
 *  5. College
 *    
 */

async function signup( req ,res ){

    const FacultyDetails = {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        usertype: req.body.usertype,
        college : req.body.college
    }

    try {
        const addedUser = await User.create( FacultyDetails );

        const newFaculty = {
            name : addedUser.name,
            password : addedUser.password,
            email : addedUser.email,
            usertype : addedUser.usertype,
            college : addedUser.college
        }

        res.status(201).send({
            status : 201,
            message: `${ addedUser.name } , Added Successully !`,
            user: newFaculty
        });

    }catch( error ){
        console.log( error );
        res.status(500).send({
            message : "Internal server Error"
        })
    }
}

module.exports = {
    signup
}