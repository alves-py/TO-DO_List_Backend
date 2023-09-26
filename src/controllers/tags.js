const { registerTags } = require("../database/insertion");
const { selectAlltagsUserId } = require("../database/select");
const { updateTagUserId } = require("../database/update");

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

const selectTag = async (req, res) => {
    try {
        const { user_id } = req.user;
        const { tag_id } = req.params;

        if(!tag_id) {
            res.status(400).json({menssage: "It is necessary to send a valid tag_id." })
        }
        const tag = await selectAlltagsUserId(user_id, tag_id);

        res.status(200).json(tag.rows[0])
    } catch (err){
        res.status(500).json({menssage: "internal server error" })
    }
}

const updateTag = async (req, res) => {
    try {
        const { name, color } = req.body;
        const { user_id } = req.user;
        const { tag_id } = req.params;

        if(!tag_id) {
            res.status(400).json({menssage: "It is necessary to send a valid tag_id." })
        }
        const tag = await updateTagUserId(name, color, user_id, tag_id);

        if(tag.rowCount == 0 ){
            res.status(400).json({menssage: "It is necessary to send a valid tag_id."});
        }
        res.status(201).json(tag.rows[0]);

    } catch (err){
        res.status(500).json({menssage: "internal server error" })
    }
}
module.exports = {
    insertionTag,
    selectTag,
    updateTag
}