const labelService = require('../service/label_service')

class LabelController {
  async create(ctx, next) {
    try {
      const { name } = ctx.request.body
      const result = await labelService.createLabel(name)

      ctx.body = `标签创建成功`
    } catch (error) {
      console.log(error)
    }
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query
    const result = await labelService.getLabelList(offset, size)

    ctx.body = result
  }
}

module.exports = new LabelController()
