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

var movieSchema = mongoose.Schema({
                    Title:String,
                    Year:String,
                    Runtime:String,
                    Director:String,
                    Poster:String,
                    Language:String,
                    status:String
});

var Movie = mongoose.model('Movie',movieSchema, 'movie');

router.post('/addmovie', function (req, res) {
  var movie = new Movie({
    Title: req.body.Title,      //t for input theater boxes
    Year: req.body.Year,      //y for input city box
    Runtime:req.body.Runtime,
    Director:req.body.Director,
    Poster:req.body.Poster,
    Language:req.body.Language,
    status:"false"
  });
  movie.save(function(err,docs){
    console.log('Movie Saved Successfully');
  });
});

router.delete('/deletemovie/:id',function(req, res){
  Movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

router.get('/getmovie', function (req, res) {
    Movie.find({}, function (err, docs) {
    res.json(docs);
    });
});

router.put('/updatemovie/:Title/:val' , function(req,res)
{
  Movie.findOneAndUpdate({Title:req.params.Title},
  {
    $set:{status:req.params.val}

  },
  function (err, docs) {
    res.json(docs);
  });
});


module.exports = router;
