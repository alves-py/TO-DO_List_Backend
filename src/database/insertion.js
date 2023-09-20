const connectionDB = require(`./connectionDB`);

const registerUser = async (name, email, password) => {
    const query = `INSERT INTO users (name, email, password)
                   VALUES ($1, $2, $3) RETURNING id, name, email;`;
    const values = [name, email,password];
    return await connectionDB.query(query, values);
}

module.exports = {
    registerUser
}