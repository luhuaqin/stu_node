const connection = require('../app/database')

class CommentService {
  async createComment(momentId, content, userId) {
    const statement = `INSERT INTO comment ( moment_id, content, user_id) VALUES (?, ?, ?);`
    const result = await connection.execute(statement, [ momentId, content, userId ])
    return result
  };

  async replyComment(momentId, content, commentId, userId) {
    const statement = `INSERT INTO comment ( moment_id, content, user_id, comment_id) VALUES (?, ?, ?, ?);`
    const result = await connection.execute(statement, [ momentId, content, userId, commentId ])

    return result
  };

  async deleteCommentById(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`
    const result = await connection.execute(statement, [ commentId ])

    return result
  };

  async updateCommentById(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`
    const result = await connection.execute(statement, [ content, commentId ])

    return result
  };

  async getCommentList(momentId) {
    const statement = `SELECT * FROM comment WHERE moment_id = ?;`
    const [result] = await connection.execute(statement, [ momentId ])

    return result
  }
}

module.exports = new CommentService()
