const Router = require('koa-router')

const authRouter = new Router()

const {
  login,
  success
} = require('../controller/auth_controller')

const {
  verifyLogin,
  verifyAuth
} = require('../middleware/auth_middleware')

authRouter.post('/login', verifyLogin, login)
// 以下接口没有其他意义，封装一个验证授权工具函数，旨在验证token是否生效
authRouter.get('/test', verifyAuth, success)

module.exports = authRouter
