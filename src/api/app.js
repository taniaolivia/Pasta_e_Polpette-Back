const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const hostname = "0.0.0.0";
const port = 3000;
const server = express();

server.use(logger('dev'));

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use(cookieParser());

server.use(cors());

const userRoute = require("./routes/userRoute");
userRoute(server);

const bannerRoute = require("./routes/bannerRoute");
bannerRoute(server);

const conceptRoute = require("./routes/conceptRoute");
conceptRoute(server);

const menuRoute = require("./routes/menuRoute");
menuRoute(server);
 
const contactRoute = require("./routes/contactRoute");
contactRoute(server);

const restaurantRoute = require("./routes/restaurantRoute");
restaurantRoute(server);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
