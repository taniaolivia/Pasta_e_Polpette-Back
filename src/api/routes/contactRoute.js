module.exports = (server) => {
    const contactController = require("../controllers/contactController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/contact")
.get(cors(), contactController.getContactSection)
.patch(jwtMiddleware.authenticateUser, cors(), contactController.updateContactSection);

}