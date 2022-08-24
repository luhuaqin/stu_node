const connction = require('../app/database')

class LabelService {
  async createLabel(name) {
    try {
      const statement = `INSERT INTO label (name) VALUES (?);`
      const result = await connction.execute(statement, [name])
      return result
    } catch (error) {
      console.log(error)
    }
  };

  async getLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name = ?;`
    const [result] = await connction.execute(statement, [name])

    return result[0]
  };

  async getLabelList(offset, size) {
    const statement = `SELECT * FROM label LIMIT ?, ?;`
    const [result] = await connction.execute(statement, [ offset, size ])

    return result
  }
}

module.exports = new LabelService()
