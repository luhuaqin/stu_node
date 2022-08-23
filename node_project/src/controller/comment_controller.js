const commentService = require('../service/comment_service')

class CommentController {
  async create(ctx, next) {
    const { commentId, content } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.createComment(commentId, content, id)

    ctx.body = `成功发表评论`
  };

  async remove(ctx, next) {
    const { commentId } = ctx.params
    const result = await commentService.deleteCommentById(commentId)

    ctx.body = `${commentId}删除成功`
  };

  async update(ctx, next) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body
    const result = await commentService.updateCommentById(commentId, content)

    ctx.body = result
  };

  async list(ctx, next) {
    const { momentId } = ctx.query
    const result = await commentService.getCommentList(momentId)

    ctx.body = result
  };

  async reply(ctx, next) {
    const { commentId } = ctx.params
    const { momentId, content } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.replyComment(momentId, content, commentId, id)

    ctx.body = result
  }
}

module.exports = new CommentController()
