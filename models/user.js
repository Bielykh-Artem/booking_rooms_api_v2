const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    enum: ['Company']
  },
  language: { type: String, default: 'ENG' },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  company: { type: Schema.ObjectId, ref: 'Company', default: null },
  hash: { type: String },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  role: { type: Array, default: [4] },
  avatar: { type: String, default: '' },
  active: { type: Boolean, default: false, required: true },
  editable: { type: Boolean, default: true, required: true }
})

module.exports = mongoose.model('User', userSchema)