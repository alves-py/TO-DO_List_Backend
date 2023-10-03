import connectionDB from './connectionDB.js'

const registerUser = (name, email, password) => {
  const query = `INSERT INTO Users (username, email, password_hash)
                   VALUES ($1, $2, $3) RETURNING user_id, username, email;`
  const values = [name, email, password]
  return connectionDB.query(query, values)
}

const registerTask = (id_user, content, due_date, priority, is_completed, title) => {
  const query = `INSERT INTO Tasks (user_id, content, due_date, priority, is_completed, title) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`
  const values = [id_user, content, due_date, priority, is_completed, title]
  return connectionDB.query(query, values)
}

const registerTags = (user_id, name, color) => {
  const query = `INSERT INTO Tags (user_id, name, color) VALUES
    ($1, $2, $3) RETURNING *;`
  const values = [user_id, name, color]
  return connectionDB.query(query, values)
}
export {
  registerUser,
  registerTask,
  registerTags
}
