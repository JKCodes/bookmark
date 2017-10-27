var express = require('express')
var router = express.Router()
var cheerio = require('cheerio')
var superagent = require('superagent')
var utils = require('../utils')

router.get('/', function(req, res, next) {
  var url = req.query.url
  if (url == null) {
    res.json({
      confirmation: 'fail',
      message: 'Please enter a valid url.'
    })

    return
  }

  superagent
  .get(url)
  .query(null)
  .set('Accept', 'text/html')
  .end(function(err, response){
    if (err && err.status >= 400) {
      res.json({
        confirmation: 'fail',
        message: err
      })

      return
    }

    var html = response.text
    var metaData = utils.Scraper.scrape(html, ['og:title', 'og:description', 'og:image', 'og:url'])
    
    res.json({
      confirmation: 'success',
      tags: metaData
    })
  })
})

module.exports = router