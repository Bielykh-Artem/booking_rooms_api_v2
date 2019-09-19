const User = require('../models/user')

const fetchUserById = async ctx => {
  const { id } = ctx.params

  try {
    const user = await User.findOne({ _id: id }).populate('company')
    ctx.body = user
  } catch (err) {
    ctx.throw(err)
  }

}

const editUserById = async ctx => {
  const { id } = ctx.params
  const user = ctx.request.body

  try {
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, user, {new: true})
    ctx.body = updatedUser
  } catch (err) {
    ctx.throw(err)
  }
}

module.exports = {
  fetchUserById,
  editUserById
}