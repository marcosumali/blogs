var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
const ControllerArticles = require('./controllers/c_articles');

mongoose.connect('mongodb://Admin:575886@ds037415.mlab.com:37415/blogs-mbb', () => {
    console.log('App is connected to database Blogs')
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/articles', require('./routes/articles'))

// app.get('/articles/get', ControllerArticles.get);

// TO CHECK CONNECTION EXPRESS
app.listen('80', () => {
    console.log('App is listening on port 80')
})


module.exports = app;