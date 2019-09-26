const Room = require('../models/room')
const ObjectId = require('mongodb').ObjectID

const fetchRooms = async ctx => {
  const { user: { company: { _id } } } = ctx.decoded

  try {
    const rooms = await Room.find({ company: _id })
    ctx.body = rooms
  } catch (err) {
    ctx.throw(err)
  }

}

const addNewRoom = async ctx => {
  const { user } = ctx.decoded
  const room = ctx.request.body

  const newRoom = new Room({
    company: user.company._id,
    createdBy: user._id,
    image: room.image,
    name: room.name
  })

  newRoom._id = new ObjectId()

  try {
    const savedRoom = await newRoom.save()
    ctx.body = savedRoom
  } catch (err) {
    console.log(err)
    ctx.throw(err)
  }
}

const editRoomByUserId = async ctx => {
  const room = ctx.request.body
  const { roomId } = ctx.params
  
  try {
		const updatedRoom = await Room.findByIdAndUpdate({ _id: roomId }, room, {new: true})
		ctx.body = updatedRoom
	} catch (err) {
		ctx.throw(err)
	}
}

const removeRoomById = async ctx => {
  const { roomId } = ctx.params

  try {
    const removedRoom = await Room.deleteOne({ _id: roomId })
		ctx.body = removedRoom
  } catch(err) {
    ctx.throw(err)
  }
}

module.exports = {
  fetchRooms,
  addNewRoom,
  editRoomByUserId,
  removeRoomById
}