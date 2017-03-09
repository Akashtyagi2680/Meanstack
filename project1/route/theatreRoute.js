var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/crud'); //crud is my database name...
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var theatreSchema = mongoose.Schema({
  theatrename: String, //theatre_name is my paremeter name...
  theatrecity: String  //theatre_city is my paremeter name...
});

var Theatre = mongoose.model('Theatre',theatreSchema, 'theatre');

router.post('/addtheatre/:t/:c', function (req, res) {
  var theatre = new Theatre({
    theatrename: req.params.t, // t perimeter for theatrename
    theatrecity: req.params.c  // c perimeter for theatrename
  });
  theatre.save(function(err,docs){
    console.log('Theatre Saved Successfully');
  });
});

router.delete('/deletetheatre/:id',function(req, res){
  Theatre.remove({_id:req.params.id},function(err, docs){
    console.log('Theatre Removed Successfully');
  });
});

router.get('/gettheatre', function (req, res) {
    Theatre.find({}, function (err, docs) {
    res.json(docs);
    });
});


module.exports = router;
