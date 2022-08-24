const commentService = require('../service/comment_service')

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body  // 评论动态id和评论内容
    const { id } = ctx.user
    const result = await commentService.createComment(momentId, content, id)

    ctx.body = `成功发表评论`
  };

  async remove(ctx, next) {
    const { commentId } = ctx.params  // 评论id
    const result = await commentService.deleteCommentById(commentId)

    ctx.body = `${commentId}删除成功`
  };

  async update(ctx, next) {
    const { commentId } = ctx.params  // 评论id
    const { content } = ctx.request.body // 评论修改内容
    const result = await commentService.updateCommentById(commentId, content)

    ctx.body = result
  };

  async list(ctx, next) {
    const { momentId } = ctx.query  // 动态id
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
