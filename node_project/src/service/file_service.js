const connection = require('../app/database')

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement =  `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`
    const [result] = await connection.execute(statement, [ filename, mimetype, size, userId ])

    return result
  };

  // 根据userId获取头像信息
  async getAvatarInfoById(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`
    const [result] = await connection.execute(statement, [ userId ])

    return result[0]
  };

  // 添加文章配图
  async createPictures(mimetype, size, filename, userId, momentId) {
    const statement = `INSERT INTO moment_picture (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?);`
    const [result] = await connection.execute(statement, [ filename, mimetype, size, userId, momentId ])

    return result
  }
}

module.exports = new FileService()
