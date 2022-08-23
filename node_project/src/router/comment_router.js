const Router = require('koa-router')

const { verifyAuth, verifyPermission } = require('../middleware/auth_middleware')
const { create, remove, list, update, reply } = require('../controller/comment_controller')

const momentRouter = new Router({ prefix: '/comment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.post('/:commentId/reply', verifyAuth, reply)  // 回复评论
momentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove)
momentRouter.patch('/:commentId', verifyAuth, verifyPermission, update)
momentRouter.get('/', list)

module.exports = momentRouter
