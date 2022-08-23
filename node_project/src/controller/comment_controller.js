const commentService = require('../service/comment_service')

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.createComment(momentId, content, id)

    ctx.body = `成功发表评论`
  }
}

module.exports = new CommentController()
