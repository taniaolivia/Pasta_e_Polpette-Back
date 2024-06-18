const db = require("../knex");

// Get the data of contact section
exports.getContactSection = (req, res) => {
    return db('contact')
        .select('*')
        .then(data => res.status(200).json({ "contact": data }))
        .catch(error => {
            res.status(401);
            res.json({ message: "Server error" });
        });
}

// Update the data of contact section
exports.updateContactSection = (req, res) => {
    const contact = req.body;

    return db('contact')
        .update(contact)
        .then(data => res.status(200).json({ "message": "Contact section's data has been updated successfully !"}))
        .catch(error => {
            res.status(401);
            res.json({ message: "Server error" });
        });
}

