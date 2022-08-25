const fileService = require('../service/file_service')

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 获取图像信息
    const { mimetype, size, filename } = ctx.req.file
    const { id } = ctx.user
    // 将图像信息保存到数据库
    const result = await fileService.createAvatar(filename, mimetype, size, id)
    console.log(result)

    ctx.body = '头像上传成功'
  }
}

module.exports = new FileController()
