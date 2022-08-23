const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth_middleware')
const { create } = require('../controller/comment_controller')

const momentRouter = new Router({ prefix: '/comment' })

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter
