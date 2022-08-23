const jwt = require('jsonwebtoken')

const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
  UNPERMISSION
} = require('../constants/error_types')
const userService = require('../service/user_service')
const authService = require('../service/auth_service')
const md5password = require('../utils/password_handle')
const { PUBLIC_KEY } = require('../app/config')

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

const verifyAuth = async(ctx, next) => {
  // 验证授权
  console.log("验证授权的middleware")
  // 获取token
  const authorization = ctx.headers.authorization;
  if(!authorization) {
    const error = new Error(UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  // 验证token
  try {
    const jwtResult = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = jwtResult
    await next()
  } catch (err) {
    const error = new Error(UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

const verifyPermission = async (ctx, next) => {
  // 获取信息
  console.log("验证权限的middleware")
  const { momentId } = ctx.params
  const { id } = ctx.user

  // 查询是否具备权限
  try {
    const isPermission = await authService.checkMoment(momentId, id)
    if(!isPermission) throw new Error()
    await next()
  } catch (err) {
    console.log(err)
    const error = new Error(UNPERMISSION)
    return ctx.app.emit('error', error, ctx)
  }
}

module.exports = { verifyLogin, verifyAuth, verifyPermission }
