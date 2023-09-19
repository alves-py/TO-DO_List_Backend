const express = require(`express`);
const { nameEmailPass } = require("./middleware/validation");
const { registerUsers } = require("./controllers/users");

const rotas = express();

rotas.post('/usuarios', nameEmailPass, registerUsers);

module.exports = rotas;