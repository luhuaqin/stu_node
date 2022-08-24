const Router = require('koa-router')

const { verifyUser } = require('../middleware/user_middleware')
const { verifyAuth, verifyPermission } = require('../middleware/auth_middleware')
const { create, detail, list, update, remove, addLabels } = require('../controller/moment_controller')
const { verifyLabelExists } = require('../middleware/label_middleware')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)  // 添加动态，并验证是否登录
momentRouter.get('/', list)  // 查询动态列表
momentRouter.get('/:momentId', detail)  // 根据动态id查询单条动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)  // 根据动态id修改动态，并验证是否拥有权限
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)  // 根据动态id删除动态，并验证是否拥有权限

momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels)  // 给动态添加标签‘/动态id/标签’

module.exports = momentRouter
