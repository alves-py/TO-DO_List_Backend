const express = require(`express`);
const { nameEmailPass } = require("./middleware/validation");
const { registerUsers, loginUser } = require("./controllers/users");

const rotas = express();

rotas.post('/usuarios', nameEmailPass, registerUsers);
rotas.post('/login', loginUser);

module.exports = rotas;