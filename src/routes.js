const express = require(`express`);
const { nameEmailPass, tokenValidation, validationNameColor } = require("./middleware/validation");
const { registerUsers, loginUser } = require("./controllers/users");
const { insertionTask } = require("./controllers/tasks");
const { insertionTag, selectTag, updateTag, deleteTag } = require("./controllers/tags");

const routes = express();

routes.post('/users', nameEmailPass, registerUsers);
routes.post('/login', loginUser);

routes.use(tokenValidation);

//TODO: add routes after login
routes.post('/task', insertionTask);
routes.post('/tags', validationNameColor ,insertionTag);
routes.delete('/tags/:tag_id', deleteTag);
routes.get('/tags/:tag_id', selectTag);
routes.put('/tags/:tag_id',validationNameColor, updateTag);


module.exports = routes;