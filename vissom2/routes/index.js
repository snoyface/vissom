var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tester', function(req, res, next) {
  res.render('client/tester', { title: 'TESTer' });
});

router.get('/painter', function(req, res, next) {
  res.render('client/paint', { title: 'painTer' });
});

module.exports = router;
