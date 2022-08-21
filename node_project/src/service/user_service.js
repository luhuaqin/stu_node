const connection = require('../app/database')

class UserService {
  async create(userInfo) {
    // 将userInfo存储到数据库中
    const { name, password } = userInfo
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const result = connection.execute(statement, [name, password])
    
    return result
  }

  async getUserName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const result = await connection.execute(statement, [ name ])

    return result[0]
  }
}

module.exports = new UserService()
