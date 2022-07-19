var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/year', function (req, res, next) {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  res.json({ year: year })
})

module.exports = router
