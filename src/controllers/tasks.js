import { deleteTask } from '../database/delete.js'
import { registerTask } from '../database/insertion.js'
import { selectTask, selectTaskDB } from '../database/select.js'
import { updateTaskUserId } from '../database/update.js'

const insertionTask = async (req, res) => {
  try {
    const { user_id } = req.user
    const { content, due_date, priority, title } = req.body
    let { is_completed, tag_id } = req.body

    if (!priority) {
      return res.status(400).json({ message: 'priority must be sent' })
    }
    if (!is_completed) {
      is_completed = false
    }
    if (tag_id === '0') {
      tag_id = null
    }
    if (priority !== 'Low' && priority !== 'Moderate' && priority !== 'High' && priority !== 'Very High') {
      return res.status(400).json({ message: 'priority: Low or Moderate or High or Very High' })
    }

    const result = await registerTask(user_id, content, due_date, priority, is_completed, title, tag_id)

    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: 'internal server error' })
  }
}

const selectTaskUserID = async (req, res) => {
  try {
    const { user_id } = req.user
    const { task_id } = req.params

    const tag = await selectTask(user_id, task_id)

    if (tag.rowCount === 0) {
      res.status(400).json({ message: 'It is necessary to send a valid task_id.' })
    }

    res.status(200).json(tag.rows[0])
  } catch (err) {
    res.status(500).json({ message: 'internal server error' })
  }
}

const selectAllTask = async (req, res) => {
  try {
    const { user_id } = req.user

    const tag = await selectTaskDB(user_id)

    if (tag.rowCount === 0) {
      res.status(400).json({ message: 'It is necessary to send a valid task_id.' })
    }

    res.status(200).json(tag.rows)
  } catch (err) {
    res.status(500).json({ message: 'internal server error' })
  }
}

const taskDelete = async (req, res) => {
  try {
    const { user_id } = req.user
    const { task_id } = req.params

    const tag = await deleteTask(user_id, task_id)

    if (tag.rowCount === 0) {
      return res.status(400).json({ message: 'It is necessary to send a valid task_id.' })
    }

    res.status(200).json({ message: 'Success' })
  } catch (err) {
    res.status(500).json({ message: 'internal server error' })
  }
}

const updateTask = async (req, res) => {
  try {
    const { content, due_date, priority, title, tag_id } = req.body
    let { is_completed } = req.body
    const { user_id } = req.user
    const { task_id } = req.params

    if (!priority) {
      return res.status(400).json({ message: 'priority must be sent' })
    }
    if (!is_completed) {
      is_completed = false
    }
    if (priority !== 'Low' && priority !== 'Moderate' && priority !== 'High' && priority !== 'Very High') {
      return res.status(400).json({ message: 'priority: Low or Moderate or High or Very High' })
    }

    const tag = await updateTaskUserId(content, due_date, priority, is_completed, title, user_id, task_id, tag_id)

    if (tag.rowCount === 0) {
      res.status(400).json({ message: 'It is necessary to send a valid task_id.' })
    }
    res.status(200).json(tag.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'internal server error' })
  }
}

export {
  insertionTask,
  selectTaskUserID,
  selectAllTask,
  taskDelete,
  updateTask
}
