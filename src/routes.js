const express = require(`express`);
const { nameEmailPass, tokenValidation } = require("./middleware/validation");
const { registerUsers, loginUser } = require("./controllers/users");

const routes = express();

routes.post('/usuarios', nameEmailPass, registerUsers);
routes.post('/login', loginUser);

routes.use(tokenValidation);

//TODO: add routes after login

module.exports = routes;