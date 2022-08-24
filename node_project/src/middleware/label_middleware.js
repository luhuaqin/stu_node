const labelService = require('../service/label_service')

const verifyLabelExists = async (ctx, next) => {
  // 取出要添加的标签
  const { labels } = ctx.request.body

  const newLabels = []
  for (const name of labels) {
    const labelResult = await labelService.getLabelByName(name)
    const label = { name }
    // 判断标签是否存在，如果不存在创建
    if(!labelResult) {
      // 创建标签数据
      const result = await labelService.createLabel(name)
      label.id = result.insertId
    }else {
      label.id = labelResult.id
    }
    newLabels.push(label)
  }
  ctx.labels = newLabels

  await next()
}

module.exports = {
  verifyLabelExists
}
