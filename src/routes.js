const express = require(`express`);
const { nameEmailPass, tokenValidation, validationNameColor } = require("./middleware/validation");
const { registerUsers, loginUser } = require("./controllers/users");
const { insertionTask, selectTaskUserID, selectAllTask, taskDelete, updateTask } = require("./controllers/tasks");
const { insertionTag, selectTag, updateTag, deleteTag, selectAlltags } = require("./controllers/tags");

const routes = express();

routes.post('/register', nameEmailPass, registerUsers);
routes.post('/login', loginUser);

routes.use(tokenValidation);

routes.post('/task', insertionTask);
routes.post('/tags', validationNameColor ,insertionTag);
routes.delete('/tags/:tag_id', deleteTag);
routes.get('/tags/:tag_id', selectTag);
routes.get('/tags', selectAlltags);
routes.put('/tags/:tag_id',validationNameColor, updateTag);
routes.get('/tasks/:task_id', selectTaskUserID);
routes.get('/tasks', selectAllTask);
routes.delete('/tasks/:task_id', taskDelete);
routes.put('/tasks/:task_id', updateTask);

module.exports = routes;