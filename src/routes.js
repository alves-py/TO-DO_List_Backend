import express from 'express'
import { nameEmailPass, tokenValidation, validationNameColor } from './middleware/validation.js'
import { registerUsers, loginUser } from './controllers/users.js'
import { insertionTask, selectTaskUserID, selectAllTask, taskDelete, updateTask } from './controllers/tasks.js'
import { insertionTag, selectTag, updateTag, deleteTag, selectAlltags } from './controllers/tags.js'

const routes = express()

routes.post('/register', nameEmailPass, registerUsers)
routes.post('/login', loginUser)

routes.use(tokenValidation)

routes.post('/tasks', insertionTask)
routes.post('/tags', validationNameColor, insertionTag)
routes.delete('/tags/:tag_id', deleteTag)
routes.get('/tags/:tag_id', selectTag)
routes.get('/tags', selectAlltags)
routes.put('/tags/:tag_id', validationNameColor, updateTag)
routes.get('/tasks/:task_id', selectTaskUserID)
routes.get('/tasks', selectAllTask)
routes.delete('/tasks/:task_id', taskDelete)
routes.put('/tasks/:task_id', updateTask)

export default routes
