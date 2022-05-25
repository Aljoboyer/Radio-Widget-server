const ChannelCollection = require('../../models/RadioStation/CreateStation.js')
const ObjectId = require('mongodb').ObjectId

const CreateChannel = async (req, res) => {
    const data = req.body
  
    try {
      const channel =  new ChannelCollection(data)
      channel.save()
      res.send({success: 'success'})
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
  }
const GetAllChannel = async (req, res) => {
  
    try {
      const channels = await ChannelCollection.find({})
    
      res.send(channels)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
  }
const GetEditChannel = async (req, res) => {
    const id = req.params.id;
    try {
      const channel = await ChannelCollection.findOne({_id: ObjectId(id)})
      res.send(channel)
    } catch (error) {ObjectId
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
}

const PutEditChannel = async (req, res) => {
  const id = req.body._id;
  const data = req.body;
  console.log('data', data)
  try {
    const channel = await ChannelCollection.findOneAndUpdate({_id: ObjectId(id)}, {
      $set: {
        ChannelName: data.ChannelName,
        channel: data.channel
      }
    })
    res.send({success: 'success'})
  } catch (error) {ObjectId
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}
const DeleteChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const channel = await ChannelCollection.deleteOne({_id: ObjectId(id)})
    res.send({success: 'success'})
  } catch (error) {ObjectId
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}
module.exports = {
  CreateChannel,
  GetAllChannel,
  GetEditChannel,
  PutEditChannel,
  DeleteChannel
};