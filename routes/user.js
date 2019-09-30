const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const Ctrl = require('../controllers/user')

router.get('/', Ctrl.fetchUsers)
router.get('/:userId', Ctrl.fetchUserById)
router.put('/:userId', Ctrl.editUserById)
router.post('/', Ctrl.createUser)
router.delete('/:userId', Ctrl.removeUserById)

module.exports = router.routes()