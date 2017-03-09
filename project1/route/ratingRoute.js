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

var ratingSchema = mongoose.Schema({

  customername: String,
  comment:String,
  movie:String,
  Rating:String,
  // Poster:String

});

var Rating = mongoose.model('Rating',ratingSchema, 'rating');


router.post('/addrating/:t/:c/:m/:r', function (req, res) {
  var rating = new Rating({
    customername: req.params.t,
    comment: req.params.c,
    movie:req.params.m,
    Rating:req.params.r,
    // mvImage:req.params.p

  });

  rating.save(function(err,docs){
    console.log('rating Saved Successfully');
  });
});



router.get('/showrating/:ti', function (req, res) {

    Rating.find({
        movie:req.params.ti

      }, function (err, docs) {
         res.json(docs);

    });
});





module.exports = router;
