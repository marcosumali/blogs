var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = mongoose.Schema({
    author: String,
    title: String,
    thumbnail: String,
    description: String,
}, {
    timestamps: true
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;