
const Event = require('../models/event')
const moment = require('moment')
const ObjectId = require('mongodb').ObjectID

const fetchEvents = async ctx => {
  const { date, roomId } = ctx.request.body
  try {
    const startDate = moment(date).utc(true).startOf('day').format()
    const endDate = moment(date).utc(true).endOf('day').format()

    const events = await Event.find({
      room: roomId,
      date: {
        $gte: new Date(startDate), 
        $lt: new Date(endDate)
      }
    }).populate('createdBy')
    ctx.body = events
  } catch (err) {
    ctx.throw(err)
  }
}

const addNewEvent = async ctx => {
  const event = ctx.request.body
  const { user } = ctx.decoded

  const newEvent = new Event({
    ...event,
    company: user.company._id,
    createdBy: user._id
  })

  newEvent._id = new ObjectId()

  try {
    const savedEvent = await newEvent.save().then(t => t.populate('createdBy').execPopulate())
    ctx.body = savedEvent
  } catch (err) {
    ctx.throw(err)
  }
}

const removeEventById = async ctx => {
  const { eventId } = ctx.params

  try {
    const removedEvent = await Event.deleteOne({ _id: eventId })

		ctx.body = {
      ...removedEvent,
      _id: eventId
    }
  } catch(err) {
    ctx.throw(err)
  }
}

module.exports = {
  fetchEvents,
  addNewEvent,
  removeEventById
}