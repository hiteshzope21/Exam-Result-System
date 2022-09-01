const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const logger = require("morgan")



let origin = 'http://localhost:8080';

app.use(cors({
    origin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("MongoDB connected ");
});

const indexRouter = require("./routes/user.routes");
const studentRouter = require("./routes/student.routes");

app.use( indexRouter );
app.use( studentRouter );



app.listen(process.env.PORT, () => {
    console.log(`Application has started on the port http://localhost:${ process.env.PORT }` );
})
