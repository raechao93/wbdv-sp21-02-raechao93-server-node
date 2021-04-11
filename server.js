const express = require('express')
const app = express()

//Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demo = require('./controllers/demo-controller')
demo(app)

const quizzes = require('./controllers/quizzes-controller')
quizzes(app)

const questions = require('./controllers/questions-controller')
questions(app)

app.listen(4000)