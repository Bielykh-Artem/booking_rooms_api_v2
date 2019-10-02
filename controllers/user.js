require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectID
const moment = require('moment')

const api_key = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})

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

    const token = jwt.sign({ user: updatedUser}, process.env.SECRET)
    ctx.body = { token, user: updatedUser }

  } catch (err) {
    ctx.throw(err)
  }
}

const createUser = async ctx => {
  const payload = ctx.request.body
  const { origin } = ctx.request.headers

  const newUser = new User(payload)
  newUser._id = new ObjectId()
  newUser.editable = false

  try {
    const savedUser = await newUser.save()

    const emailVerificationToken = jwt.sign({
      exp: moment().add(1, 'hours').valueOf(), // 1 hour
      data: savedUser._id
    }, process.env.EMAIL_VERIFICATION_SECRET)

    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: savedUser.email || 'bielykh.artem@gmail.com',
      // to: 'bielykh.artem@gmail.com',
      subject: 'Hello',
      text: `You invited to company. To activate your account, follow the link: ${origin}/activation/${emailVerificationToken}`
    }

    mailgun.messages().send(data, (error, body) => {
      console.log(body)
    })

    ctx.body = savedUser
  } catch (err) {
    ctx.throw(err)
  }
}

const fetchUsers = async ctx => {
  const { user } = ctx.decoded
  try {
    const users = await User.find({ company: user.company._id }).populate('company')
    ctx.body = users
  } catch(err) {
    ctx.throw(err)
  }
}

const removeUserById = async ctx => {
  const { userId } = ctx.params

  try {
    const removedUser = await User.deleteOne({ _id: userId })
		ctx.body = removedUser
  } catch(err) {
    ctx.throw(err)
  }
}

module.exports = {
  fetchUsers,
  fetchUserById,
  editUserById,
  createUser,
  removeUserById
}