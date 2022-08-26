const momentService = require('../service/moment_service')
const fileService = require('../service/file_service')
const fs = require('fs')

const { APP_HOST, MYSQL_HOST } = require('../app/config')
const { PICTURE_PATH } =  require('../constants/file_path')

class MomentController {
  async create(ctx, next) {
    // 获取数据（user_id、title、content）
    const userId = ctx.user.id
    const momentInfo = ctx.request.body  // 需要添加的动态信息

    const result = await momentService.create(userId, momentInfo)

    ctx.body = result
  };

  async detail(ctx, next) {
    // 获取momentId
    const momentId = ctx.params.momentId
    // 根据momentId查询数据
    const result = await momentService.getMomentById(momentId)

    ctx.body = result
  };

  async list(ctx, next) {
    // 获取offset、size
    const { offset, size } = ctx.query  // 分页数据
    // 根据传入条件查询
    const result = await momentService.getMomentList(offset, size)

    ctx.body = result
  };

  async update(ctx, next) {
    const momentId = ctx.params.momentId
    const momentInfo = ctx.request.body  // 动态id及动态信息
    const result = await momentService.updateMomentById(momentId, momentInfo)

    ctx.body = result
  };

  async remove(ctx, next) {
    const momentId = ctx.params.momentId  // 动态id
    const result = await momentService.deleteMomentById(momentId)

    ctx.body = `删除${momentId}成功`
  };

  async addLabels(ctx, next) {
    const { labels } = ctx
    const { momentId } = ctx.params

    for (const label of labels) {
      // 判断当前动态是否与label关联
      const isExistsLabel = await momentService.hasLabel(momentId, label.id)
      if(!isExistsLabel) {
        // 添加label
        await momentService.addLabel(momentId, label.id)
        ctx.body = "给动态添加标签成功"
      }
      ctx.body = "请不要重复添加标签"
    }
  };

  // 根据文件名字获取文件信息
  async getFileInfo(ctx, next) {
    const { filename } = ctx.params
    const fileInfo = await fileService.getFileInfoByFilename(filename)

    ctx.response.set('content-type', fileInfo.mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`)

  }
}

module.exports = new MomentController()
