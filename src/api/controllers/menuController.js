const db = require("../knex");

// Get the menu's data
exports.getMenu = (req, res) => {
    db('menu')
        .select('*')
        .then(menu => {
            res.status(200).json({
                menu: menu
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to retrieve menu',
                error: error
            });
        });
};

// Get the images of the menu section for the carousel
exports.getMenuCarousel = (req, res) => {
    db('carousel')
        .select('*')
        .then(carousel => {
            res.status(200).json({
                carousel: carousel
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to retrieve carousel',
                error: error
            });
        });
};

// Update the menu's data
exports.updateMenuSectionData = (req, res) => {
    const menu = req.body;

    db('menu')
        .update(menu)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: "Menu's data updated successfully"
                });
            } else {
                res.status(500).json({
                    message: "Failed to update menu's data"
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: "Failed to update menu's data",
                error: error
            });
        });
};