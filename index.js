const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;


// database connetion
const connectDB = require("./config/DBconnection.js");

// route
const RadioStation = require("./routes/RadioStation/RadioStationRoutes.js");
const Authentication = require("./routes/Authentication/Authentication.js");

connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/channel', RadioStation)
app.use('/auth', Authentication)

app.listen(port, () => {
    console.log(`Radio Widget Port is ${port}`);
});