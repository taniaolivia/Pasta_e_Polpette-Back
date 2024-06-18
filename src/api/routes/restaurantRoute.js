module.exports = (server) => {
    const restaurantController = require("../controllers/restaurantController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');


server.route("/api/restaurant")
.get(cors(), restaurantController.getRestaurantSection)
.patch(jwtMiddleware.authenticateUser, cors(), restaurantController.updateRestaurantSection);

}