require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectID
const moment = require('moment')

const editEmployeeById = async ctx => {
  const { employeeId } = ctx.params
  const employee = ctx.request.body

  try {
    const updatedEmployee = await User.findOneAndUpdate({ _id: employeeId }, employee, {new: true}).populate('company')
    ctx.body = updatedEmployee

  } catch (err) {
    ctx.throw(err)
  }
}

module.exports = {
  editEmployeeById
}