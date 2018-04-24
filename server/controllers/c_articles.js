const ModelArticle = require('../models/m_articles');
const ObjectId = require('mongodb').ObjectID;

class ControllerArticle {

    static get(req,res) {
        ModelArticle.find(function (err,result) {
            if (err) {
                res.status(400).json({
                    message: 'Bad Request Error: cannot get'
                })
            } else {
                res.status(200).json({
                    message: 'Read all articles successful',
                    articles: result
                })
            }            
        })

    }

    static save(req,res) {
        let {author,title,description} = req.body;

        let desc = req.body.description
        let desc_sliced = desc.slice(0,200);
        let thumbnail = desc_sliced + '. . .';

        let newObj = {
            author,
            title,
            description,
            thumbnail: thumbnail
        }
        // console.log(newObj);

        let newArticle = new ModelArticle(newObj);

        newArticle.save(function (err,result) {
            if (err) {
                res.status(400).json({
                    message: 'Bad Request Error: cannot save'
                })
            } else {
                res.status(201).json({
                    message: 'Add new article successful',
                    article: result
                })
            }
        })
    }


    static update(req,res) {
        let {id,title,description} = req.body;

        let newObj = {
            title,
            description
        }

        ModelArticle.findOneAndUpdate({_id: ObjectId(id)}, newObj, function(err,result) {
            if (err) {
                res.status(400).json({
                    message: 'Bad Request Error: cannot update'
                })
            } else {
                res.status(200).json({
                    message: 'Update related article successful',
                    article_before: result
                })
            }            
        })

    }


    static delete(req,res) {
        let {id} = req.body;

        ModelArticle.deleteOne({_id: ObjectId(id)}, function(err,result) {
            if (err) {
                res.status(400).json({
                    message: 'Bad Request Error: cannot delete'
                })
            } else {
                res.status(200).json({
                    message: 'Deleted related article successful',
                    article_before: result
                })
            }
        })
    }


}


module.exports = ControllerArticle;