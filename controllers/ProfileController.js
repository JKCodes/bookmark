var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {

  find: function(params){
    
    return new Promise(function(resolve, reject) {

      Profile.find(params, function(err, profiles) {
        if (err) {
          reject(err)
          return
        }

        resolve(profiles)
      })
    })
  },

  findByID: function(id) {
    return new Promise(function(resolve, reject) {

      Profile.findById(id, function(err, profile) {
        if (err) {
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  }
}