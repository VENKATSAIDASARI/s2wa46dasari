var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  res.render('computation', {
    title: 'Computation',
    value1: `Math.acosh() applied to ` + x + ` is ${Math.acosh(x,x).toFixed(2)}`,
    value2: `Math.log1p() applied to ` + x + ` is ${Math.log1p(x)}`,
    value3: `Math.tan() applied to ` + x + ` is ${Math.tan(x).toFixed(2)}`,
    value4: `Math.sqrt() applied to ` + x + ` is ${Math.sqrt(x)}`
  });
});

module.exports = router;
