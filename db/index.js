const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://sriram:LpSfm6mT3pTdQdP3@cluster0.4g5sii9.mongodb.net/TodoDB').then(() => {
    console.log('Connected to mongodb sucessfully');
}).catch((err) => {
    console.log("Mongodb Connection Error");
})

