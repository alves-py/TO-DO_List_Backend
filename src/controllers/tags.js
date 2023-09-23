const { registerTags } = require("../database/insertion");

const insertionTag = async (req, res) => {
    try{
        const { name, color } = req.body;
        const {user_id } = req.user;

        const result = await registerTags( user_id, name, color );

        res.status(201).json(result.rows[0]);

    }catch(err){
        res.status(500).json({menssage: "internal server error" })
    }
}

module.exports = {
    insertionTag
}