const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("MongoDB connected ");
})



app.listen(process.env.PORT, () => {
    console.log(`Application has started on the port http://localhost:${ process.env.PORT }` );
})
