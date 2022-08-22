const momentService = require('../service/moment_service')

class MomentController {
  async create(ctx, next) {
    // 获取数据（user_id、title、content）
    const userId = ctx.user.id
    const momentInfo = ctx.request.body

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
    const { offset, size } = ctx.query
    // 根据传入条件查询
    const result = await momentService.getMomentList(offset, size)

    ctx.body = result
  };

  async update(ctx, next) {
    const momentId = ctx.params.momentId
    const momentInfo = ctx.request.body
    const { id } = ctx.user

    // const result = await momentService.updateMomentById(momentId, momentInfo)

    return result
  }
}

module.exports = new MomentController()
