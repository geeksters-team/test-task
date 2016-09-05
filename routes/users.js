var express = require('express');
var router = express.Router();
var db = require('../db/testcollection')

router.get('/user', function(req, res, next) {
  var result = db.getData(req, res);
});

router.put('/user', function(req, res, next) {
  db.updateData(req);
  res.send('ok')
});

router.get('/reloaddata' ,function(req, res, next) {
  db.reloaddata();
  res.send('ok');
});

module.exports = router;
