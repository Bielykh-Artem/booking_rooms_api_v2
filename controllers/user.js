const User = require('../models/user')

const fetchUserById = async ctx => {
  const { userId } = ctx.params

  try {
    const user = await User.findOne({ _id: userId }).populate('company')
    ctx.body = user
  } catch (err) {
    ctx.throw(err)
  }

}

const editUserById = async ctx => {
  const { userId } = ctx.params
  const user = ctx.request.body

  try {
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, user, {new: true}).populate('company')
    ctx.body = updatedUser
  } catch (err) {
    ctx.throw(err)
  }
}

module.exports = {
  fetchUserById,
  editUserById
}