const Router = require('koa-router')

const { create } = require('../controller/user_controller')
const { verifyUser, handlePassword } = require('../middleware/user_middleware')

const userRouter = new Router({ prefix: '/users' })

// 在创建前需要验证添加的数据是否符合要求及密码加密
userRouter.post('/', verifyUser, handlePassword, create)

module.exports = userRouter
