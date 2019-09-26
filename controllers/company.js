const Company = require('../models/company')
const ObjectId = require('mongodb').ObjectID

const fetchCompanies = async ctx => {
  try {
    const companies = await Company.find()
    ctx.body = companies
  } catch (err) {
    ctx.throw(err)
  }
}

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

const editCompany = async ctx => {
  const { companyId } = ctx.params
  const company = ctx.request.body

  try {
		const updatedCompany = await Company.findByIdAndUpdate({ _id: companyId }, company, {new: true})
		ctx.body = updatedCompany
	} catch (err) {
		ctx.throw(err)
	}
}

module.exports = {
  fetchCompanies,
  addNewCompany,
  editCompany
}