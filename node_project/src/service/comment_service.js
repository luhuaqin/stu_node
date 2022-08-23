const connection = require('../app/database')

class CommentService {
  async createComment(momentId, content, userId) {
    const statement = `INSERT INTO comment ( moment_id, content, user_id) VALUES (?, ?, ?);`
    const result = await connection.execute(statement, [ momentId, content, userId ])
    return result
  }
}

module.exports = new CommentService()
