const { NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require('../constants/error_types')
const userService = require('../service/user_service')
const md5password = require('../utils/password_handle')

// 验证用户名密码
const verifyUser = async (ctx, next) => {
  // 获取用户名密码
  const { name, password } = ctx.request.body;

  // 判断用户名或者密码不能为空
  if(!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断本次注册的用户名未被注册
  const result = await userService.getUserName(name)
  if(result.length) {
    const error = new Error(USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next();
}

// 密码加密
const handlePassword = async (ctx, next) => {
  // 获取用户注册时的密码
  const { password } = ctx.request.body
  // 重新赋值加密后的密码，这里使用md5加密
  ctx.request.body.password = md5password(password)
  console.log(ctx.request.body.password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}
