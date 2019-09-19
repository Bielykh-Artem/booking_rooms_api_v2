module.exports = (privateRouter, publicRouter) => {
  publicRouter.use(require('./auth'))
  privateRouter.use(require('./user'))
  privateRouter.use(require('./company'))
  privateRouter.use(require('./room'))
  // privateRouter.use(require('./event'))
}