require('dotenv').config();

const { selectAllUserId } = require('../database/select');
const jwt = require('jsonwebtoken');

const nameEmailPass = (req, res, next) => {
    const { username, email, password } = req.body
    if (!username || !password || !email) {
        return res.status(400).json({ mensage: "todos os campos são obrigatorios" });
    }
    next();
};

const tokenValidation =async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({mensage: "To access this feature a valid authentication token must be sent."});
    };
    try{
        const token = authorization.split(' ')[1];
        const { id } = jwt.verify(token, process.env.JWT_SENHA);
        const {rows, rowsCount} = await selectAllUserId(id);

        if(rowsCount === 0) {
            return res.status(401).json({mensage: "To access this feature a valid authentication token must be sent."});
        }

        const {password_hash, ...user} = rows[0];
        req.user = user;
        next();

    }catch(error){
        return res.status(401).json({mensage: "To access this feature a valid authentication token must be sent."});
    };
};

module.exports = {
    nameEmailPass,
    tokenValidation
}