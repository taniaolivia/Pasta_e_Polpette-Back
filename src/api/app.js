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

const contactRoute = require("./routes/contactRoute");
contactRoute(server);

const restaurantRoute = require("./routes/restaurantRoute");
restaurantRoute(server);
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
