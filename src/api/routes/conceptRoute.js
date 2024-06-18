module.exports = (server) => {
    const conceptController = require("../controllers/conceptController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/concept")
.get( cors(), conceptController.getConcept);


server.route("/api/concept/description")
.patch(jwtMiddleware.authenticateUser,cors(), conceptController.updateconceptDescription);

server.route("/api/concept/title")
.patch(jwtMiddleware.authenticateUser,cors(), conceptController.updateconceptTitle);

server.route("/api/concept/image")
.patch(jwtMiddleware.authenticateUser,cors(), conceptController.updateconceptImage);

}