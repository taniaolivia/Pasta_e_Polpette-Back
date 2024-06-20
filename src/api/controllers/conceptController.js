const db = require("../knex");

// Get concept's data
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

// Update concept's data
exports.updateConceptData = (req, res) => {
    const data = req.body;

    db('concept')
        .update(data)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: "Concept's data is updated successfully"
                });
            } else {
                res.status(500).json({
                    message: 'Failed to update concept',
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Failed to update concept',
                error: error
            });
        });
};