const { registerUser } = require("../database/insertion");
const { validationDoubleEmail, selectHash } = require("../database/select");
const { encryptPassword, comparePassword } = require("../utills/encrypt");
const jwt = require('jsonwebtoken');


const registerUsers = async (req, res) => {
    const { username, password, email } = req.body
    try {
        const doubleEmail = await validationDoubleEmail(email);
        if (doubleEmail) {
            return res.status(400).json({ message: "This email has already been registered" });
        }
        const passwordEncrypt = await encryptPassword(password)
        const result = await registerUser(username, email, passwordEncrypt)

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        if (!password || !email) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }
    
        const doubleEmail = await validationDoubleEmail(email);
        if (!doubleEmail) {
            return res.status(400).json({ message: "Invalid username and/or password(s)." });
        }

        const { password_hash: hash, ...user } = await selectHash(email);
        const passwordAproved = await comparePassword(password, hash);
        if (!passwordAproved){
            return res.status(400).json({ message: "Invalid username and/or password(s)." });
        }
        const token = await jwt.sign({id: user.user_id}, process.env.JWT_SENHA, { expiresIn: '8h'});
        return res.status(200).json({user, token});

    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }

    
}

module.exports = {
    registerUsers,
    loginUser
}