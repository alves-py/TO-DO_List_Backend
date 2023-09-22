const connectionDB = require(`./connectionDB`);

const registerUser = async (name, email, password) => {
    const query = `INSERT INTO Users (username, email, password_hash)
                   VALUES ($1, $2, $3) RETURNING user_id, username, email;`;
    const values = [name, email,password];
    return await connectionDB.query(query, values);
}

const registerTask = async (id_user, content, due_date, priority, is_completed, title) => {
    const query = `INSERT INTO Tasks (user_id, content, due_date, priority, is_completed, title) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
    const values = [id_user, content, due_date, priority, is_completed, title];
    return await connectionDB.query(query, values);
}

const registerTags = async ( user_id ,name, color ) => {
    const query = `INSERT INTO Tags (user_id, name, color) VALUES
    ($1, $2, $3) RETURNING *;`;
    const values = [user_id ,name, color];
    return await connectionDB.query(query, values);
}
module.exports = {
    registerUser,
    registerTask,
    registerTags
}