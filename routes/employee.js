const Router = require('koa-router')
const router = new Router({ prefix: '/employee' })

const Ctrl = require('../controllers/employee')

router.put('/:employeeId', Ctrl.editEmployeeById)

module.exports = router.routes()