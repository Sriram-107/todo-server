const express = require('express');
const { getAllTodo, getSingleTodo, addTodo, updateTodo, deleteTodo } = require('../controller/todo-controller');
const TodoRoute = express.Router();

TodoRoute.get('/get/all/todo', getAllTodo);
TodoRoute.get('/get/todo/:id', getSingleTodo);
TodoRoute.post('/post/todo', addTodo);
TodoRoute.put('/update/todo/:id', updateTodo);
TodoRoute.delete('/delete/todo/:id', deleteTodo);

module.exports = TodoRoute;
