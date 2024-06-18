module.exports = (server) => {
    const bannerController = require("../controllers/bannerController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/banner")
.get( cors(), bannerController.getBannerDescriptions)
.patch(jwtMiddleware.authenticateUser,cors(), bannerController.updateBannerDescription);


}