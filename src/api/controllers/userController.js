const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../knex");
const { uuid } = require('uuidv4');





const currentModuleDir = __dirname;

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

