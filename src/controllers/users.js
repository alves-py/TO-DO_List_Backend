const { registerUser } = require("../database/insertion");
const { validationDoubleEmail } = require("../database/select");
const { encryptPassword } = require("../utills/encrypt");


const registerUsers = async (req, res) => {
    const { name, password, email } = req.body
    try {
        const emailExistente = await validationDoubleEmail(email);
        if (emailExistente) {
            return res.status(400).json({ mensagem: "Este e-mail já foi cadastrado" });
        }
        const passwordEncrypt = await encryptPassword(password)
        const result = await registerUser(name, email, passwordEncrypt)

        res.status(201).json({mensagem: "Usuario cadastrado com sucesso!"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno no servidor " });
    }
}

module.exports = {
    registerUsers
}