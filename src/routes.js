const express = require(`express`);
const { nameEmailPass, tokenValidation } = require("./middleware/validation");
const { registerUsers, loginUser } = require("./controllers/users");
const { insertionTask } = require("./controllers/tasks");
const { insertionTag } = require("./controllers/tags");

const routes = express();

routes.post('/users', nameEmailPass, registerUsers);
routes.post('/login', loginUser);

routes.use(tokenValidation);

//TODO: add routes after login
routes.post('/task', insertionTask);
routes.post('/tags', insertionTag);


module.exports = routes;