const db = require("../knex");


exports.getConcept = (req, res) => {
    db('concept')
        .select('*')
        .then(concept => {
            res.status(200).json({
                concept: concept
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to retrieve concept',
                error: error
            });
        });
};


//  update a description in the concept table
exports.updateconceptDescription = (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({
            message: 'Missing required field: description'
        });
    }

    db('concept')
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


//  update a title in the concept table
exports.updateconceptTitle = (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: 'Missing required field: title'
        });
    }

    db('concept')
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


//  update a image in the concept table
exports.updateconceptImage = (req, res) => {
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({
            message: 'Missing required field: image'
        });
    }

    db('concept')
        .update({ image })
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'image updated successfully'
                });
            } else {
                res.status(500).json({
                    message: 'Failed to update image'
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to update image',
                error: error
            });
        });
};
