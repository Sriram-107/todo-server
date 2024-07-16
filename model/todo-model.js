const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    task:
    {
        type: String,
        required: [true, "Please Enter task"],
        default: ""
    },
    description:
    {
        type: String

    }
}, {
    timestamp: true
}
);
const todoModel = mongoose.model("todocollections", todoSchema);
module.exports = todoModel;