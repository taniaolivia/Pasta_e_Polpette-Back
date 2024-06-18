const db = require("../knex");

// Controller function to get all descriptions from the banner table
exports.getBannerDescriptions = (req, res) => {
    db('banner')
        .select('description')
        .then(descriptions => {
            res.status(200).json({
                message: 'Descriptions retrieved successfully',
                descriptions: descriptions[0]["description"]
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to retrieve descriptions',
                error: error
            });
        });
};


//  update a description in the banner table
exports.updateBannerDescription = (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({
            message: 'Missing required field: description'
        });
    }

    db('banner')
        .update({ description })
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Description updated successfully'
                });
            } else {
                res.status(500).json({
                    message: 'Failed to update description'
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to update description',
                error: error
            });
        });
};
