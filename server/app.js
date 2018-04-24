var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
const ControllerArticles = require('./controllers/c_articles');

mongoose.connect('mongodb://localhost/blog');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/articles', require('./routes/articles'))

// app.get('/articles/get', ControllerArticles.get);

// TO CHECK CONNECTION EXPRESS
app.listen('3000', () => {
    console.log('App is listening on port 3000')
})


module.exports = app;