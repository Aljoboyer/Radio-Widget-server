const mongoose = require('mongoose')

const ChannelCollection = mongoose.Schema({
  ChannelName: { type: String, required: false },
  channel: { type: String, required: false },

})

module.exports = mongoose.model('ChannelCollection', ChannelCollection)
