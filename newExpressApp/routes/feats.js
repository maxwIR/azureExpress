var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let body = JSON.stringify(req.body);
  res.send("REQ " + body);
});

module.exports = router;
