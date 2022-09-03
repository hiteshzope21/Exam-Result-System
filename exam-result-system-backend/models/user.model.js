const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    fathername : {
        type : String,
    },

    password : {
        type : String,
    },

    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unqiue : true
    },

    semester : {
        type : Number,
    },

    enrollment : {
        type : String,
        unique : true
    },

    course : {
        type : String,
    },
    
    branch : {
        type : String,
    },

    usertype : {
        type : String ,
        required : true,
        default : 'STUDENT',
        enum : ['STUDENT' , 'FACULTY']
    },

    mobile : {
        type : Number,
    },

    college : {
        type : String,
        required : true,
    },

    subject01 : {
        type : String,
    },

    subject02 : {
        type : String,
    },

    subject03 : {
        type : String,
    },

    subject04 : {
        type : String,
    },

    subject05 : {
        type : String,
    },

    marks01 : {
        type : Number,
    },

    marks02 : {
        type : Number,
    },

    marks03 : {
        type : Number,
    },

    marks04 : {
        type : Number,
       
    },

    marks05 : {
        type : Number,
       
    },

})

module.exports = mongoose.model("Student", studentSchema);