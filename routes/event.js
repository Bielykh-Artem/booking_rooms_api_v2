const Router = require('koa-router')
const router = new Router({ prefix: '/event' })

const Ctrl = require('../controllers/event')

router.post('/:roomId', Ctrl.fetchEvents)
router.post('/', Ctrl.addNewEvent)
router.delete('/:eventId', Ctrl.removeEventById)
 
module.exports = router.routes()