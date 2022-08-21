const userService = require('../service/user_service')

class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const userInfo = ctx.request.body
    
    // 查询数据
    const result = await userService.create(userInfo)

    // 返回数据
    ctx.body = result
  }
}

module.exports = new UserController()
