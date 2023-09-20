const connectionDB = require("./connectionDB");


const validationDoubleEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const { rowCount } = await connectionDB.query(query, values);
    
    return rowCount > 0;
}

const selectHash = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const { rows } = await connectionDB.query(query, values);
    return rows[0];
}

module.exports = {
    validationDoubleEmail,
    selectHash
}