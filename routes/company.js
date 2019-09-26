const Router = require('koa-router')
const router = new Router({ prefix: '/company' })

const Ctrl = require('../controllers/company')

router.get('/', Ctrl.fetchCompanies)
router.post('/', Ctrl.addNewCompany)
router.put('/:companyId', Ctrl.editCompany)
 
module.exports = router.routes()