const connectionDB = require(`./connectionDB`);

const registerUser = async (name, email, password) => {
    const query = `INSERT INTO users (name, email, password)
                   VALUES ($1, $2, $3) RETURNING *;`;
    const values = [name, email,password];
    return await connectionDB.query(query, values);
}

module.exports = {
    registerUser
}