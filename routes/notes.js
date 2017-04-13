var express = require('express');
var router = express.Router();
var Notes = require('../models/notes-model');

// let collection = db.get().collection('notes');

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    Notes.all(function(err, docs) {
        res.json(docs);
    })
});

router.get('/notes', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    Notes.all(function(err, docs) {
        res.json(docs);
    })
});

router.post('/notes', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    console.log(req.body);
    Notes.new(note, function(err, result) {
        res.json(result);
    })
});

module.exports = router;
