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
  }
}

module.exports = new LabelService()
