const Router = require('koa-router')
const router = new Router({ prefix: '/company' })

const Ctrl = require('../controllers/company')

router.post('/', Ctrl.addNewCompany)
 
module.exports = router.routes()