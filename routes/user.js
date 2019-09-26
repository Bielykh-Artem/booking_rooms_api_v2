const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const Ctrl = require('../controllers/user')

router.get('/:userId', Ctrl.fetchUserById)
router.put('/:userId', Ctrl.editUserById)
 
module.exports = router.routes()