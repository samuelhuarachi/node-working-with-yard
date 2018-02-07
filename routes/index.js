const { check, validationResult } = require('express-validator/check');


module.exports = app => {
    app.get('/todo', (req, res) => {
        res.status(200).json("hello world") 
    });
}

module.exports = app => {
    app.get('/rota', (req, res) => {
        const todo = req.body;

        res.status(200).json(todo)
        
    });
}