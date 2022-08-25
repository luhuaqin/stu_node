const connection = require('../app/database')

// const sqlFragment = `
//   SELECT m.id id, m.title title, m.content content, m.createAt createTime, m.updateAt updateTime,
//     JSON_OBJECT('id', u.id, 'name', u.name) author
//     FROM moment m LEFT JOIN user u ON m.user_id = u.id 
// `

class MomentService {
  // 添加动态
  async create(userId, momentInfo) {
    const { title, content } = momentInfo

    const statement = `INSERT INTO moment (title, content, user_id) VALUES (?, ?, ?);`
    const result = await connection.execute(statement, [title, content, userId])

    return result
  };

  // 查询单条动态
  async getMomentById(momentId) {
    const statement = `
      SELECT m.id id, m.title title, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author,
        IF(COUNT(c.id), JSON_ARRAYAGG(JSON_OBJECT('id', c.id, 'content', c.content, 'commentId', c.comment_id, 'createTime', c.createAt, 
            'user', JSON_OBJECT('id', cu.id, 'name', cu.name)
          )
        ), NULL) comments,
        (SELECT IF(COUNT(l.id), JSON_ARRAYAGG(JSON_OBJECT('id', l.id, 'name', l.name)), NULL) FROM label l 
            LEFT JOIN moment_label ml ON ml.label_id = l.id 
            WHERE m.id = ml.moment_id
        ) labels
      FROM moment m 
      LEFT JOIN user u ON m.user_id = u.id
      LEFT JOIN comment c ON c.comment_id = m.id OR c.moment_id = m.id
      LEFT JOIN user cu ON c.user_id = cu.id
      WHERE m.id = ?;
    `
    const [result] = await connection.execute(statement, [ momentId ])

    return result[0]
  };

  // 查询动态列表
  async getMomentList(offset, size) {
    const statement =  `
      SELECT m.id id, m.title title, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author,
        (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
        (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
      FROM moment m LEFT JOIN user u ON m.user_id = u.id 
      LIMIT ?, ?;
    `
    const [result] = await connection.execute(statement, [ offset, size ])

    return result
  };

  // 修改动态
  async updateMomentById(momentId, momentInfo) {
    const { title, content } = momentInfo
    const statement = `
      UPDATE moment SET title = ?, content = ? WHERE id = ?;
    `
    const result = await connection.execute(statement, [title, content, momentId ])

    return result
  }

  // 删除动态
  async deleteMomentById(momentId) {
    const statement =  `DELETE FROM moment WHERE id = ?;`
    const [result] = await connection.execute(statement, [ momentId ])

    return result
  }

  // 判断动态是否有label标签
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`
    const [result] = await connection.execute(statement, [momentId, labelId])

    return result[0] ? true : false
  }

  // 给动态添加label
  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`
    const result = await connection.execute(statement, [ momentId, labelId ])

    return result
  }
}

module.exports = new MomentService()
