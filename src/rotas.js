const express = require(`express`);

const rotas = express();

rotas.get('/', (req, res) =>{
    return res.json({menssage: "servidor online"})
})

module.exports = rotas;