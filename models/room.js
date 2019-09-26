const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    enum: ['Event']
  },
  company: { type: Schema.ObjectId, ref: 'Company', default: null },
  createdBy: { type: Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  image: { type: String },
  name: { type: String, required: true }
})

module.exports = mongoose.model('Room', roomSchema)