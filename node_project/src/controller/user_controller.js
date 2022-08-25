const fs = require('fs')

const userService = require('../service/user_service')
const fileService = require('../service/file_service')

const { AVATAR_PATH } = require('../constants/file_path')
class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const userInfo = ctx.request.body
    
    // 查询数据
    const result = await userService.create(userInfo)

    // 返回数据
    ctx.body = result
  };

  // 根据userId获取头像信息
  async getAvatarInfo(ctx, next) {
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarInfoById(userId)
    console.log(avatarInfo)

    // 提供图像信息
    ctx.response.set('content-type', avatarInfo.mimetype) // 添加这个响应就是获取文件类型直接在浏览器中展示
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)  // 直接文件下载（如果不添加上一行response）
  }
}

module.exports = new UserController()
