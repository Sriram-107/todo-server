const todoModel = require('../model/todo-model');
// get all todo
const getAllTodo = async (req, res) => {
    try {
        const todo = await todoModel.find(); // to get all the data use find() method.
        res.status(200).json(todo); // When the status is 200ok then response is printed to browser.
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

// get single todo
const getSingleTodo = async (req, res) => {
    try {
        const { id } = req.params; // from the url to get the id use req.params.
        const todo = await todoModel.findById(id); // use findById when you need to get data using Id.
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

// add todo
const addTodo = async (req, res) => {
    try {
        const todo = await todoModel.create(req.body); // create method is used to post the data to mongodb.
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
    console.log(req.body);
    res.send(req.body);
}

// update todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findByIdAndUpdate(id, req.body);
        if (!todo) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updateTodo = await todoModel.findById(id);
        res.status(200).json(updateTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete todo
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findByIdAndDelete(id);// We can use findByIdAndDelete to delete a document using particular id.
        if (!todo) {
            return res.status(404).json({ message: 'Todo is not found' })
        }
        res.status(200).json({ message: "Current Blog removed" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo };