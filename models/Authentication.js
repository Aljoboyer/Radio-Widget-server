const mongoose = require('mongoose')

const UserCollection = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
})

module.exports = mongoose.model('UserCollection', UserCollection)
