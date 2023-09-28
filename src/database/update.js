const connectionDB = require("./connectionDB");

const updateTagUserId = (name, color, user_id, tag_id) => {
    const query = `UPDATE Tags 
    SET name = $1, color = $2 
    WHERE user_id = $3 and tag_id = $4 RETURNING *`;
    const values = [ name, color, user_id, tag_id ];
    return  connectionDB.query(query, values);
}

const updateTaskUserId = (content, due_date, priority, is_completed, title, user_id, task_id) => {
    const query = `UPDATE Tasks 
    SET content = $1, due_date = $2, priority = $3, is_completed = $4, title = $5 
    WHERE user_id = $6 and task_id = $7 RETURNING *;`;
    const values = [content, due_date, priority, is_completed, title, user_id, task_id];
    return connectionDB.query(query, values);
}

module.exports = {
    updateTagUserId,
    updateTaskUserId,
}