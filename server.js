'use restrict';

// declare constants
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

/*parse requests of content-type - application/json*/
app.use(express.json());

/*parse requests of content-type - application/x-www-form-urlencoded*/
app.use(
    express.urlencoded({
        extended: true,
    })
);

// define routes
var route = require('./routes/route')
route(app);

// define port
const SERVICE = process.env.PORT;
app.listen(SERVICE, () => {
    console.log(`--->Service PORT ${SERVICE}<---`);
});

process.setMaxListeners(0);