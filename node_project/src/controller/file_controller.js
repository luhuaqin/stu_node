const fileService = require('../service/file_service')
const userService = require('../service/user_service')
const { APP_HOST, APP_PORT } = require('../app/config')

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 获取图像信息
    const { mimetype, size, filename } = ctx.req.file
    const { id } = ctx.user
    // 将图像信息保存到数据库
    const result = await fileService.createAvatar(filename, mimetype, size, id)

    // 将图片地址保存到user表中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
    
    await userService.updateAvatarUrlById(avatarUrl, id)

    ctx.body = '头像上传成功'
  };

  async savePictureInfo(ctx, next) {
    const files = ctx.req.files
    const { id } = ctx.user
    const { momentId } = ctx.query

    for (const file of files) {
      const { mimetype, size, filename } = file
      await fileService.createPictures(mimetype, size, filename, id, momentId)
    }

    ctx.body = '图片上传成功'
  }
}

module.exports = new FileController()
