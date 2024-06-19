const db = require("../knex");

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

//  update a description in the menu table
exports.updatemenuDescription = (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({
            message: 'Missing required field: description'
        });
    }

    db('menu')
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


//  update a title in the menu table
exports.updatemenutTitle = (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Missing required field: title'
        });
    }

    db('menu')
        .update({ title })
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'title updated successfully'
                });
            } else {
                res.status(500).json({
                    message: 'Failed to update title'
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to update title',
                error: error
            });
        });
};


