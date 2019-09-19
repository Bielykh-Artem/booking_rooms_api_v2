const Router = require('koa-router')
const router = new Router({ prefix: '/room' })

const Ctrl = require('../controllers/room')

router.get('/', Ctrl.fetchRooms)
router.post('/', Ctrl.addNewRoom)
router.put('/:roomId', Ctrl.editRoomByUserId)
router.delete('/:roomId', Ctrl.removeRoomById)
 
module.exports = router.routes()