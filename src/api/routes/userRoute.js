module.exports = (server) => {
    const userController = require("../controllers/userController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');

server.post("/api/register", cors(), userController.userRegister);


server.post("/api/login", cors(), userController.userLogin);


server.post("/api/logout", cors(), userController.userLogout);

}