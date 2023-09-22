const connectionDB = require("./connectionDB");


const validationDoubleEmail = async (email) => {
    const query = "SELECT * FROM Users WHERE email = $1";
    const values = [email];
    const { rowCount } = await connectionDB.query(query, values);
    
    return rowCount > 0;
}

const selectHash = async (email) => {
    const query = "SELECT * FROM Users WHERE email = $1";
    const values = [email];
    const { rows } = await connectionDB.query(query, values);
    return rows[0];
}

const selectAllUserId = async (id) => {
    const query = "SELECT * FROM Users WHERE user_id = $1";
    const values = [id];
    return { rows, rowCount } = await connectionDB.query(query, values);
}

module.exports = {
    validationDoubleEmail,
    selectHash,
    selectAllUserId
}