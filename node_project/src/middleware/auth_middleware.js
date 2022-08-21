const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_NOT_EXISTS,
  PASSWORD_IS_INCORRECT
} = require('../constants/error_types')
const userService = require('../service/user_service')
const md5password = require('../utils/password_handle')

const verifyLogin = async (ctx, next) => {
  // 获取用户名和密码
  const { name, password } = ctx.request.body

  // 判断用户名密码是否为空
  if(!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户是否存在
  const result = await userService.getUserName(name)
  const user = result[0]
  if(!user) {
    const error = new Error(USER_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断密码是否和数据库中的密码一致（加密后与数据库中进行比对）
  if(md5password(password) !== user.password) {
    const error = new Error(PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user
  
  await next()
}

const verifyAuth = async() => {

  await next()
}

module.exports = { verifyLogin }
