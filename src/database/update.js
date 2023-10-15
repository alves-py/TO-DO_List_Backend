import connectionDB from './connectionDB.js'

const updateTagUserId = (name, color, user_id, tag_id) => {
  const query = `UPDATE Tags 
    SET name = $1, color = $2 
    WHERE user_id = $3 and tag_id = $4 RETURNING *`
  const values = [name, color, user_id, tag_id]
  return connectionDB.query(query, values)
}

const updateTaskUserId = (content, due_date, priority, is_completed, title, user_id, task_id, tag_id) => {
  const query = `UPDATE Tasks 
    SET content = $1, due_date = $2, priority = $3, is_completed = $4, title = $5, tag_id=$6
    WHERE user_id = $7 and task_id = $8 RETURNING *;`
  const values = [content, due_date, priority, is_completed, title, tag_id, user_id, task_id]
  return connectionDB.query(query, values)
}

const updateBeforeDeleteTag = (tag_id, user_id) => {
  const query = `UPDATE Tasks SET tag_id = NULL WHERE tag_id = $1 and user_id = $2;  `
  const values = [tag_id, user_id]
  return connectionDB.query(query, values)
}

export {
  updateTagUserId,
  updateTaskUserId,
  updateBeforeDeleteTag
}
