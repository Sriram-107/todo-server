const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const TodoRoute = require('./route/todo-route')
require('./db/index');


const app = express();

app.use(express.json()); // We need to mention express.json() in your middlware so that your request can accept json.
app.use(cors());
app.use('/api', TodoRoute);

app.listen(3000, () => {
    console.log(`Server is running`);
});











