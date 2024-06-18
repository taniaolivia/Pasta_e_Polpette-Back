const db = require("../knex");

// Get the data of restaurant section
exports.getRestaurantSection = (req, res) => {
    return db('restaurant')
        .select('*')
        .then(data => res.status(200).json({ "restaurant": data }))
        .catch(error => {
            res.status(401);
            res.json({ message: "Server error" });
        });
}

// Update the data of restaurant section
exports.updateRestaurantSection = (req, res) => {
    const restaurant = req.body;

    return db('restaurant')
        .update(restaurant)
        .then(data => res.status(200).json({ "message": "Restaurant section's data has been updated successfully !"}))
        .catch(error => {
            res.status(401);
            res.json({ message: "Server error" });
        });
}

