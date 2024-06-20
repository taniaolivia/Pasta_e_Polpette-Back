module.exports = (server) => {
    const conceptController = require("../controllers/conceptController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/concept")
.get( cors(), conceptController.getConcept);

server.route("/api/concept")
.patch(jwtMiddleware.authenticateUser,cors(), conceptController.updateConceptData);

}