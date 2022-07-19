var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/year', function (req, res, next) {
  const currentDate = new Date()
  const year = currentDate.getYear()
  res.render('index', { year: year })
})

module.exports = router
