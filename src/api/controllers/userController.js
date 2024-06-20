const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../knex");
const { uuid } = require('uuidv4');

// Register new user
exports.userRegister = (req, res) => {
    let newUser = req.body;
    
    if(newUser.password){

        bcrypt.hash(newUser.password, 10, (error, hash) => {
            if(error){
                res.status(401);
                
                res.json({message: "Impossible to encrypt the password"});
            }
            else{
                db("user")
                    .select("*")
                    .where("email", "=", newUser.email)
                    .then((user) => {
                        if(user.length > 0) {
                            res.status(401);
                            res.json({message: "User already exists"});
                        }
                        else {
                            const userData = {
                                email: newUser.email, 
                                password: hash
                            }

                            jwt.sign(userData, process.env.JWT_KEY, {expiresIn: "1d"}, (error) => {

                                db("user")
                                    .insert({
                                        id: uuid(), 
                                        firstName: newUser.firstName, 
                                        lastName: newUser.lastName, 
                                        email: newUser.email, 
                                        password: hash,
                                        
                                    })
                                    .then(data => {
                                        
                                        res.status(200).json({
                                            message: `User created : ${newUser.email}`,
                                            user: newUser
                                        })
                                    })
                                    .catch(error => {
                                        res.status(401);
                                    
                                        res.json({message: "Invalid request"});
                                    });
                            })
                        }
                    })
            }
        })
    }
    else{
        res.status(401);
        
        res.json({message: "Missing password", error: req.body});
    }
}


// Login user
exports.userLogin = (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Missing email or password" });
    }

    // Find user by email
    db("user")
        .select("*")
        .where("email", "=", email)
        .then((user) => {
            if (user.length === 0) {
                return res.status(401).json({ message: "User does not exist" });
            }

            const foundUser = user[0];

            // Compare the hashed password
            bcrypt.compare(password, foundUser.password, (error, match) => {
                if (error) {
                    return res.status(500).json({ message: "Error comparing passwords" });
                }

                if (!match) {
                    return res.status(401).json({ message: "Invalid password" });
                }

                // Generate JWT token
                const userData = {
                    id: foundUser.id,
                    email: foundUser.email,
                    firstName: foundUser.firstName,
                    lastName: foundUser.lastName
                };

                jwt.sign(userData, process.env.JWT_KEY, { expiresIn: "1d" }, (error, token) => {
                    if (error) {
                        return res.status(500).json({ message: "Error generating token" });
                    }

                    // Return the token and user data
                    res.status(200).json({
                        message: "Login successful",
                        token: token,
                        user: userData
                    });
                });
            });
        })
        .catch(error => {
            res.status(500).json({ message: "Database error", error: error });
        });
};
 

// Logout user
exports.userLogout = (req, res) => {
    
    res.status(200).json({ message: "Logout successful" });
};




