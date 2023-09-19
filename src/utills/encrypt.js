const bcrypt = require('bcrypt');

const encryptPassword = async (password) =>{
    return await bcrypt.hash(password, 10);
};

module.exports = {
    encryptPassword
}