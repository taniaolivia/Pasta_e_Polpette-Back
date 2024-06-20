module.exports = (server) => {
    const menuController = require("../controllers/menuController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/menu")
.get( cors(), menuController.getMenu);

server.route("/api/menuCarousel")
.get( cors(), menuController.getMenuCarousel);

server.route("/api/menu/description")
.patch(jwtMiddleware.authenticateUser,cors(), menuController.updatemenuDescription);

server.route("/api/menu/title")
.patch(jwtMiddleware.authenticateUser,cors(), menuController.updatemenutTitle);



}