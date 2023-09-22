const connectionDB = require(`./connectionDB`);

const registerUser = async (name, email, password) => {
    const query = `INSERT INTO Users (username, email, password_hash)
                   VALUES ($1, $2, $3) RETURNING user_id, username, email;`;
    const values = [name, email,password];
    return await connectionDB.query(query, values);
}

module.exports = {
    registerUser
}