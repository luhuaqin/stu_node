const connection = require('../app/database')

class AuthService {
  async login(userInfo) {
    const { name, password } = userInfo
    const statement = `SELECT * FROM user WHERE name = ? AND password = ?;`
    const result = connection.execute(statement, [name, password])

    return result
  }
}

module.exports = new AuthService()
