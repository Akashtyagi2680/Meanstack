var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/crud'); //crud is my database name...
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

var bookingSchema = mongoose.Schema({

            Mname:String,
            Tname:String,
            Tcity:String,
            Mdate:String,
            Mtime:String,
            Uname: String,
            Email: String,
            Mobile: String,
            Sname: Array,
            Snumber: String,
            Tamount: String,

  });

var Booking = mongoose.model('Booking',bookingSchema, 'booking');

router.post('/addbooking/:Mn/:Tn/:Tc/:Md/:Mt/:Un/:Em/:Mo/:Sna/:Sno/:Ta', function (req, res) {
  var booking = new Booking({

    Mname:req.params.Mn,
    Tname:req.params.Tn,
    Tcity:req.params.Tc,
    Mdate:req.params.Md,
    Mtime:req.params.Mt,
    Uname:req.params.Un,
    Email:req.params.Em,
    Mobile:req.params.Mo,
    Sname:JSON.parse(req.params.Sna),
    Snumber:req.params.Sno,
    Tamount:req.params.Ta,

  });
  booking.save(function(err,docs){
    console.log('Booking Successfully');
  });


});
router.get('/blocking/:ti/:ci/:th/:ts', function (req, res) {

    Booking.find({
      Mname:req.params.ti,
      Tcity:req.params.ci,
      Tname:req.params.th,
      Mtime:req.params.ts
      }, function (err, docs) {
         res.json(docs);

    });

});
module.exports = router;
