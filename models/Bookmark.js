var mongoose = require('mongoose')
var superagent = require('superagent')
var utils = require('../utils')

var BookmarkSchema = new mongoose.Schema({
  profile : {type:String, default:''},
  url : {type:String, trim:true, default:''},
  title : {type:String, trim:true, default:''},
  description : {type:String, trim:true, default:''},
  image : {type:String, default:''},
  timestamp : {type:Date, default:Date.now},
})

BookmarkSchema.methods.summary = function() {
  var summary = {
    id: this._id,
    profile: this.profile,
    url: this.url,
    description: this.description,
    image: this.image,
    timestamp: this.timestamp
  }

  return summary
}

module.exports = mongoose.model('BookmarkSchema',BookmarkSchema)