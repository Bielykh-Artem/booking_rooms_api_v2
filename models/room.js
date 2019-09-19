const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
  company: { type: Schema.ObjectId, ref: 'Company', default: null },
  createdBy: { type: Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  image: { type: String },
  name: { type: String, required: true }
})

module.exports = mongoose.model('Room', roomSchema)