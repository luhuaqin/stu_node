const connection = require('../app/database')

const sqlFragment = `
  SELECT m.id id, m.title title, m.content content, m.createAt createTime, m.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) user
    FROM moment m LEFT JOIN user u ON m.user_id = u.id 
`

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
      ${sqlFragment}
      WHERE m.id = ?;
    `
    const [result] = await connection.execute(statement, [ momentId ])

    return result[0]
  };

  // 查询动态列表
  async getMomentList(offset, size) {
    const statement =  `
    ${sqlFragment}
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
    const result = connection.execute(statement, [title, content, momentId ])

    return result
  }
}

module.exports = new MomentService()
