var express = require('express');
var router = express.Router();

/* GET my homepage myData */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Deepika Annapureddy' });
});

module.exports = router;
