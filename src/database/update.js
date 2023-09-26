const connectionDB = require("./connectionDB");

const updateTagUserId = async (name, color, user_id, tag_id) => {
    const query = `UPDATE Tags 
    SET name = $1, color = $2 
    WHERE user_id = $3 and tag_id = $4 RETURNING *`;
    const values = [ name, color, user_id, tag_id ];
    return  connectionDB.query(query, values);
}

module.exports = {
    updateTagUserId
}