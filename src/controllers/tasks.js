const { registerTask } = require("../database/insertion");

const insertionTask = async (req, res) => {
    try{
        const { user_id } = req.user;
        const { content, due_date, priority, title } = req.body;
        let { is_completed } = req.body;

        if(!priority){
            return res.status(400).json({ message: "priority must be sent"});
        }
        if(!is_completed){
            is_completed = false;
        }
        if(priority !== 'Low' && priority !== 'Moderate' && priority !== 'High' && priority !== 'Very High'){
            return res.status(400).json({ message: "priority: Low or Moderate or High or Very High"});
        }
    
        const result = await registerTask(user_id, content, due_date, priority, is_completed, title);
    
        res.status(201).json(result.rows[0]);
    } catch(err){
        res.status(500).json({ message: "internal server error" })
    }

};

module.exports = {
    insertionTask
}