const connectionDB = require("./connectionDB");

const deleteTagUserID = (user_id, tag_id) => {
    const query = "DELETE FROM Tags WHERE user_id = $1 AND tag_id = $2";
    const values = [user_id, tag_id];
    return connectionDB.query(query, values);
}

module.exports = {
    deleteTagUserID
}