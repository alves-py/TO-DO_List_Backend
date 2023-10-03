import connectionDB from './connectionDB.js'

const validationDoubleEmail = async (email) => {
  const query = 'SELECT * FROM Users WHERE email = $1'
  const values = [email]
  const { rowCount } = await connectionDB.query(query, values)

  return rowCount > 0
}

const selectHash = async (email) => {
  const query = 'SELECT * FROM Users WHERE email = $1'
  const values = [email]
  const { rows } = await connectionDB.query(query, values)
  return rows[0]
}

const selectAllUserId = (id) => {
  const query = 'SELECT * FROM Users WHERE user_id = $1'
  const values = [id]
  return connectionDB.query(query, values)
}

const selectTagUserId = (user_id, tag_id) => {
  const query = 'SELECT * FROM Tags WHERE user_id = $1 and tag_id = $2'
  const values = [user_id, tag_id]
  return connectionDB.query(query, values)
}

const selectAllTags = (user_id) => {
  const query = 'SELECT * FROM Tags WHERE user_id = $1'
  const values = [user_id]
  return connectionDB.query(query, values)
}

const selectTask = (user_id, task_id) => {
  const query = 'SELECT * FROM Tasks WHERE user_id = $1 and task_id = $2'
  const values = [user_id, task_id]
  return connectionDB.query(query, values)
}

const selectTaskDB = (user_id) => {
  const query = 'SELECT * FROM Tasks WHERE user_id = $1'
  const values = [user_id]
  return connectionDB.query(query, values)
}

export {
  validationDoubleEmail,
  selectHash,
  selectAllUserId,
  selectTagUserId,
  selectAllTags,
  selectTask,
  selectTaskDB
}
