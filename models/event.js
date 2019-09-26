const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  company: { type: Schema.ObjectId, ref: 'Company', default: null },
  createdBy: { type: Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now, required: true },
  room: { type: Schema.ObjectId, ref: 'Room', default: null },
  description: { type: String, required: true },
  eventTime: { type: Array, required: true },
  name: { type: String, required: true }
})

module.exports = mongoose.model('Event', eventSchema)