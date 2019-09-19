const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const Ctrl = require('../controllers/user')

router.get('/:id', Ctrl.fetchUserById)
router.put('/:id', Ctrl.editUserById)
 
module.exports = router.routes()