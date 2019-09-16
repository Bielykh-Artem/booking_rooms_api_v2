module.exports = (privateRouter, publicRouter) => {
  publicRouter.use(require('./auth'))
  publicRouter.use(require('./user'))
  // privateRouter.use(require('./room'))
  // privateRouter.use(require('./event'))
}