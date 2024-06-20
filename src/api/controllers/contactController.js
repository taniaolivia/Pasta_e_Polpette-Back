const db = require("../knex");
const nodemailer = require('nodemailer');

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

// Send email
exports.sendEmail = (req, res) => {
    const { email, firstName, lastName, subject, message, telephone } = req.body;

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER, 
        subject: subject,
        text: `Prénom: ${firstName}\nNom: ${lastName}\nNuméro de téléphone: ${telephone}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
}

