var express = require('express');
var request = require('request');
var spawn = require("child_process").spawn;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/rotateMotor/:distance', function(req,res,next){
    console.log(req.params.distance);
    var spinDistance = parseInt(req.params.distance)
    var pythonProcess = spawn('python',["path/to/script.py",spinDistance]);
    res.send('spinning...');
});



module.exports = router;
