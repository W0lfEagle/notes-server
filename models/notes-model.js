var db = require('../db')

exports.all = function(cb) {
  var collection = db.get().collection('notes')

  collection.find().toArray(function(err, docs) {
    cb(err, docs)
  })
}

exports.recent = function(cb) {
  var collection = db.get().collection('notes')

  collection.find().sort({'date': -1}).limit(100).toArray(function(err, docs) {
    cb(err, docs)
  })
}

exports.new = function(note, cb) {
    var collection = db.get().collection('notes')

    collection.insert(note, function(err, result) {
        cb(err,result)
    })
}