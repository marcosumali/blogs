var express = require('express');
const ControllerArticles = require('../controllers/c_articles');

var router = express.Router();

router
    .get('/', ControllerArticles.get)
    .post('/save', ControllerArticles.save)
    .put('/update', ControllerArticles.update)
    .delete('/delete', ControllerArticles.delete)

module.exports = router;