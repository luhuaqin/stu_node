const Router = require('koa-router')

const { verifyUser } = require('../middleware/user_middleware')
const { verifyAuth, verifyPermission } = require('../middleware/auth_middleware')
const { create, detail, list, update } = require('../controller/moment_controller')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)  // 添加动态
momentRouter.get('/', list)  // 查询动态列表
momentRouter.get('/:momentId', detail)  // 根据动态id查询单条动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)

module.exports = momentRouter
