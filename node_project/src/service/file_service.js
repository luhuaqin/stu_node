const connection = require('../app/database')

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement =  `INSERT INTO avatar (filename, minetype, size, user_id) VALUES (?, ?, ?, ?);`
    const [result] = await connection.execute(statement, [ filename, mimetype, size, userId ])

    return result
  };

  // 根据userId获取头像信息
  async getAvatarInfoById(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`
    const [result] = await connection.execute(statement, [ userId ])

    return result[0]
  }
}

module.exports = new FileService()
