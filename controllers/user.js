const User = require('../models/user')

const fetchUserById = async ctx => {
  const { id } = ctx.params

  try {
    const user = await User.findOne({ _id: id })
    ctx.body = user
  } catch (err) {
    ctx.throw(err)
  }

}

module.exports = {
  fetchUserById
}