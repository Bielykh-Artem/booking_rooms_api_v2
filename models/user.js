const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  language: { type: String, default: 'ENG' },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  companies: { type: Array, default: null },
  hash: { type: String },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  role: { type: String, default: '' },
  active: { type: Boolean, default: false, required: true },
  
})

module.exports = mongoose.model('User', userSchema)