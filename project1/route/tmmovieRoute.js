var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/crud');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

var mappingSchema = mongoose.Schema({
                    Date:String,
                    Title:String,
                    theatrename:String,
                    theatrecity:String,
                    Time:String,
                    Director: String,
                    Runtime: String,
                    Poster: String

});

var Mapping = mongoose.model('Mapping',mappingSchema, 'mapping');

router.post('/addmapping', function (req, res) {
  var mapping = new Mapping({
    Date: req.body.Date,      //t for input theater boxes
    Title: req.body.Title,      //y for input city box
    theatrename:req.body.theatrename,
    theatrecity:req.body.theatrecity,
    Time:req.body.Time,
    Director: req.body.Director,
    Runtime: req.body.Runtime,
    Poster: req.body.Poster
  });
  mapping.save(function(err,docs){
    console.log('Tmmaping Saved Successfully');
  });
});

router.delete('/deletemapping/:id',function(req, res){
  Mapping.remove({_id:req.params.id},function(err, docs){
    console.log('Tmmaping Removed Successfully');
  });
});

router.get('/getmapping', function (req, res) {
    Mapping.find({}, function (err, docs) {
    res.json(docs);
    });
});

module.exports = router;
