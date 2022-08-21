const mysql = require('mysql2')

// 1、创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'learn_mysql',
  user: 'root',
  password: 'root'
})

// 2、执行SQL语句
const statement = `
  SELECT * FROM products WHERE price > 6000;
`
// 增删改查都是使用query
connection.query(statement, (err, result, fields) => {
  console.log(result)
  connection.end()  // 终止发生错误时会执行此语句，执行下面错误回调
  // connection.destroy()  // 或者执行该销毁语句
})


connection.on('error', () => {

})
