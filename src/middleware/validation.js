const nameEmailPass = (req, res, next) => {
    const { name, email, password } = req.body
    if (!name || !password || !email) {
        return res.status(400).json({ mensagem: "todos os campos são obrigatorios" });
    }
    next();
};

module.exports = {
    nameEmailPass
}