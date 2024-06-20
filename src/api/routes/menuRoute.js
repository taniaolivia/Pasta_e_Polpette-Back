module.exports = (server) => {
    const menuController = require("../controllers/menuController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/menu")
.get( cors(), menuController.getMenu)
.patch(jwtMiddleware.authenticateUser,cors(), menuController.updateMenuSectionData);

server.route("/api/menuCarousel")
.get( cors(), menuController.getMenuCarousel);

}