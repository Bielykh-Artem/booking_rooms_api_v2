const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    enum: ['User']
  },
  owner: { type: Schema.ObjectId, ref: 'User', required: true },
  companyName: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  createdBy: { type: Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Company', companySchema)