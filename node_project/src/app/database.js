const mysql = require("mysql2")
const { 
  MYSQL_HOST, 
  MYSQL_PORT, 
  MYSQL_DATABASE, 
  MYSQL_USER, 
  MYSQL_PASSWORD 
} = require('./config')

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
})

const statement = ``

connections.getConnection((err, conn) => {
  conn.connect(err => {
    // err为空时表示连接成功
    if(err) {
      console.log('fail to connect database', err)
    }else {
      console.log('success to connect database')
    }
  })
})

module.exports = connections.promise()
