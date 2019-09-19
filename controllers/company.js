const Company = require('../models/company')
const ObjectId = require('mongodb').ObjectID

const addNewCompany = async ctx => {
  const company = ctx.request.body

  const newCompany = new Company(company)
  newCompany._id = new ObjectId()

  try {
    const savedCompany = await newCompany.save()
    ctx.body = savedCompany
  } catch (err) {
    ctx.throw(err)
  }
}

module.exports = {
  addNewCompany
}